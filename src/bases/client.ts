
import { Client, ClientEvents, Collection, GatewayIntentBits } from "discord.js";
import { Command } from "./command.js";
import { dynamicImport } from "./../utils/utils.js";
import { Event } from "./event.js";

import fs from "fs";
import path from "path";

export class ExtendedClient extends Client {
    private readonly _commands: Collection<string, Command> = new Collection<string, Command>();

    private readonly _dirname: string;

    constructor(dirname: string) {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions
            ]
        });

        this._dirname = dirname;

        this.loadEvents();
        this.loadCommands();
    }

    private async loadEvents(): Promise<void> {
        const eventsPath: string = path.join(this._dirname, "events");
        const eventsFiles: string[] = fs.readdirSync(eventsPath).filter((file: string) => file.endsWith(".js"));

        for (const file of eventsFiles) {
            const filePath: string = path.join(eventsPath, file);
            const event: Event<keyof ClientEvents> = await dynamicImport(filePath) as Event<keyof ClientEvents>;
            
            if ("name" in event && "execute" in event) {
                if (event.once) {
                    this.once(event.name, (...args) => event.execute(...args));
                } else {
                    this.on(event.name, (...args) => event.execute(...args));
                }
            } else {
                console.warn(`The event at ${filePath} is missing a required "name" or/and "execute" properties.`);
            }
        }
    }

    private async loadCommands(): Promise<void> {
        const commandsPath: string = path.join(this._dirname, "commands");
        const commandsFiles: string[] = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

        for (const file of commandsFiles) {
            const filePath: string = path.join(commandsPath, file);
            const command: Command = await dynamicImport(filePath) as Command;
        
            if ("data" in command && "execute" in command) {
                this._commands.set(command.data.name, command)
            } else {
                console.warn(`The command at ${filePath} is missing a required "data" or/and "execute" properties.`);
            };
        }
    }

    public getCommands(): Collection<string, Command> {
        return this._commands;
    };
}

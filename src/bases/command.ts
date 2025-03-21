import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";

export abstract class Command {
    private readonly _data: SlashCommandBuilder;
    
    constructor(scb: SlashCommandBuilder) {
        this._data = scb;
    }

    public abstract execute(interaction: CommandInteraction<CacheType>): Promise<void>;
    
    public get data(): SlashCommandBuilder {
        return this._data;
    }
}
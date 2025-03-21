import { Client, Events } from "discord.js";
import { Event } from "../bases/event.js";


class ReadyEvent extends Event<Events.ClientReady> {
    public constructor() {
        super(Events.ClientReady, true);
    };
    
    public override execute(_: Client) {
        console.log("Discord bot is ready! 🤖");
    };
};

export default new ReadyEvent();
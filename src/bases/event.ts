
import { ClientEvents } from "discord.js";

export abstract class Event<Key extends keyof ClientEvents> {
    public readonly _name: Key;
    public readonly _once: boolean;


    constructor(name: Key, once: boolean) {
        this._name = name;
        this._once = once;
    };

    
    public abstract execute(...args: ClientEvents[Key]): any;

    public get name(): Key {
        return this._name;
    };
    public get once(): boolean {
        return this._once;
    };
};
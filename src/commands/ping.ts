import { CacheType, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "../bases/command.js";

export class PingCommand extends Command {
  constructor() {
    super(
      new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Replies with Pong!")
    )
  }

  public override async execute(interaction: CommandInteraction<CacheType>): Promise<void> {
    interaction.reply("Pong!");
  }
}

export default new PingCommand();

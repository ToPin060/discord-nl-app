

// import { REST, RouteLike, Routes } from "discord.js";
// import { config } from "../utils/config.js";
// import { commands } from "../commands/index.js";

// const commandsData = Object.values(commands).map((command) => command.data);

// const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

// type DeployCommandsProps = {
//   guildId?: string;
// };

// export async function deployCommands({ guildId }: DeployCommandsProps = {}) {
//   let route: RouteLike;
//   if (guildId === undefined) {
//     route = Routes.applicationCommands(config.DISCORD_CLIENT_ID)
//   } else {
//     route = Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId)
//   }

//   try {
//     console.log("Started refreshing application commands.");
//     await rest.put(
//       route,      
//       {
//         body: commandsData,
//       }
//     );
//     console.log("Successfully reloaded application commands.");
//   } catch (error) {
//     console.error(error);
//   }
// }

// (() => {deployCommands();})()

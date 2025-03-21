
import { config } from "../utils/config.js";
// import { deployCommands } from "./deploy.js";
import { ExtendedClient } from "../bases/client.js";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(dirname(__filename), "..");

const client = new ExtendedClient(__dirname);

client.login(config.DISCORD_TOKEN);

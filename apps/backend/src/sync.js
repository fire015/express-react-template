import "dotenv/config";
import { sequelize } from "./models/index.js";

async function sync() {
  let force = false;

  if (process.argv.slice(-1)[0] === "--force") {
    force = true;
  }

  console.log("Starting sync...");
  await sequelize.sync({ force, alter: true });
  await sequelize.close();
  console.log("Done");
}

sync().catch(console.error);

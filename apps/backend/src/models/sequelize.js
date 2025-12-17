import { Sequelize } from "sequelize";
import config from "../config.js";

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: "mysql",
  logging: process.env.NODE_ENV === "production" ? false : console.log,
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_0900_ai_ci",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  dialectOptions: {
    timezone: "Z",
  },
});

export default sequelize;

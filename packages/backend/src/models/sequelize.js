const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = require("../config");

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
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

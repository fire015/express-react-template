import { ucFirst } from "@my-project/shared";
import { sequelize } from "../../models/index.js";

export const healthCheck = async (req, res) => {
  try {
    await sequelize.authenticate({ raw: true });
    res.send({ message: ucFirst("server is healthy") });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to connect to database" });
  }
};

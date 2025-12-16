const { sequelize } = require("../../models");

const healthCheck = async (req, res) => {
  try {
    await sequelize.authenticate({ raw: true });
    res.send({ message: "Server is healthy" });
  } catch (err) {
    res.status(500).send({ error: "Failed to connect to database" });
  }
};

module.exports = { healthCheck };

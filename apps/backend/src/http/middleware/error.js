const { BaseError: SequelizeBaseError } = require("sequelize");
const { ValidationError } = require("yup");
const { BaseError } = require("../../errors");

module.exports = (err, req, res, next) => {
  // Catch yup validation exceptions
  if (err instanceof ValidationError) {
    res.status(400).send({ error: err.message });
    return;
  }

  // Catch app exceptions
  if (err instanceof BaseError) {
    res.status(err.status).send({ error: err.message });
    return;
  }

  // Catch database exceptions
  if (err instanceof SequelizeBaseError) {
    console.error(err);
    res.status(500).send({ error: "A system error occured, please try again" });
    return;
  }

  // Catch other exceptions
  console.error(err);
  res.status(500).send({ error: err.message });
};

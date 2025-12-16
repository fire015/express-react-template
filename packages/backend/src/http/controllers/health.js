const healthCheck = (req, res) => {
  res.send({ message: "Server is healthy" });
};

module.exports = { healthCheck };

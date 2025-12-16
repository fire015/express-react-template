require("dotenv").config({ quiet: true });
const express = require("express");
const morgan = require("morgan");
const routes = require("./http/routes");

const PORT = process.env.PORT || 4000;
const app = express();

if (app.get("env") === "production") {
  app.set("trust proxy", true);
}

app.disable("x-powered-by");
app.use(
  morgan("dev", {
    // skip: (req, res) => req.path === "/health",
  })
);
app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});

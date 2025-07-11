const express = require("express");
const statusRoutes = require("./routes/status");
const app = express();
app.use(express.json());
app.use("/status", statusRoutes);
module.exports = app;

const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    api: "operando",
    ambiente: process.env.NODE_ENV || "desenvolvimento",
    mysql_host: process.env.DB_HOST
  });
});
module.exports = router;

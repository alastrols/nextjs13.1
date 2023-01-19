const express = require("express");
const router = express.Router();
var cors = require("cors");
const { connection } = require("../../mysql");
const { getToken, verifyToken } = require("../../jwtHandler");

router.post("/sortable", verifyToken, function (req, res) {
  var arr = req.body;
  arr.forEach(function (value, key) {
    connection.query("UPDATE banner SET arr=? WHERE banner_id = ?", [
      key,
      value.banner_id,
    ]);
  });
  res.json({
    status: "success",
  });
});

module.exports = router;

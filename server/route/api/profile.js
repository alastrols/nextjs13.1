const express = require("express");
const router = express.Router();
var cors = require("cors");
const { connection } = require("../../mysql");
const { getToken, verifyToken } = require("../../jwtHandler");

router.get("/", verifyToken, async (req, res) => {
  const { user_id, username, token } = req;
  const [user, result] = await connection.query(
    `SELECT user_id, username, password, fullname, email, level 
    FROM user 
    WHERE username = '${username}' AND status = 'active'`
  );
  res.json({
    status: "success",
    data: {
      user_id: user[0].user_id,
      username: user[0].username,
      fullname: user[0].fullname,
      level: user[0].level,
      token: token,
    },
  });
});

module.exports = router;

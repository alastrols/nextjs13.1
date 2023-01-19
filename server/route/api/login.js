const express = require("express");
const router = express.Router();
var cors = require("cors");
const { connection } = require("../../mysql");
const { getToken, verifyToken } = require("../../jwtHandler");
const bcrypt = require("bcryptjs/dist/bcrypt");

router.post("/", async function (req, res) {
  var username = req.body.username;
  const [user, result] = await connection.query(
    `SELECT user_id, username, password, fullname, email, level 
    FROM user 
    WHERE username = '${username}' AND status = 'active' AND level = 'Administrator' `
  );

  if (user.length == 0) {
    res.json({
      status: "error",
    });
    return false;
  }
  var passwordIsValid = bcrypt.compareSync(req.body.password, user[0].password);
  if (passwordIsValid) {
    var token = getToken({
      user_id: user[0].user_id,
      username: user[0].username,
      department: user[0].dept_name,
      level: user[0].level,
      fullname: user[0].fullname,
    });

    res.json({
      status: "success",
      data: {
        token: token,
        user_id: user[0].user_id,
        username: user[0].username,
        fullname: user[0].fullname,
        department: user[0].dept_name,
        level: user[0].level,
      },
    });
  } else {
    res.json({
      status: "error",
    });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
var cors = require("cors");
const { connection } = require("../../mysql");
const { getToken, verifyToken } = require("../../jwtHandler");

router.get("/", verifyToken, async (req, res) => {
  const { user_id, username, token } = req;
  const [user, result] = await connection.query(
    `SELECT user.user_id, user.username, user.password, user.fullname,user.dept_id, user.email, user.level, department.dept_name 
    FROM user 
    INNER JOIN department 
    ON user.dept_id = department.dept_id 
    WHERE user.username = '${username}' AND user.status = 'active'`
  );
  res.json({
    status: "success",
    data: {
      user_id: user[0].user_id,
      username: user[0].username,
      fullname: user[0].fullname,
      department: user[0].dept_name,
      level: user[0].level,
      token: token,
    },
  });
});

module.exports = router;

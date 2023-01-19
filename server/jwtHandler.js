var jwt = require("jsonwebtoken");

const secretKey = "^%##@%&zeniya-website-token^%##@%&";

function getToken(json) {
  return (token = jwt.sign(json, secretKey, {
    expiresIn: 8640000, // expires in 24 hours
  }));
}

function verifyToken(req, res, next) {
  // console.log("Verify Token: " + JSON.stringify(req.headers));
  var token = req.headers["access-token"].split(" ")[1];

  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, secretKey, function (err, decoded) {
    if (err) {
      return res.json({ status: "error" });
    }
    req.user_id = decoded.user_id;
    req.username = decoded.username;
    req.fullname = decoded.fullname;
    req.level = decoded.level;
    req.token = token;
    next();
  });
}

module.exports = { getToken, verifyToken };

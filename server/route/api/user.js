const express = require("express");
const router = express.Router();
var cors = require("cors");
const { connection } = require("../../mysql");
const { getToken, verifyToken } = require("../../jwtHandler");
const formidable = require("formidable");
const bcrypt = require("bcryptjs/dist/bcrypt");
const readXlsxFile = require("read-excel-file/node");

// S3
const multer = require("multer");
const dotenv = require("dotenv").config();
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const { default: axios } = require("axios");
const XLSX = require("xlsx");
const jsontoxml = require("jsontoxml");

aws.config.update({
  secretAccessKey: process.env.ACCESS_SECRET_AWS,
  accessKeyId: process.env.ACCESS_KEY_AWS,
  region: "ap-southeast-1",
});
// const s3Download = new aws.S3();

// const s3 = new aws.S3();

const s3 = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_AWS,
    secretAccessKey: process.env.ACCESS_SECRET_AWS,
  },
  ACL: "public-read",
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});
const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_AWS,
    ACL: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      time = new Date().getTime();
      destinationPath = "import/user/";
      cb(null, destinationPath + time + "___" + file.originalname);
    },
  }),
});
var s3Stream = require("s3-upload-stream")(s3);
// const singleUpload = uploadS3.single("image");
const multipleupload = uploadS3.fields([{ name: "image" }]);
// S3

router.get("/getbyid", verifyToken, async (req, res) => {
  const { id } = req.query;
  const [data] = await connection.query(
    `SELECT * FROM user WHERE user_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM user WHERE user_id != 1 AND (fullname LIKE ? OR username LIKE ? OR status LIKE ?)  ORDER BY  fullname ASC",
    ["%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%"]
  );
  res.json({ data: data });
  return;
});

router.get("/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM user WHERE status = ? AND user_id != 1 ORDER BY fullname ASC",
    ["active"]
  );
  res.json({ data: data });
  return;
});

router.post("/add", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { fullname, username, password, email, status, level } = fields;
    var hashedPassword = bcrypt.hashSync(password, 8);
    var passwordHashed = hashedPassword;
    const [check] = await connection.query(
      "SELECT user_id FROM user WHERE status = 'active' AND (username = ? OR email = ?)",
      [username, email]
    );
    if (check.length > 0) {
      res.json({ status: "error" });
    } else {
      const [add] = await connection.query(
        "INSERT INTO user (fullname , username , password , email, status, level) VALUES (? , ? , ? , ? , ? , ?)",
        [fullname, username, passwordHashed, email, status, level]
      );
      if (add) {
        res.json({ status: "success" });
      } else {
        res.json({ status: "error" });
      }
    }
  });
});

router.post("/edit", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { fullname, username, password, email, status, level, user_id } =
      fields;

    var hashedPassword = bcrypt.hashSync(password, 8);

    const [check] = await connection.query(
      "SELECT user_id FROM user WHERE status = 'active' AND user_id != ? AND (username = ? OR email = ?)",
      [user_id, username, email]
    );

    if (check.length > 0) {
      res.json("error");
    } else {
      if (password != "") {
        passwordHashed = hashedPassword;
        await connection.query(
          "UPDATE user SET password = ? WHERE user_id = ?",
          [passwordHashed, user_id]
        );
        const [edit] = await connection.query(
          "UPDATE user SET fullname = ? , username = ?, status = ?, email = ?, level = ? WHERE user_id = ?",
          [fullname, username, status, email, level, user_id]
        );
        if (edit) {
          res.json({ status: "success" });
        } else {
          res.json({ status: "error" });
        }
      } else {
        const [edit] = await connection.query(
          "UPDATE user SET fullname = ? , username = ?, status = ?, email = ?, level = ? WHERE user_id = ?",
          [fullname, username, status, email, level, user_id]
        );
        if (edit) {
          res.json({ status: "success" });
        } else {
          res.json({ status: "error" });
        }
      }
    }
  });
});

router.delete("/delete", verifyToken, async function (req, res) {
  const id = req.query.id;
  if (id) {
    const [response] = await connection.query(
      `DELETE FROM user WHERE user_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/checkdelete", function (req, res) {
  var user_id = req.body.checkbox;

  if (user_id) {
    user_id.forEach(function (value) {
      db.query("DELETE FROM user WHERE user_id = ?;", [value]);
    });
    res.json("success");
  }
});

router.post("/upload", uploadS3.any(), async (req, res) => {
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  importExcelUser(url);
  res.json({ status: "success" });
});

async function importExcelUser(url) {
  const options = {
    url,
    responseType: "arraybuffer",
  };
  let axiosResponse = await axios(options);
  const workbook = XLSX.read(axiosResponse.data);

  let worksheets = workbook.SheetNames.map((sheetName) => {
    return {
      sheetName,
      data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
    };
  });
  const toJson = JSON.parse(JSON.stringify(worksheets));
  const data = toJson[0].data;

  data.forEach(async (rows, index) => {
    const fullname = rows["Fullname"];
    const email = rows["Email"];
    const username = rows["Username"];
    const pass = rows["Password"];
    const level = rows["Level"];
    const [check] = await connection.query(
      "SELECT user_id FROM user WHERE status = 'active' AND (username = ? OR email = ?)",
      [username, email]
    );
    if (check.length == 0) {
      var hashedPassword = await bcrypt.hashSync(String(pass), 8);
      var password = hashedPassword;
      const [add] = await connection.query(
        "INSERT INTO user (fullname , username , password , email, status, level) VALUES (? , ? , ? , ? , ? , ?)",
        [fullname, username, password, email, "active", level]
      );
    }
  });
}

module.exports = router;

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
    `SELECT * FROM contact WHERE contact_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM contact WHERE fullname LIKE ? OR lang LIKE ? OR company_name LIKE ? OR phone_number LIKE ?  OR email LIKE ? OR created_at LIKE ?  ORDER BY  created_at ASC",
    [
      "%" + keyword + "%",
      "%" + keyword + "%",
      "%" + keyword + "%",
      "%" + keyword + "%",
      "%" + keyword + "%",
      "%" + keyword + "%",
    ]
  );
  res.json({ data: data });
  return;
});

router.get("/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM contact ORDER BY created_at ASC"
  );
  res.json({ data: data });
  return;
});

router.post("/add", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const {
      fullname,
      lang,
      company_name,
      phone_number,
      email,
      department,
      fax,
      subject,
      detail,
      file,
    } = fields;
    var hashedPassword = bcrypt.hashSync(password, 8);
    var passwordHashed = hashedPassword;

    const [add] = await connection.query(
      "INSERT INTO contact (fullname , lang , company_name , phone_number, email, department, fax, subject, detail, file) VALUES (? , ? , ? , ? , ? , ?, ? , ? , ? , ?)",
      [
        fullname,
        lang,
        company_name,
        phone_number,
        email,
        department,
        fax,
        subject,
        detail,
        file,
      ]
    );
    if (add) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  });
});

router.delete("/delete", verifyToken, async function (req, res) {
  const id = req.query.id;
  if (id) {
    const [response] = await connection.query(
      `DELETE FROM contact WHERE contact_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/checkdelete", function (req, res) {
  var contact_id = req.body.checkbox;

  if (contact_id) {
    contact_id.forEach(function (value) {
      db.query("DELETE FROM contact WHERE contact_id = ?;", [value]);
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

module.exports = router;

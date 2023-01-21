const express = require("express");
const router = express.Router();
var cors = require("cors");
const { connection } = require("../../mysql");
const { getToken, verifyToken } = require("../../jwtHandler");
const formidable = require("formidable");

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
      destinationPath = "banner/";
      cb(null, destinationPath + time + "_" + file.originalname);
    },
  }),
});
var s3Stream = require("s3-upload-stream")(s3);
// const singleUpload = uploadS3.single("image");
const multipleupload = uploadS3.fields([{ name: "image" }]);
// S3

// Banner JP
router.get("/getbyid", verifyToken, async (req, res) => {
  const { id } = req.query;
  const [data] = await connection.query(
    `SELECT * FROM banner WHERE banner_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM banner WHERE topic LIKE ? OR post_date LIKE ? OR status LIKE ?  ORDER BY arr ASC",
    ["%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%"]
  );
  res.json({ data: data });
  return;
});
router.get("/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM banner ORDER BY arr ASC"
  );
  res.json({ data: data });
  return;
});

router.post("/add", uploadS3.any(), async function (req, res) {
  const { post_date, topic, status } = req.body;
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  const [max] = await connection.query("SELECT MAX(arr) as arr FROM banner");
  const [add] = await connection.query(
    "INSERT INTO banner (post_date , topic, status, file, arr) VALUES (? , ? , ? , ?, ? )",
    [post_date, topic, status, url, parseInt(max[0].arr + 1)]
  );
  if (add) {
    res.json({ status: "success" });
  } else {
    res.json({ status: "error" });
  }
});

router.post("/edit/withimage", uploadS3.any(), async function (req, res) {
  const { post_date, topic, status, banner_id } = req.body;
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  const [edit] = await connection.query(
    "UPDATE banner SET post_date = ?, topic = ?, status = ?, file = ? WHERE banner_id = ?",
    [post_date, topic, status, url, banner_id]
  );
  if (edit) {
    res.json({ status: "success" });
  } else {
    res.json({ status: "error" });
  }
});

router.post("/edit", async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, banner_id } = fields;
    const [edit] = await connection.query(
      "UPDATE banner SET post_date = ?, topic = ?, status = ? WHERE banner_id = ?",
      [post_date, topic, status, banner_id]
    );
    if (edit) {
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
      `DELETE FROM banner WHERE banner_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/checkdelete", function (req, res) {
  var banner_id = req.body.checkbox;
  console.log(banner_id);
  if (banner_id) {
    banner_id.forEach(function (value) {
      db.query("DELETE FROM banner WHERE banner_id = ?;", [value]);
    });
    res.json("success");
  }
});

router.post("/sortable", verifyToken, async function (req, res) {
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
// Banner JP

// Banner EN
router.get("/en/getbyid", verifyToken, async (req, res) => {
  const { id } = req.query;
  const [data] = await connection.query(
    `SELECT * FROM banner_en WHERE banner_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/en/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM banner_en WHERE topic LIKE ? OR post_date LIKE ? OR status LIKE ?  ORDER BY arr ASC",
    ["%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%"]
  );
  res.json({ data: data });
  return;
});
router.get("/en/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM banner_en ORDER BY arr ASC"
  );
  res.json({ data: data });
  return;
});

router.post("/en/add", uploadS3.any(), async function (req, res) {
  const { post_date, topic, status } = req.body;
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  const [max] = await connection.query("SELECT MAX(arr) as arr FROM banner_en");
  const [add] = await connection.query(
    "INSERT INTO banner_en (post_date , topic, status, file, arr) VALUES (? , ? , ? , ?, ? )",
    [post_date, topic, status, url, parseInt(max[0].arr + 1)]
  );
  if (add) {
    res.json({ status: "success" });
  } else {
    res.json({ status: "error" });
  }
});

router.post("/en/edit/withimage", uploadS3.any(), async function (req, res) {
  const { post_date, topic, status, banner_id } = req.body;
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  const [edit] = await connection.query(
    "UPDATE banner_en SET post_date = ?, topic = ?, status = ?, file = ? WHERE banner_id = ?",
    [post_date, topic, status, url, banner_id]
  );
  if (edit) {
    res.json({ status: "success" });
  } else {
    res.json({ status: "error" });
  }
});

router.post("/en/edit", async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, banner_id } = fields;
    const [edit] = await connection.query(
      "UPDATE banner_en SET post_date = ?, topic = ?, status = ? WHERE banner_id = ?",
      [post_date, topic, status, banner_id]
    );
    if (edit) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  });
});

router.delete("/en/delete", verifyToken, async function (req, res) {
  const id = req.query.id;
  if (id) {
    const [response] = await connection.query(
      `DELETE FROM banner_en WHERE banner_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/en/checkdelete", function (req, res) {
  var banner_id = req.body.checkbox;
  console.log(banner_id);
  if (banner_id) {
    banner_id.forEach(function (value) {
      db.query("DELETE FROM banner_en WHERE banner_id = ?;", [value]);
    });
    res.json("success");
  }
});

router.post("/en/sortable", verifyToken, async function (req, res) {
  var arr = req.body;
  arr.forEach(function (value, key) {
    connection.query("UPDATE banner_en SET arr=? WHERE banner_id = ?", [
      key,
      value.banner_id,
    ]);
  });
  res.json({
    status: "success",
  });
});
// Banner EN

// Banner TH
router.get("/th/getbyid", verifyToken, async (req, res) => {
  const { id } = req.query;
  const [data] = await connection.query(
    `SELECT * FROM banner_th WHERE banner_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/th/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM banner_th WHERE topic LIKE ? OR post_date LIKE ? OR status LIKE ?  ORDER BY arr ASC",
    ["%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%"]
  );
  res.json({ data: data });
  return;
});
router.get("/th/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM banner_th ORDER BY arr ASC"
  );
  res.json({ data: data });
  return;
});

router.post("/th/add", uploadS3.any(), async function (req, res) {
  const { post_date, topic, status } = req.body;
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  const [max] = await connection.query("SELECT MAX(arr) as arr FROM banner_th");
  const [add] = await connection.query(
    "INSERT INTO banner_th (post_date , topic, status, file, arr) VALUES (? , ? , ? , ?, ? )",
    [post_date, topic, status, url, parseInt(max[0].arr + 1)]
  );
  if (add) {
    res.json({ status: "success" });
  } else {
    res.json({ status: "error" });
  }
});

router.post("/th/edit/withimage", uploadS3.any(), async function (req, res) {
  const { post_date, topic, status, banner_id } = req.body;
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  const [edit] = await connection.query(
    "UPDATE banner_th SET post_date = ?, topic = ?, status = ?, file = ? WHERE banner_id = ?",
    [post_date, topic, status, url, banner_id]
  );
  if (edit) {
    res.json({ status: "success" });
  } else {
    res.json({ status: "error" });
  }
});

router.post("/th/edit", async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, banner_id } = fields;
    const [edit] = await connection.query(
      "UPDATE banner_th SET post_date = ?, topic = ?, status = ? WHERE banner_id = ?",
      [post_date, topic, status, banner_id]
    );
    if (edit) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  });
});

router.delete("/th/delete", verifyToken, async function (req, res) {
  const id = req.query.id;
  if (id) {
    const [response] = await connection.query(
      `DELETE FROM banner_th WHERE banner_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/th/checkdelete", function (req, res) {
  var banner_id = req.body.checkbox;
  console.log(banner_id);
  if (banner_id) {
    banner_id.forEach(function (value) {
      db.query("DELETE FROM banner_th WHERE banner_id = ?;", [value]);
    });
    res.json("success");
  }
});

router.post("/th/sortable", verifyToken, async function (req, res) {
  var arr = req.body;
  arr.forEach(function (value, key) {
    connection.query("UPDATE banner_th SET arr=? WHERE banner_id = ?", [
      key,
      value.banner_id,
    ]);
  });
  res.json({
    status: "success",
  });
});
// Banner TH
module.exports = router;

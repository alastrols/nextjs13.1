const express = require("express");
const app = express();
const { connection } = require("./mysql");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs/dist/bcrypt");
const formidable = require("formidable");
const fs = require("fs-extra");
var cors = require("cors");
const { PassThrough, Writable } = require("node:stream");
app.use(cors());
app.options(
  "*",
  cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
);
const readXlsxFile = require("read-excel-file/node");
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const { getToken, verifyToken } = require("./jwtHandler");
global.__basedir = __dirname;

// S3
const multer = require("multer");
const dotenv = require("dotenv").config();
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

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
      console.log(file);
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      time = new Date().getTime();
      destinationPath = "product/";
      cb(null, destinationPath + time + "___" + file.originalname);
    },
  }),
});
var s3Stream = require("s3-upload-stream")(s3);
// const singleUpload = uploadS3.single("image");
const multipleupload = uploadS3.fields([{ name: "image" }]);
// S3

const e = require("express");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "upload/import/excel/");
  },
  filename(req, file, cb) {
    cb(
      null,
      Math.floor(Math.random() * 1000) +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } });

const uploads = multer();
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.json("success");
});

app.use("/api/login", require("./route/api/login"));
app.use("/api/profile", require("./route/api/profile"));
app.use("/api/banner", require("./route/api/banner"));
app.use("/api/news", require("./route/api/news"));
app.use("/api/user", require("./route/api/user"));

app.get("/api/image/:image_path/:img_name", function (req, res) {
  var img_name = req.params.img_name;
  var image_path = req.params.image_path;
  var filepath = __dirname + "/upload/" + image_path + "/" + img_name;
  res.sendFile(filepath);
});

app.get("/upload/format/user/:file", function (req, res) {
  var file = req.params.file;
  var filepath = __dirname + "/upload/format/user/" + file;
  res.sendFile(filepath);
});

app.post("/api/tinyupload", uploadS3.any(), function (req, res) {
  var key = req.files[0].key;
  let url = `https://${process.env.BUCKET_AWS}.s3.ap-southeast-1.amazonaws.com/${key}`;
  return res.json({
    location: url,
    alt: req.files[0].originalname.split(".")[0],
  });
  // let form = new formidable.IncomingForm();
  // form.parse(req, (error, fields, files) => {
  //   console.log(files.file);
  //   var newname = Date.now();
  //   var oldpath = files.file.filepath;
  //   var extension = files.file.originalFilename.split(".").pop().toLowerCase();
  //   const filename =
  //     newname.toString() + "." + files.file.mimetype.split("/").pop();
  //   var newpath =
  //     __dirname +
  //     "/upload/tinyupload/" +
  //     newname.toString() +
  //     "." +
  //     files.file.mimetype.split("/").pop();
  //   fs.move(oldpath, newpath, function (err) {
  //     res.json({
  //       location: filename,
  //       alt: files.file.originalFilename.split(".")[0],
  //     });
  //   });
  // });
});

app.listen(3001, function () {
  console.log("Server listening on port : 3001");
});

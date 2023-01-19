const express = require("express");
const router = express.Router();
const { connection } = require("../../mysql");
const path = require("path");
const formidable = require("formidable");
const fs = require("fs-extra");
const bodyParser = require("body-parser");
var cors = require("cors");
router.use(cors());
router.options(
  "*",
  cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 })
);
const readXlsxFile = require("read-excel-file/node");
router.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.post("/", function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    var newname = Date.now();
    var oldpath = files.file.filepath;
    var extension = files.file.originalFilename.split(".").pop().toLowerCase();

    const filename = newname.toString() + "." + extension;

    var newpath =
      __dirname +
      "/upload/tinyupload/" +
      newname.toString() +
      "." +
      files.file.originalFilename.split(".").pop();
    console.log(fs.move(oldpath, newpath));
    fs.move(oldpath, newpath, function (err) {
      res.json({
        location: filename,
        alt: files.file.originalFilename.split(".")[0],
      });
    });
  });
});

module.exports = router;

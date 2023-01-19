const express = require("express");
const router = express.Router();
var cors = require("cors");
const { connection } = require("../../mysql");
const { getToken, verifyToken } = require("../../jwtHandler");
const formidable = require("formidable");

const aws = require("aws-sdk");

aws.config.update({
  secretAccessKey: process.env.ACCESS_SECRET_AWS,
  accessKeyId: process.env.ACCESS_KEY_AWS,
  region: "ap-southeast-1",
});
const s3Download = new aws.S3();

// News JP
router.get("/getbyid", verifyToken, async (req, res) => {
  const { id } = req.query;
  const [data] = await connection.query(
    `SELECT * FROM news WHERE news_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM news WHERE topic LIKE ? OR post_date LIKE ? OR status LIKE ?  ORDER BY  post_date ASC",
    ["%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%"]
  );
  res.json({ data: data });
  return;
});
router.get("/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM news ORDER BY  post_date ASC"
  );
  res.json({ data: data });
  return;
});

router.post("/add", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, detail } = fields;
    const [add] = await connection.query(
      "INSERT INTO news (post_date , topic, status, detail) VALUES (? , ? , ? , ? )",
      [post_date, topic, status, detail]
    );
    if (add) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  });
});

router.post("/edit", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, detail, news_id } = fields;
    const [edit] = await connection.query(
      "UPDATE news SET post_date = ?, topic = ?, status = ?, detail = ? WHERE news_id = ?",
      [post_date, topic, status, detail, news_id]
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
      `DELETE FROM news WHERE news_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/checkdelete", function (req, res) {
  var news_id = req.body.checkbox;

  if (news_id) {
    news_id.forEach(function (value) {
      db.query("DELETE FROM news WHERE news_id = ?;", [value]);
    });
    res.json("success");
  }
});
// News JP

// News EN
router.get("/en/getbyid", verifyToken, async (req, res) => {
  const { id } = req.query;
  const [data] = await connection.query(
    `SELECT * FROM news_en WHERE news_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/en/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM news_en WHERE topic LIKE ? OR post_date LIKE ? OR status LIKE ?  ORDER BY  post_date ASC",
    ["%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%"]
  );
  res.json({ data: data });
  return;
});
router.get("/en/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM news_en ORDER BY  post_date ASC"
  );
  res.json({ data: data });
  return;
});

router.post("/en/add", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, detail } = fields;
    const [add] = await connection.query(
      "INSERT INTO news_en (post_date , topic, status, detail) VALUES (? , ? , ? , ? )",
      [post_date, topic, status, detail]
    );
    if (add) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  });
});

router.post("/en/edit", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, detail, news_id } = fields;
    const [edit] = await connection.query(
      "UPDATE news_en SET post_date = ?, topic = ?, status = ?, detail = ? WHERE news_id = ?",
      [post_date, topic, status, detail, news_id]
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
      `DELETE FROM news_en WHERE news_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/en/checkdelete", function (req, res) {
  var news_id = req.body.checkbox;

  if (news_id) {
    news_id.forEach(function (value) {
      db.query("DELETE FROM news_en WHERE news_id = ?;", [value]);
    });
    res.json("success");
  }
});
// News EN

// News JP
router.get("/th/getbyid", verifyToken, async (req, res) => {
  const { id } = req.query;
  const [data] = await connection.query(
    `SELECT * FROM news_th WHERE news_id = ${id}`
  );
  res.json({ data: data });
  return;
});

router.get("/th/get", verifyToken, async (req, res) => {
  const { keyword } = req.query;
  const [data] = await connection.query(
    "SELECT * FROM news_th WHERE topic LIKE ? OR post_date LIKE ? OR status LIKE ?  ORDER BY  post_date ASC",
    ["%" + keyword + "%", "%" + keyword + "%", "%" + keyword + "%"]
  );
  res.json({ data: data });
  return;
});
router.get("/th/select", verifyToken, async (req, res) => {
  const [data] = await connection.query(
    "SELECT * FROM news_th ORDER BY  post_date ASC"
  );
  res.json({ data: data });
  return;
});

router.post("/th/add", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, detail } = fields;
    const [add] = await connection.query(
      "INSERT INTO news_th (post_date , topic, status, detail) VALUES (? , ? , ? , ? )",
      [post_date, topic, status, detail]
    );
    if (add) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  });
});

router.post("/th/edit", verifyToken, async function (req, res) {
  let form = new formidable.IncomingForm();
  form.parse(req, async (error, fields, files) => {
    const { post_date, topic, status, detail, news_id } = fields;
    const [edit] = await connection.query(
      "UPDATE news_th SET post_date = ?, topic = ?, status = ?, detail = ? WHERE news_id = ?",
      [post_date, topic, status, detail, news_id]
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
      `DELETE FROM news_th WHERE news_id = ${id}`
    );
    if (response) {
      res.json({ status: "success" });
    } else {
      res.json({ status: "error" });
    }
  }
});

router.post("/th/checkdelete", function (req, res) {
  var news_id = req.body.checkbox;

  if (news_id) {
    news_id.forEach(function (value) {
      db.query("DELETE FROM news_th WHERE news_id = ?;", [value]);
    });
    res.json("success");
  }
});
// News JP
module.exports = router;

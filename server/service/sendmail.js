const express = require("express");
const router = express.Router();
const { connection } = require("../mysql");
var nodemailer = require("nodemailer");

const sendmail = async (fullname, part_number) => {
  const [mail] = await connection.query(
    "SELECT email FROM user WHERE status=?",
    "active"
  );
  var maillist = [];
  for (const [key, value] of mail.entries()) {
    maillist.push(value.email);
  }
  if (maillist.length == 0) {
    return false;
  }
  const to = maillist;
  const number = part_number;
  const subject = "...";

  const transporter = nodemailer.createTransport({
    host: "smtpm.csloxinfo.com",
    port: 587,
    secureConnection: false, // use TLS
    auth: {
      user: "digitalcenter@itp.co.th",
      pass: "Digital16",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const from = `Administrator <digitalcenter@itp.co.th>`;
  const mailData = {
    from: from,
    to: to,
    subject: subject,
    html:
      "Dear all user" +
      "<br/> <br/>" +
      "<p>Currenty " +
      fullname +
      " ... " +
      number +
      "</p>" +
      "<br/> <br/>" +
      "** This is auto e-mail please do not reply.",
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).json({ status: "error", message: "Mail cannot send." });
      return;
    } else {
      res
        .status(200)
        .json({ status: "success", message: "Mail has been send." });
      return;
    }
  });
};

module.exports = sendmail;

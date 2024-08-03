// routes/contact.js
import express from "express";
import Contact from "../models/contact";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("api/student/contact", async (req, res) => {
  const { Name, Email, Message } = req.body;
  console.log(req.body);

  const contact = new Contact({ name: Name, email: Email, message: Message });
  try {
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: Email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `That was easy`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});

module.exports = router;

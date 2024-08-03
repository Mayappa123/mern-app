import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import MongoStore from "connect-mongo";
import nodemailer from "nodemailer";
import studentRoutes from "./routes/student.js";
import { saveRedirectUrl } from "./middleware.js";
import User from "./models/user.js";
import Contact from "./models/contact.js";
import ExpressError from "./utils/ExpressError.js";
import methodOverride from "method-override";


dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const dbURL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET POST, DELETE"
  })
);

const store = MongoStore.create({
  mongoUrl: dbURL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error", () => {
  console.log("session store error", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api/student", studentRoutes);

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err.message);
  });

// app.post("/api/student/signup", async (req, res) => {
//   try {
//     let { username, email, password } = req.body;
//     const newUser = new User({ email, username });
//     const registeredUser = await User.register(newUser, password);
//     req.login(registeredUser, (err) => {
//       if (err) {
//         return next(err);
//       }
//       console.log("User registered successfully");
//       res.redirect("/contact");
//     });
//   } catch (e) {
//     console.error(e);
//     res.status(400).send("Error in user registration");
//   }
// });

// app.post(
//   "/api/student/login",
//   saveRedirectUrl,
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: true,
//   }),
//   async (req, res) => {
//     let redirectUrl = res.locals.redirectUrl || "/home";
//     res.redirect(redirectUrl);
//   }
// );

app.post("/api/student/contact", async (req, res) => {
  const { Subject, Email, Message } = req.body;

  const contact = new Contact({
    email: Email,
    subject: Subject,
    message: Message,
  });
  try {
    await contact.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${Email} <${Email}>`,
      to: process.env.EMAIL_USER,
      subject: Subject,
      text: `Email: ${Email}\nSubject: ${Subject}\nMessage: ${Message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).send("Error saving contact");
  }
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

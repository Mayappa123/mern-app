// routes/user.js

import express from "express";
const router = express.Router();
import passport from "passport";
import { isLoggedin, saveRedirectUrl } from "../middleware";
import WrapAsync from "../utils/WrapAsync";
import userController from "../controller/user";

router.post("/login").post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  WrapAsync(userController.login)
);

router.post("/signup").post(WrapAsync(userController.signup));

router.get("/logout", isLoggedin, WrapAsync(userController.logout));

module.exports = router;

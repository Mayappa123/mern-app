//controller/user.js

const User = require("../models/user");

module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next();
      }
      res.redirect("/home");
    });
  } catch (e) {
    res.redirect("/signup");
  }
};

module.exports.login = async (req, res) => {
  let redirectUrl = res.locals.redirectUrl || "/home";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/login");
    }
  });
};
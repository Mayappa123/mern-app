// middleware.js

const isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
};

const saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

export { isLoggedin, saveRedirectUrl };

// withAuth determines if someone is logged in. if not, redirect them to login page
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
};
  
module.exports = withAuth;
  
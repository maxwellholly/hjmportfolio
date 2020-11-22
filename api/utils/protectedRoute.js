const jwt = require("jsonwebtoken");
const protectedRoute = (req, res, next) => {
  try {
    const { authentication } = req.headers;
    const { id } = jwt.verify(authentication, process.env.SECRET);
    req.userId = id;
    return next();
  } catch (e) {
    return res.status(401).json({ loggedIn: false });
  }
};

module.exports = protectedRoute;

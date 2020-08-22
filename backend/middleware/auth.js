const jwt = require("jsonwebtoken");
const secretOrKey = process.env.JWT_SECRET;

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  try {
    //Check for token
    if (!token)
      return res.status(401).json({ msg: "No token, authorization denied" });

    //Verify token
    const decoded = jwt.verify(token, secretOrKey);

    req.username = decodedl;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;

const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    console.log("Authorization header:", authHeader); // Log for debugging

    // Check if the Authorization header exists and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    // Extract the token
    const token = authHeader.split(" ")[1];

    // Use the SECRET_KEY from the environment, or a fallback secret if not found
    const secretKey = process.env.SECRET_KEY || "fallback_secret";
    let decoded;

    // Attempt to verify the token
    try {
      decoded = jwt.verify(token, secretKey);
    } catch (error) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    // Fetch the user using the userId decoded from the token (exclude the password)
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found. Authentication failed." });
    }

    // Attach user info to the request object so that subsequent routes can access it
    req.user = user;
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(500).json({ message: "Authentication error" });
  }
};

module.exports = authenticate;

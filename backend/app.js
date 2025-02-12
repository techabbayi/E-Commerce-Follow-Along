const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/.env" });
}

// Import Routes
const userRoutes = require("./routes/user"); // Import routes, NOT controller

app.use("/api/auth", userRoutes); // Use routes file, not controller

// Error Handling
app.use(ErrorHandler);

module.exports = app;

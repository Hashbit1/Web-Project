const express = require("express"); // Import Express framework
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const session = require("express-session"); // Import express-session for session management
const path = require("path"); // Import path module

require("dotenv").config(); // Load environment variables from .env file

const workoutRoutes = require("./routes/workoutRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// The middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: "supersecret123",
    resave: false,
    saveUninitialized: false
})); // Session configuration

// Set EJS as view engine
app.set("view engine", "ejs");

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Make session user available in ALL EJS views
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

// Routes
app.use("/", authRoutes);      // login, register, logout
app.use("/", workoutRoutes);   // addWorkout, viewWorkouts, etc.

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

// Import dependencies
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import workoutRoutes from "./routes/workoutRoutes.js";
import { workouts } from "./controllers/workoutController.js";
import methodOverride from "method-override";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug logger to see incoming method + url
app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`, req.body && Object.keys(req.body).length ? req.body : "");
  next();
});

// Robust body-based method override (works reliably for form POSTs)
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Serve static files early and log requests (remove logging after debugging)
app.use((req, res, next) => {
  if (req.path.startsWith("/css") || req.path.startsWith("/images")) {
    console.log("[STATIC REQ]", req.method, req.path);
  }
  next();
});

app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.static(path.join(__dirname, "public"))); // fallback

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// API routes
app.use("/api/workouts", workoutRoutes);

// Frontend routes
app.get("/", (req, res) => res.render("index"));
app.get("/addWorkout", (req, res) => res.render("addWorkout"));
app.get("/viewWorkouts", (req, res) => res.render("viewWorkouts", { workouts }));

// Redirect lowercase URLs
app.get("/add-workout", (req, res) => res.redirect("/addWorkout"));
app.get("/view-workouts", (req, res) => res.redirect("/viewWorkouts"));

// Fallback for any broken CSS routing issues on Render
app.use((req, res, next) => {
  if (req.path.endsWith(".css")) {
    res.type("text/css");
  }
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});


const express = require("express");
const router = express.Router();

const Workout = require("../models/workout");

const {
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout
} = require("../controllers/workoutController");

const requireLogin = require("../middleware/authMiddleware");

// ADD workout page
router.get("/addWorkout", requireLogin, (req, res) => {
  res.render("addWorkout", { user: req.session.user });
});

// ADD workout (POST)
router.post("/addWorkout", requireLogin, addWorkout);

// VIEW workouts
router.get("/viewWorkouts", requireLogin, getWorkouts);

// EDIT workout (form)
router.get("/editWorkout/:id", requireLogin, async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.render("editWorkout", { workout, user: req.session.user });
});

// EDIT workout (POST update)
router.post("/editWorkout/:id", requireLogin, updateWorkout);

// DELETE workout
router.get("/deleteWorkout/:id", requireLogin, deleteWorkout);

module.exports = router;

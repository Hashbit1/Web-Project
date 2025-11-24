const Workout = require("../models/workout");

// GET all workouts for this user
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({ userId: req.session.user._id });
  res.render("viewWorkouts", { workouts, user: req.session.user });
};

// ADD workout
const addWorkout = async (req, res) => {
  const { name, sets, reps, weight } = req.body;

  await Workout.create({
    name,
    sets,
    reps,
    weight,
    userId: req.session.user._id
  });

  res.redirect("/viewWorkouts");
};

// UPDATE workout
const updateWorkout = async (req, res) => {
  const { name, sets, reps, weight } = req.body;

  await Workout.findByIdAndUpdate(req.params.id, {
    name,
    sets,
    reps,
    weight
  });

  res.redirect("/viewWorkouts");
};

// DELETE workout
const deleteWorkout = async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.redirect("/viewWorkouts");
};

module.exports = {
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout
};

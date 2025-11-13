// routes/workoutRoutes.js
import express from "express";
import {
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout
} from "../controllers/workoutController.js";

const router = express.Router();

// API Routes (backend)
router.get("/", getWorkouts);      // GET all workouts
router.post("/", addWorkout);      // POST new workout
router.put("/:id", updateWorkout); // UPDATE a workout by ID (future)
router.delete("/:id", deleteWorkout); // DELETE a workout by ID (future)

export default router;



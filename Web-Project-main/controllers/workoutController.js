// controllers/workoutController.js

// Temporary in-memory storage for workouts
export const workouts = [
  // example shape: { id: '1', name: 'Bench', sets: 3, reps: 8, weight: 60 }
];

// Get all workouts
export const getWorkouts = (req, res) => {
  res.json(workouts); // API response (used for debugging or future frontend)
};

// Add a new workout
export const addWorkout = (req, res) => {
  const { name, sets, reps, weight } = req.body;

  // Simple validation
  if (!name || !sets || !reps) {
    return res.status(400).send("Please fill all required fields.");
  }

  // Create new workout
  const newWorkout = {
    id: workouts.length + 1,
    name,
    sets,
    reps,
    weight: weight || 0,
  };

  workouts.push(newWorkout);
  console.log("✅ New workout added:", newWorkout);

  // Redirect user back to view page after saving
  res.redirect("/view-workouts");
};

// Update a workout (future feature)
export const updateWorkout = (req, res) => {
  const { id } = req.params;
  const idx = workouts.findIndex((w) => String(w.id) === String(id));
  if (idx === -1) {
    return res.status(404).json({ error: "Workout not found" });
  }

  // accept fields from form body
  const { name, sets, reps, weight } = req.body;
  workouts[idx] = {
    ...workouts[idx],
    name: name ?? workouts[idx].name,
    sets: sets !== undefined ? Number(sets) : workouts[idx].sets,
    reps: reps !== undefined ? Number(reps) : workouts[idx].reps,
    weight: weight !== undefined ? Number(weight) : workouts[idx].weight,
  };

  // If request came from browser form, redirect back to view page
  if (req.headers.accept && req.headers.accept.includes("text/html")) {
    return res.redirect("/viewWorkouts");
  }
  return res.json(workouts[idx]);
};

// Delete a workout (future feature)
export const deleteWorkout = (req, res) => {
  const { id } = req.params;
  const idx = workouts.findIndex((w) => String(w.id) === String(id));
  if (idx === -1) {
    return res.status(404).json({ error: "Workout not found" });
  }
  workouts.splice(idx, 1);

  if (req.headers.accept && req.headers.accept.includes("text/html")) {
    return res.redirect("/viewWorkouts");
  }
  return res.json({ success: true });
};

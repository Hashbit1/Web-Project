const mongoose = require("mongoose"); // Import Mongoose
// Define the Workout schema
const WorkoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number },
  userId: { type: String, required: true } // tie workout to logged-in user
}); 

module.exports = mongoose.models.Workout || mongoose.model("Workout", WorkoutSchema);
// Export the Workout model

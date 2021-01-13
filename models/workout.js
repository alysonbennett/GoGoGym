const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a title for your workout"
  },
  type: {
    type: String,
    trim: true,
    required: "What type of workout was this?"
  },
  weight: {
    type: Number,
    required: "How much weight did you use for this workout?"
  },
  sets: {
    type: Number,
    required: "How many sets did you do?"
  },
  reps: {
    type: Number,
    required: "How many reps did you do?"
  },
  duration: {
    type: Number,
    required: "How long was your workout?"
  }
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

const Transaction = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
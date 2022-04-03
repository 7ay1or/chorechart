const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    assignee: {
      type: String,
      required: true,
    },
    frequency: {
      type: Number,
      required: true,
      min: 0,
      max: 30,
    },
    due_date: {
      type: Date,
      required: true,
    },
    comments: String,
  })
);

exports.Task = Task;

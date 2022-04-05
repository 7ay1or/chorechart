import mongoose from "mongoose";
import Joi from "joi";

export const Task = mongoose.model(
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
    comments: {
      type: String,
      minlength: 0,
      maxlength: 255,
    },
  })
);

function validateTask(task) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    assignee: Joi.string().min(5).max(50).required(),
    frequency: Joi.number().min(0).max(30).required(),
    due_date: Joi.date().required(),
    comments: Joi.string().min(0).max(255),
  });

  return schema.validate(task);
}

export { validateTask as validate };

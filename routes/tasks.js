const { Task } = require("../models/task");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().sort("name");
  if (!tasks) res.status(404).send("The task with the given ID was not found.");

  res.send(tasks);
});

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) res.status(404).send("The task with the given ID was not found.");

  res.send(task);
});

router.post("/", async (req, res) => {
  let task = new Task({
    name: req.body.name,
    frequency: req.body.frequency,
    due_date: req.body.due_date,
    comments: req.body.comments,
  });

  task = await task.save();

  res.send(task);
});

router.put("/:id", async (req, res) => {
  const task = Task.findByIdAndUpdate(
    req.body.id,
    {
      name: req.body.name,
      frequency: req.body.frequency,
      due_date: req.body.due_date,
      comments: req.body.comments,
    },
    { new: true }
  );

  if (!task) res.status(404).send("The task with the given ID was not found.");
  res.send(task);
});

router.delete("/:id", async (req, res) => {
  const task = await Task.findByIdAndRemove(req.body.id);
  if (!task) res.status(404).send("The task with the given ID was not found.");

  res.send(task);
});

module.exports = router;

import express from "express";
import mongoose from "mongoose";
import { tasks } from "./routes/tasks.js";
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/api/tasks", tasks);
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost/roomeaze")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/newtask", (req, res) => {
  res.render("pages/newtask");
});

app.get("/tasklist", (req, res) => {
  res.render("pages/tasklist");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

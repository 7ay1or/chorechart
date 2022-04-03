function taskSubmit() {
  let taskName = document.getElementById("taskname").value;
  let assignee = document.getElementById("assignee").value;
  let frequency = document.getElementById("frequency").value;
  let duedate = document.getElementById("duedate").value;
  let comments = document.getElementById("comments").value;

  const task = {
    name: taskName,
    assignee: assignee,
    frequency: frequency,
    due_date: new Date(duedate),
    comments: comments,
  };

  TaskAPI.saveTask(task);
}
class TaskAPI {
  constructor() {}

  static url = "/api/tasks";

  static saveTask(task) {
    const options = {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(this.url, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  static getTasks() {
    let tasklist = document.getElementById("tasklist");

    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        data.map((task) => {
          let li = document.createElement("li");
          li.className = "list-group-item";
          li.textContent = task.name;
          tasklist.append(li);
        });
      });
  }
}

TaskAPI.getTasks();

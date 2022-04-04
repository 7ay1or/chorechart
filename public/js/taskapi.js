export class TaskAPI {
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

    fetch(this.url)
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

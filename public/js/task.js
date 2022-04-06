import { TaskAPI } from "./taskapi.js";

export default function taskSubmit() {
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
  successAlert();
}

function successAlert() {
  let notificationDiv = document.getElementById("notifications");

  notificationDiv.innerHTML = `<div id="newTaskAlert" class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Success!</strong> Added new task.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

  let bsAlert = new bootstrap.Alert(document.getElementById("newTaskAlert"));
  setTimeout(() => bsAlert.close(), 2500);
}

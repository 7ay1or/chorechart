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

  postAPI(task);
}

function postAPI(content) {
  const url = "/api/tasks";
  const options = {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((res) => console.log(res));
}

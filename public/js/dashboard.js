function getTimeOfDay() {
  let currentDate = new Date();
  return currentDate.getHours() > 12 ? "evening" : "morning";
}

function greetUser() {
  let header = document.getElementById("greeting");
  header.textContent = `Good ${getTimeOfDay()}, roomie!`;
}

greetUser();

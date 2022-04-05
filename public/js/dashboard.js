function getTimeOfDay(date) {
  let currentDate = date ?? new Date();
  return currentDate.getHours() > 12 ? "evening" : "morning";
}

function greetUser() {
  let header = document.getElementById("greeting");
  header.textContent = `Good ${getTimeOfDay()}, roomie!`;
  return header;
}

if (typeof module != "undefined") {
  module.exports.getTimeOfDay = getTimeOfDay;
  module.exports.greetUser = greetUser;
} else if (typeof window != "undefined") {
  window.getTimeOfDay = getTimeOfDay;
  window.greetUser = greetUser;
}

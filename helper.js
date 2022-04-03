function getTimeOfDay() {
  let currentDate = new Date();
  return currentDate.getHours() > 12 ? "evening" : "morning";
}

module.exports = { getTimeOfDay };

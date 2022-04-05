/**
 * @jest-environment jsdom
 */

const dashboard = require("../public/js/dashboard.js");

test("Returns 'morning' when time is before 12PM", () => {
  expect(dashboard.getTimeOfDay(new Date(2022, 1, 1, 10, 0, 0, 0))).toBe(
    "morning"
  );
});

test("Returns 'evening' when time is after 12PM", () => {
  expect(dashboard.getTimeOfDay(new Date(2022, 1, 1, 18, 0, 0, 0))).toBe(
    "evening"
  );
});

test("Greets the user with the current time of day", () => {
  document.body.innerHTML = `<h1 id="greeting"></h1>`;
  const header = dashboard.greetUser();
  expect(header.textContent).toBe(`Good ${dashboard.getTimeOfDay()}, roomie!`);
});

console.log("hello world")

var today = new Date();
var hours = String(today.getHours())

time  = ""

if (hours > 12) {
    time = "night"
}
else {
    time = "morning"
}

console.log(time)


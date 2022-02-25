var day1 = "hi"
var day2 = "hi"
var day3 = "hi"
var day4 = "hi"
var day5 = "hi"

var days = [day1, day2, day3, day4, day5]
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

/*Math
Math
Break
English/History
Inside Recess
Outside Recess
English/History
French
Art*/

const d = new Date();
let dayoftheweek = d.getDay();

const h = new Date();
let hours = h.getHours();

const m = new Date();
let minutes = m.getMinutes();

if (minutes < 10) {
  minutes = "0" + minutes
}

if (hours > 12) {
  hours -= 12
}

let dateandtime1 = weekdays[dayoftheweek] + ", " + hours + ":" + minutes

document.getElementById("dateandtime").innerHTML = dateandtime1;

document.getElementById("day").innerHTML = days[0];
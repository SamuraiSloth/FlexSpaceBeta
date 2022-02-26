const d = new Date();
let dayoftheweek = d.getDay();

if ((dayoftheweek == 6) | (dayoftheweek == 7)) {
  dayoftheweek = -10;
}

const h = new Date();
let hours = h.getHours();

const m = new Date();
let minutes = m.getMinutes();

var next3classes = "The next 3 classes are:";

var nextclass1;
var nextclass2;
var nextclass3;

var day1 = [
  "Math", // 8:50 - 9:39
  "Math", // 9:40 - 10:29
  "Break", // 10:30 - 10:49
  "English/History", // 10:50 - 11:39
  "Inside Recess", // 11:40 - 12:09
  "Outside Recess", // 12:10 - 12:40
  "English/History", // 12:40 - 1:30
  "French", // 1:31 - 2:20
  "Art", // 2:21 - 3:11
  "School Ends",
];

var day2 = [
  "Math", // 8:50 - 9:39
  "Gym", // 9:40 - 10:29
  "Break", // 10:30 - 10:49
  "French", // 10:50 - 11:39
  "Inside Recess", // 11:40 - 12:09
  "Outside Recess", // 12:10 - 12:40
  "English", // 12:40 - 1:30
  "English", // 1:31 - 2:20
  "Art", // 2:21 - 3:11
  "School Ends",
];

var day3 = [
  "Math", // 8:50 - 9:39
  "Math", // 9:40 - 10:29
  "Break", // 10:30 - 10:49
  "French", // 10:50 - 11:39
  "Inside Recess", // 11:40 - 12:09
  "Outside Recess", // 12:10 - 12:40
  "English", // 12:40 - 1:30
  "Science", // 1:31 - 2:20
  "Gym", // 2:21 - 3:11
  "School Ends",
];

var day4 = [
  "Math", // 8:50 - 9:39
  "Music", // 9:40 - 10:29
  "Break", // 10:30 - 10:49
  "English/History", // 10:50 - 11:39
  "Inside Recess", // 11:40 - 12:09
  "Outside Recess", // 12:10 - 12:40
  "English", // 12:40 - 1:30
  "Gym", // 1:31 - 2:20
  "Health", // 2:21 - 3:11
  "School Ends",
];

var day5 = [
  "Math", // 8:50 - 9:39
  "Math", // 9:40 - 10:29
  "Break", // 10:30 - 10:49
  "Science", // 10:50 - 11:39
  "Inside Recess", // 11:40 - 12:09
  "Outside Recess", // 12:10 - 12:40
  "English", // 12:40 - 1:30
  "French", // 1:31 - 2:20
  "Art", // 2:21 - 3:11
  "School Ends",
];

var days = [day1, day2, day3, day4, day5];
var daysnum = [1, 2, 3, 4, 5];
var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var curclass = "";
var curdaynum = dayoftheweek - 4;

if (curdaynum < 0) {
  curdaynum += 5;
}

function getPeriod(hrs, mins) {
  var timestamp = hrs * 100 + mins;
  if (dayoftheweek == -10) {
    curclass = "None! It's a weekend!";
  } else if (timestamp >= 850 && timestamp < 940) {
    curclass = days[curdaynum][0];
    nextclass1 = days[curdaynum][1];
    nextclass2 = days[curdaynum][2];
    nextclass3 = days[curdaynum][3];
  } else if (timestamp >= 940 && timestamp < 1030) {
    curclass = days[curdaynum][1];
    nextclass1 = days[curdaynum][2];
    nextclass2 = days[curdaynum][3];
    nextclass3 = days[curdaynum][4];
  } else if (timestamp >= 1030 && timestamp < 1050) {
    curclass = days[curdaynum][2];
    nextclass1 = days[curdaynum][3];
    nextclass2 = days[curdaynum][4];
    nextclass3 = days[curdaynum][5];
  } else if (timestamp >= 1050 && timestamp < 1140) {
    curclass = days[curdaynum][3];
    nextclass1 = days[curdaynum][4];
    nextclass2 = days[curdaynum][5];
    nextclass3 = days[curdaynum][6];
  } else if (timestamp >= 1140 && timestamp < 1210) {
    curclass = days[curdaynum][4];
    nextclass1 = days[curdaynum][5];
    nextclass2 = days[curdaynum][6];
    nextclass3 = days[curdaynum][7];
  } else if (timestamp >= 1210 && timestamp < 1241) {
    curclass = days[curdaynum][5];
    nextclass1 = days[curdaynum][6];
    nextclass2 = days[curdaynum][7];
    nextclass3 = days[curdaynum][8];
  } else if (timestamp >= 1241 && timestamp < 1331) {
    curclass = days[curdaynum][6];
    nextclass1 = days[curdaynum][7];
    nextclass2 = days[curdaynum][8];
    nextclass3 = days[curdaynum][9];
  } else if (timestamp >= 1331 && timestamp < 1421) {
    curclass = days[curdaynum][7];
    nextclass1 = days[curdaynum][8];
    nextclass2 = days[curdaynum][9];
    nextclass3 = "There's nothing else!";
  } else if (timestamp >= 1421 && timestamp <= 1511) {
    curclass = days[curdaynum][8];
    nextclass1 = days[curdaynum][9];
    nextclass2 = "There's nothing else!";
    nextclass3 = "";
  } else {
    curclass = "You're not supposed to be in school right now?!";
    nextclass1 = "";
    nextclass2 = "";
    nextclass3 = "";
    next3classes = "";
  }
  return curclass;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

if (hours > 12) {
  var dateandtime1 =
    weekdays[dayoftheweek] + ", " + (hours - 12) + ":" + minutes + "pm";
} else {
  var dateandtime1 =
    weekdays[dayoftheweek] + ", " + hours + ":" + minutes + "am";
}

document.getElementById("dateandtime").innerHTML = dateandtime1;

document.getElementById("day").innerHTML = daysnum[curdaynum];

document.getElementById("class").innerHTML = getPeriod(hours, minutes);

document.getElementById("next3classes").innerHTML = nextclass3;

document.getElementById("nextclass1").innerHTML = nextclass1;
document.getElementById("nextclass2").innerHTML = nextclass2;
document.getElementById("nextclass3").innerHTML = nextclass3;

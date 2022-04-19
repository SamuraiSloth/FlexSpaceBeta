const dcurr = new Date();
var dayoftheweek = dcurr.getDay();
var dayoftheweekword = dcurr.getDay();
var hours = dcurr.getHours();
var minutes = dcurr.getMinutes();

setInterval(myTimer, 1000);

function myTimer() {
  const dcurr = new Date();
  document.getElementById("dateandtime").innerHTML =
    dayoftheweekword + ", " + dcurr.toLocaleTimeString();
  var dayoftheweek = dcurr.getDay();
  var hours = dcurr.getHours();
  var minutes = dcurr.getMinutes();
}

var next3classes = "The next 3 classes are:";

var nextclass1;
var nextclass2;
var nextclass3;

var currentclasssentence = "The class you have right now is:";
var currentday = "It is currently a day:";

var nextclasswhen;

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
  "Math/Gym", // 9:40 - 10:29
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
  "Math", // 9:40 - 10:29
  "Break", // 10:30 - 10:49
  "English/History", // 10:50 - 11:39
  "Inside Recess", // 11:40 - 12:09
  "Outside Recess", // 12:10 - 12:40
  "English", // 12:40 - 1:30
  "Music", // 1:31 - 2:20
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
dayoftheweekword = weekdays[dayoftheweek];

if (dayoftheweek == 6 || dayoftheweek == 0) {
  curdaynum = "It's a weekend!";
} else {
  var curdaynum = dayoftheweek;

  if (curdaynum < 0) {
    curdaynum += 5;
  }
}

function setAllEmpty() {
  nextclass1 = "";
  nextclass2 = "";
  nextclass3 = "";
  next3classes = "";
  nextclasswhen = "";
}

function getPeriod(hrs, mins) {
  var timestamp = hrs * 100 + parseInt(mins);
  if (dayoftheweek == 6 || dayoftheweek == 0) {
    curclass = "It's a weekend!";
    setAllEmpty();
  } else if (timestamp >= 850 && timestamp < 940) {
    curclass = days[curdaynum][0];
    nextclass1 = days[curdaynum][1];
    nextclass2 = days[curdaynum][2];
    nextclass3 = days[curdaynum][3];
    currentclasssentence = "The class you have right now is:";
    if (940 - timestamp - 40 < 0) {
      nextclasswhen = 940 - timestamp;
    } else {
      nextclasswhen = 940 - timestamp - 40;
    }
  } else if (timestamp >= 940 && timestamp < 1030) {
    curclass = days[curdaynum][1];
    nextclass1 = days[curdaynum][2];
    nextclass2 = days[curdaynum][3];
    nextclass3 = days[curdaynum][4];
    currentclasssentence = "The class you have right now is:";
    if (1030 - timestamp > 60) {
      nextclasswhen = 1030 - timestamp - 40;
    } else {
      nextclasswhen = 1030 - timestamp;
    }
  } else if (timestamp >= 1030 && timestamp < 1050) {
    curclass = days[curdaynum][2];
    nextclass1 = days[curdaynum][3];
    nextclass2 = days[curdaynum][4];
    nextclass3 = days[curdaynum][5];
    currentclasssentence = "The class you have right now is:";
    if (1050 - timestamp > 60) {
      nextclasswhen = 1050 - timestamp - 40;
    } else {
      nextclasswhen = 1050 - timestamp;
    }
  } else if (timestamp >= 1050 && timestamp < 1140) {
    curclass = days[curdaynum][3];
    nextclass1 = days[curdaynum][4];
    nextclass2 = days[curdaynum][5];
    nextclass3 = days[curdaynum][6];
    currentclasssentence = "The class you have right now is:";
    if (1140 - timestamp > 60) {
      nextclasswhen = 1140 - timestamp - 40;
    } else {
      nextclasswhen = 1140 - timestamp;
    }
  } else if (timestamp >= 1140 && timestamp < 1210) {
    curclass = days[curdaynum][4];
    nextclass1 = days[curdaynum][5];
    nextclass2 = days[curdaynum][6];
    nextclass3 = days[curdaynum][7];
    currentclasssentence = "The class you have right now is:";
    if (1210 - timestamp > 60) {
      nextclasswhen = 1210 - timestamp - 40;
    } else {
      nextclasswhen = 1210 - timestamp;
    }
  } else if (timestamp >= 1210 && timestamp < 1241) {
    curclass = days[curdaynum][5];
    nextclass1 = days[curdaynum][6];
    nextclass2 = days[curdaynum][7];
    nextclass3 = days[curdaynum][8];
    currentclasssentence = "The class you have right now is:";
    if (1241 - timestamp > 60) {
      nextclasswhen = 1241 - timestamp - 40;
    } else {
      nextclasswhen = 1241 - timestamp;
    }
  } else if (timestamp >= 1241 && timestamp < 1331) {
    curclass = days[curdaynum][6];
    nextclass1 = days[curdaynum][7];
    nextclass2 = days[curdaynum][8];
    nextclass3 = days[curdaynum][9];
    currentclasssentence = "The class you have right now is:";
    if (1331 - timestamp > 60) {
      nextclasswhen = 1331 - timestamp - 40;
    } else {
      nextclasswhen = 1331 - timestamp;
    }
  } else if (timestamp >= 1331 && timestamp < 1421) {
    curclass = days[curdaynum][7];
    nextclass1 = days[curdaynum][8];
    nextclass2 = days[curdaynum][9];
    nextclass3 = "There's nothing else!";
    currentclasssentence = "The class you have right now is:";
    if (1421 - timestamp > 60) {
      nextclasswhen = 1421 - timestamp - 40;
    } else {
      nextclasswhen = 1421 - timestamp;
    }
  } else if (timestamp >= 1421 && timestamp <= 1511) {
    curclass = days[curdaynum][8];
    nextclass1 = days[curdaynum][9];
    nextclass2 = "There's nothing else!";
    nextclass3 = "";
    currentclasssentence = "The class you have right now is:";
    if (timestamp >= 1500) {
      nextclasswhen = 1511 - timestamp;
    } else {
      nextclasswhen = 1511 - timestamp - 40;
    }
  } else {
    curclass = "You're not supposed to be in school right now?!";
    setAllEmpty();
  }
  return curclass;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

if (curdaynum == "It's a weekend!") {
  document.getElementById("day").innerHTML = "";
  document.getElementById("currentday").innerHTML = "";
  document.getElementById("currentclass").innerHTML = "";
} else {
  document.getElementById("day").innerHTML = daysnum[curdaynum];
  document.getElementById("currentday").innerHTML = currentday;
  if (
    getPeriod(hours, minutes) ==
    "You're not supposed to be in school right now?!"
  ) {
    currentclasssentence = "";
  }
  document.getElementById("currentclass").innerHTML = currentclasssentence;
}

document.getElementById("class").innerHTML = getPeriod(hours, minutes);
if (nextclasswhen != "") {
  nextclasswhen = "Your next class is in " + nextclasswhen + " minute(s)";
}
document.getElementById("nextclasswhen").innerHTML = nextclasswhen;
document.getElementById("next3classes").innerHTML = next3classes;

document.getElementById("nextclass1").innerHTML = nextclass1;
document.getElementById("nextclass2").innerHTML = nextclass2;
document.getElementById("nextclass3").innerHTML = nextclass3;

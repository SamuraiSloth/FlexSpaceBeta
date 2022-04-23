var dcurr = new Date();
var dayoftheweekword = dcurr.getDay();
var dayoftheweek = dcurr.getDay();
var hours = dcurr.getHours();
var minutes = dcurr.getMinutes();

function myTimer() {
  var dcurr = new Date();
  var dayoftheweek = dcurr.getDay();
  var dayoftheweekword = weekdays[dayoftheweek];
  var hours = dcurr.getHours();
  var minutes = dcurr.getMinutes();
  document.getElementById("dateandtime").innerHTML =
    dayoftheweekword + ", " + dcurr.toLocaleTimeString();
}

var next3classes = "The next 3 classes are:";

var nextclass1;
var nextclass2;
var nextclass3;

var currentclasssentence = "The class you have right now is:";
var currentday = "It is currently a day:";

var nextclasswhen;

setInterval(myTimer, 500);

var curclass = "";
dayoftheweekword = weekdays[dayoftheweek];

if (dayoftheweek == 6 || dayoftheweek == 0) {
  curdaynum = "It's a weekend!";
} else {
  var curdaynum = dayoftheweek - 1;

  if (curdaynum < 0) {
    curdaynum += 5;
  }
}

function classFind(num, max) {
  curclass = days[curdaynum][num];
  nextclass1 = days[curdaynum][num + 1];
  nextclass2 = days[curdaynum][num + 2];
  nextclass3 = days[curdaynum][num + 3];
  if (num + 2 > max) {
    nextclass2 = "There's nothing else!";
    nextclass3 = "";
  } else if (num + 3 > max) {
    nextclass2 = days[curdaynum][num + 2];
    nextclass3 = "There's nothing else!";
  }
}

function setAllEmpty() {
  nextclass1 = "";
  nextclass2 = "";
  nextclass3 = "";
  next3classes = "";
  nextclasswhen = "";
}

function getPeriod() {
  if (dayoftheweek == 6 || dayoftheweek == 0) {
    curclass = "It's a weekend!";
    setAllEmpty();
  } else if (dcurr >= 31800000 && dcurr < 34800000) {
    classFind(0, 9);
  } else if (dcurr >= 34800000 && dcurr < 37800000) {
    classFind(1, 9);
  } else if (dcurr >= 37800000 && dcurr < 39000000) {
    classFind(2, 9);
  } else if (dcurr >= 39000000 && dcurr < 42000000) {
    classFind(3, 9);
  } else if (dcurr >= 42000000 && dcurr < 43800000) {
    classFind(4, 9);
  } else if (dcurr >= 43800000 && dcurr < 45660000) {
    classFind(5, 9);
  } else if (dcurr >= 45660000 && dcurr < 48660000) {
    classFind(6, 9);
  } else if (dcurr >= 48660000 && dcurr < 51660000) {
    classFind(7, 9);
  } else if (dcurr >= 51660000 && dcurr <= 54660000) {
    classFind(8, 9);
  } else {
    curclass = "You're not supposed to be in school right now?!";
    setAllEmpty();
  }
  return curclass;
}

if (curdaynum == "It's a weekend!") {
  document.getElementById("day").innerHTML = "";
  document.getElementById("currentday").innerHTML = "";
  document.getElementById("currentclass").innerHTML = "";
} else {
  document.getElementById("day").innerHTML = daysnum[curdaynum];
  document.getElementById("currentday").innerHTML = currentday;
  if (getPeriod() == "You're not supposed to be in school right now?!") {
    currentclasssentence = "";
  }
  document.getElementById("currentclass").innerHTML = currentclasssentence;
}

document.getElementById("class").innerHTML = getPeriod();
if (nextclasswhen != "") {
  nextclasswhen = "Your next class is in " + nextclasswhen + " minute(s)";
}
document.getElementById("nextclasswhen").innerHTML = nextclasswhen;
document.getElementById("next3classes").innerHTML = next3classes;

document.getElementById("nextclass1").innerHTML = nextclass1;
document.getElementById("nextclass2").innerHTML = nextclass2;
document.getElementById("nextclass3").innerHTML = nextclass3;

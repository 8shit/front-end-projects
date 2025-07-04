const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("seconds");
const milliSeconds = document.getElementById("milliSeconds");
let isRunning = true;

let currentHours = 0;
let currentMinutes = 0;
let currentSeconds = 0;
let currentMilli = 0;
let go;

function incrementMilli() {
  currentMilli += 1;
  if (currentMilli == 100) {
    currentMilli = 0;
    incrementSeconds();
  }
  console.log("incremented milli");
  milliSeconds.textContent = currentMilli;
}

function incrementSeconds() {
  currentSeconds += 1;
  if (currentSeconds == 60) {
    currentSeconds = 0;
    incrementMinute();
  }
  console.log("incremented Second");
  second.textContent = currentSeconds;
}

function incrementMinute() {
  currentMinutes += 1;
  if (currentMinutes == 60) {
    currentMinutes = 0;
    incrementHour();
  }
  console.log("incremented minute");
  minute.textContent = currentMinutes;
}
function incrementHour() {
  currentHours += 1;
  if (currentHours == 12) {
    currentHours = 0;
  }
  console.log("incremented hour");
  hour.textContent = currentHours;
}

function Start() {
  go = setInterval(incrementMilli, 10);
  console.log("hi");
}

function Stop() {
  isRunning = false;
  clearInterval(go);
}

function Reset() {
  currentHours = 0;
  currentMilli = 0;
  currentSeconds = 0;
  currentMinutes = 0;

  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
  milliSeconds.textContent = "00";
}

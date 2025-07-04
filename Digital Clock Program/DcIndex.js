function ClockUpdate() {
  const date = new Date();

  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("seconds");
  const AmPm = document.getElementById("AM/PM");

  let currentHours = date.getHours();

  currentHours = currentHours % 12 || 12;
  AmPm.textContent = date.getHours >= 12 ? "PM" : "AM";

  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  hour.textContent = currentHours;
  minute.textContent = currentMinutes;
  second.textContent = currentSeconds;

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
  incrementSeconds();
  return { incrementSeconds, incrementMinute, incrementHour };
}

ClockUpdate();
setInterval(ClockUpdate, 1000);

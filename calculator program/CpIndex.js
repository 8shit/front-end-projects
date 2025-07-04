const display = document.getElementById("display");
let funcInUse = true;

function appendToDisplay(input) {
  if (isNaN(input) && funcInUse) {
    return;
  }
  display.textContent += input;

  funcInUse = false;
}

function clearDisplay() {
  display.textContent = "";
  display.value = "";
  funcInUse = true;
}

function calculate() {
  if (funcInUse) return;
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.value = "Error";
    display.textContent = "Error";
  }
  funcInUse = false;
}
function plus(input) {
  appendToDisplay(input);
  funcInUse = true;
}
function minus(input) {
  appendToDisplay(input);
  funcInUse = true;
}
function times(input) {
  appendToDisplay(input);
  funcInUse = true;
}
function divide(input) {
  appendToDisplay(input);
  funcInUse = true;
}

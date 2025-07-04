let tempInput = document.getElementById("tempInput").value;
let FTC = document.getElementById("FTC");
let CTF = document.getElementById("CTF");
let answer = document.getElementById("answer");
let convertButton = document.getElementById("convert");
let x;
convertButton.addEventListener("click", convert);

function convert(event) {
  event.preventDefault();

  if (FTC.checked) {
    console.log(x);
    x = Number(tempInput);

    x = ((x - 32) * 5) / 9;
    console.log("FTC");
    answer.textContent = x;
  } else if (CTF.checked) {
    x = Number(tempInput);
    x = (x * 9) / 5 + 32;
    console.log("ctf");
    answer.textContent = x;
  } else {
    answer.textContent = "you did not choose a conversion!";
  }
}

function reset() {
  tempInput = null;
  answer.textContent = null;
}

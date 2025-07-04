function rollDice() {
  console.log("here");
  const inputDice = document.getElementById("#Dice");
  const diceResult = document.getElementById("diceResult");
  const DiceResultFaces = document.getElementById("DiceResultFaces");

  let diceFaces = [];
  const diceOutput = [];

  let input = Number(inputDice.value);
  console.log(input);
  for (let roll = 0; roll < input; roll++) {
    console.log("here now");
    const nb = Math.floor(Math.random() * 6) + 1;
    diceOutput.push(nb);
    diceFaces.push(
      `<img src="/dice roller program/images/dice-${nb}.256x256.png">`
    );
  }
  diceResult.textContent = diceOutput;
  DiceResultFaces.innerHTML = diceFaces.join("");
}

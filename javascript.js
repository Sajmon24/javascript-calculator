const userInput = document.getElementById("userInput");
const operators = ["+", "-", "*", "/", "="];

document.addEventListener("click", function (event) {
  const enteredChar = event.target.textContent;
  if (enteredChar === "=") {
    userInput.value = eval(userInput.value);
  } else if (enteredChar === "AC") {
    userInput.value = "";
  } else if (event.target.matches("button")) {
    const lastEnteredChar = userInput.value.at(-1);
    if (userInput.value == "" && operators.includes(enteredChar)) {
      userInput.value = "";
    } else if (
      (operators.includes(lastEnteredChar) &&
        operators.includes(enteredChar)) ||
      (lastEnteredChar === "0" && enteredChar === "0")
    ) {
      userInput.value = userInput.value.slice(0, -1) + enteredChar;
    } else {
      userInput.value += enteredChar;
    }
  }
});

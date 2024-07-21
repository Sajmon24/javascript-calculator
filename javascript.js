const userInput = document.getElementById("userInput");
let newCalculation = false;

document.addEventListener("click", function (event) {
  if (event.target.textContent === "=") {
    userInput.value = eval(userInput.value);
    newCalculation = true;
  } else if (event.target.textContent === "AC") {
    userInput.value = "";
  } else if (event.target.matches("button") && newCalculation) {
    userInput.value = event.target.textContent;
    newCalculation = false;
  } else if (event.target.matches("button")) {
    userInput.value += event.target.textContent;
  }
});

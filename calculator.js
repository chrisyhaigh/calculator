const screenInput = document.getElementById("screen-input");

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    screenInput.value += buttonValue;
  });
});

const resetButton = document.getElementById("reset");

function resetCalculator() {
  screenInput.value = '0';
  screenInput.dataset.previousInput = '0';
  console.log('Reset calculator to 0');
}

resetButton.addEventListener('click', resetCalculator);

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operator = button.dataset.operator;
    const currentInput = parseFloat(screenInput.value);
    const previousInput = parseFloat(screenInput.dataset.previousInput);
    let result;

    switch (operator) {
      case '+':
        result = currentInput + previousInput;
        break;
      case '-':
        result = currentInput - previousInput;
        break;
      case '*':
        result = currentInput * previousInput;
        break;
      case '/':
        result = currentInput / previousInput;
        break;
    }

    screenInput.value = result;
    screenInput.dataset.previousInput = result;
  });
});

const equalsButton = document.getElementById('equals');

equalsButton.addEventListener('click', () => {
  const currentInput = parseFloat(screenInput.value);
  const previousInput = parseFloat(screenInput.dataset.previousInput);
  const operator = screenInput.dataset.operator;
  let result;

  switch (operator) {
    case '+':
      result = currentInput + previousInput;
      break;
    case '-':
      result = currentInput - previousInput;
      break;
    case '*':
      result = currentInput * previousInput;
      break;
    case '/':
      result = currentInput / previousInput;
      break;
  }

  screenInput.value = result;
  screenInput.dataset.previousInput = result;
});

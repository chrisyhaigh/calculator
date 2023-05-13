//four main types of focus on calculator which are all doing different jobs//
const screen = document.querySelector('#screen-input');
const buttons = document.querySelectorAll('button');
const equalsButton = document.querySelector('#equals');
const resetButton = document.querySelector('#reset');

// Added event listeners to the buttons//
// Need to define if the button clicked is a number or an operator//
// This allows for decimal point or number input we would add to the screen value//
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Conditional statement if button clicked is number or decimal point but decimal must not be clicked more than once//
    if (!isNaN(button.innerText) || button.innerText === '.' && !screen.value.includes('.')) {
      screen.value += button.innerText;
    }
    // If the button clicked is an operator//
    else if (button.classList.contains('operator')) {
      screen.value += '' + button.dataset.operator + '';
    } else {
      return console.error();
    }
  });
});

// Added event listener to equals button //
equalsButton.addEventListener('click', () => {
  // Evaluating the expression entered on the screen and updating the screen value
  screen.value = eval(screen.value);
});

// Added event listener to reset button(AC) //
resetButton.addEventListener('click', () => {
  // Clearing the screen value
  screen.value = '';
});

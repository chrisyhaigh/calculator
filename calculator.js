//four main types of focus on calculator which are all doing different jobs//
const screen = document.querySelector('#screen-input');
const buttons = document.querySelectorAll('button');
const equalsButton = document.querySelector('#equals');
const resetButton = document.querySelector('#reset');

// Added event listeners to the buttons//
// Need to define if the button clicked is a number or an operator//
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // If the button clicked is a number
    if (!isNaN(button.innerText) || button.innerText === '.') {
      screen.value += button.innerText;
    }
    // If the button clicked is an operator
    else if (button.classList.contains('operator')) {
      screen.value += ' ' + button.dataset.operator + ' ';
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

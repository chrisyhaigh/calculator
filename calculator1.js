// creates variable for screen input for using to link with the click event of the buttons//
const screenInput = document.getElementById("screen-input");

//add click event to each Button amd using querySelector and for each saves setting buttons individually//
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        screenInput.value += buttonValue;
    });
});

const addition = document.getElementById("addition");
const subtract = document.getElementById('subtract');
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

function add() {
    const currentInput = parseFloat(screenInput.value);
    const previousInput = parseFloat(screenInput.dataset.previousInput);
    const result = currentInput + previousInput;

    screenInput.value = result;
    screenInput.dataset.previousInput = result;
}

addition.addEventListener('click', add);

function minus() {
    const currentInput = parseFloat(screenInput.value);
    const previousInput = parseFloat(screenInput.dataset.previousInput);
    const result = currentInput - previousInput;

    screenInput.value = result;
    screenInput.dataset.previousInput = result;
}

subtract.addEventListener('click', minus);

function multiply() {
    const currentInput = parseFloat(screenInput.value);
    const previousInput = parseFloat(screenInput.dataset.previousInput);
    const result = currentInput * previousInput;

    screenInput.value = result;
    screenInput.dataset.previousInput = result;
}

multiplication.addEventListener('click', multiply);

function divide() {
    const currentInput = parseFloat(screenInput.value);
    const previousInput = parseFloat(screenInput.dataset.previousInput);
    const result = currentInput / previousInput;

    screenInput.value = result;
    screenInput.dataset.previousInput = result;
}

division.addEventListener('click', divide);
//This always resets the calculator to 0 with the AC button//
const resetButton = document.getElementById("reset");

function resetCalculator () {
    screenInput.value = 0;
    screenInput.dataset.previousInput = 0;
    console.log('Reset calculator to 0');
}

resetButton.addEventListener('click', resetCalculator);
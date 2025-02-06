let display = document.querySelector('.display');
let operator = null;
let firstNumber = null;

function appendNumber(num) {
  if (display.textContent === '0') {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function appendOperator(op) {
  operator = op;
  firstNumber = parseFloat(display.textContent);
  display.textContent += op;
}

function calculate() {
  let secondNumber = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(operator) + 1));
  let result;

  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
  }

  display.textContent = result;
}

function clearDisplay() {
  display.textContent = '0';
  operator = null;
  firstNumber = null;
}
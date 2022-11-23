const numberButtons = document.querySelectorAll('[data-number]');
const opratorButtons = document.querySelectorAll('[data-operator]');
const resetButton = document.querySelectorAll('[data-reset]');
const deletePreviousButton = document.querySelectorAll('[data-delete-previous]');
const equalButton = document.querySelectorAll('[data-equal]');
const previousOperandButton = document.querySelectorAll('[data-previous-operand]');
const currentOperandButton = document.querySelectorAll('[data-current-operand]');

class Calculator {
  constructor() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operator = '';
  }

  appendNumber(num) {
    this.currentOperand.toString() += num.toString();
  }

  reset() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = null;
  }

  delete() {}

  updateDisplay() {
    previousOperandButton.innerHTML = this.previousOperand;
    currentOperandButton.innerHTML = this.currentOperand;
  }

  compute() {}

  chooseOperator(operator) {
    this.operator = operator;
  }
}

const calc = new Calculator();

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    calc.appendNumber(number.innerHTML);
    calc.updateDisplay()
  });
});

opratorButtons.forEach((operator) => {
  operator.addEventListener('click', () => {
    calc.chooseOperator(operator.innerHTML);
    calc.updateDisplay();
  });
});



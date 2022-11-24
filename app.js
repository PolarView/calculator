const numberButtons = document.querySelectorAll('[data-number]');
const opratorButtons = document.querySelectorAll('[data-operator]');
const resetButton = document.querySelector('[data-reset]');
const deletePreviousButton = document.querySelector('[data-delete-previous]');
const equalButton = document.querySelector('[data-equal]');
const previousOperandButton = document.querySelector('[data-previous-operand]');
const currentOperandButton = document.querySelector('[data-current-operand]');
const currentOperatorField = document.querySelector('[data-current-operator]');
class Calculator {
  constructor() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operator = '';
  }

  appendNumber(num) {
    if (num === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand.length < 12) {
      this.currentOperand = this.currentOperand.toString() + num.toString();
    } else return;
  }

  reset() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operator = '';
  }

  delete() {
    if (this.currentOperand === '') return;
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  updateDisplay() {
    previousOperandButton.innerHTML = this.previousOperand;
    currentOperandButton.innerHTML = this.currentOperand;
    currentOperatorField.innerHTML = this.operator;
  }

  compute() {
    if (this.currentOperand === '' || this.previousOperand === '') return;
    else {
      let computation;
      switch (this.operator) {
        case '+':
          computation = +this.currentOperand + +this.previousOperand;
          break;
        case '-':
          computation = +this.previousOperand - +this.currentOperand;
          break;
        case '*':
          computation = +this.currentOperand * +this.previousOperand;
          break;
        case '/':
          computation = +this.previousOperand / +this.currentOperand;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.previousOperand = '';
      this.operator = '';
    }
  }

  chooseOperator(operator) {
    if (this.previousOperand === '' && this.currentOperand !== '') {
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
      this.operator = operator;
    }
    if (this.operator !== '' && this.currentOperand !== '') {
      this.compute();
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
      this.operator = operator;
    }
  }
}

const calc = new Calculator();

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    calc.appendNumber(number.innerHTML);
    calc.updateDisplay();
  });
});

opratorButtons.forEach((operator) => {
  operator.addEventListener('click', () => {
    calc.chooseOperator(operator.innerHTML);
    calc.updateDisplay();
  });
});

resetButton.addEventListener('click', () => {
  calc.reset();
  calc.updateDisplay();
});

equalButton.addEventListener('click', () => {
  calc.compute();

  calc.updateDisplay();
});

deletePreviousButton.addEventListener('click', () => {
  calc.delete();
  calc.updateDisplay();
});

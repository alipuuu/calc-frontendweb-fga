const clearAll = document.querySelector(".all-clear");

clearAll.addEventListener("click", () => {
  currNumber = "0";
  prevNumber = "";
  calcOperator = "";
  updateScreen(currNumber);
});

const oneClear = document.querySelector(".one-clear");
oneClear.addEventListener("click", () => {
  if (calculatorScreen.value == calcOperator) {
    calcOperator = "";
    currNumber = prevNumber;
    prevNumber = "";
    updateScreen(currNumber);
  } else if (calculatorScreen.value === currNumber) {
    if (currNumber.length <= 1) {
      currNumber = "0";
      updateScreen(currNumber);
      if (prevNumber != "") {
        updateScreen(calcOperator);
      }
    } else {
      currNumber = currNumber.slice(0, -1);
      updateScreen(currNumber);
    }
  }
});

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currNumber);
    console.log(event.target.value);
  });
});

let prevNumber = "";
let currNumber = "0";
let calcOperator = "";

const inputNumber = (number) => {
  if (currNumber == "0") {
    currNumber = number;
  } else {
    currNumber += number;
  }
};

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(calcOperator);
    console.log("operator pressed");
  });
});

const inputOperator = (operator) => {
  if (calcOperator === "") {
    prevNumber = currNumber;
  }

  calcOperator = operator;
  currNumber = "0";
};

let isDone = false;

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currNumber);
  isDone = true;
  console.log("calculate done");
});

const calculate = () => {
  let result = "";
  if (calcOperator != "") {
    switch (calcOperator) {
      case "+":
        result = parseFloat(prevNumber) + parseFloat(currNumber);
        break;
      case "-":
        result = parseFloat(prevNumber) - parseFloat(currNumber);
        break;
      case "*":
        result = parseFloat(prevNumber) * parseFloat(currNumber);
        break;
      case "/":
        result = parseFloat(prevNumber) / parseFloat(currNumber);
        break;
      default:
        break;
    }
  } else {
    if (currNumber.includes("%")) {
      currNumber = parseFloat(currNumber) * 0.01;
      currNumber.toString();
    }
    result = parseFloat(currNumber);
  }
  currNumber = result;
  calcOperator = "";
};

const decimals = document.querySelector(".decimal");

const inputDecimal = (dot) => {
  if (currNumber.includes(".")) {
    return;
  }
  currNumber += dot;
};

decimals.addEventListener("click", (event) => {
  console.log("decimal pressed");
  inputDecimal(event.target.value);
  updateScreen(currNumber);
});

const percentage = document.querySelector(".percentage");

const inputPercentage = (percent) => {
  if (currNumber.includes("%")) {
    return;
  }
  currNumber = currNumber / 100;
};

percentage.addEventListener("click", (event) => {
  console.log("percentage pressed");
  inputPercentage(event.target.value);
  updateScreen(currNumber);
  console.log(parseFloat(currNumber));
});

const minus = document.querySelector(".plus-minus");

minus.addEventListener("click", (event) => {
  if (calculatorScreen.value == calcOperator) {
    return;
  }
  currNumber = -1 * parseFloat(currNumber);
  updateScreen(currNumber);
});

const calc = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case "+": {
      result = number1 + number2;
      return `${number1} + ${number2} = ${result}`;
    }
    case "-": {
      result = number1 - number2;
      return `${number1} - ${number2} = ${result}`;
    }
    case "*": {
      result = number1 * number2;
      return `${number1} * ${number2} = ${result}`;
    }
    case "/": {
      result = number1 / number2;
      return `${number1} / ${number2} = ${result}`;
    }
    default: {
      return "Invalid operator";
    }
  }
};
export default calc;
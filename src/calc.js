const cacl = (number1, number2, operator) => {
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
      return `${number1} - ${number2} = ${result}`;
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

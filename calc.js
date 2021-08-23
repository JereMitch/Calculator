const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function (input) {
  tokens = input.split(" ");

  mathSymbol = tokens[1];
  num1 = Number(tokens[0]);
  num2 = Number(tokens[2]);

    //  console.log("mathSymbol", mathSymbol);
    //  console.log("num1", num1);
    //  console.log("num2", num2);

  if (mathSymbol === "+") {
    console.log(num1 + num2);
  }

  if (mathSymbol === "-") {
    console.log(num1 - num2);
  }

  if (mathSymbol === "*") {
    console.log(num1 * num2);
  }

  if (mathSymbol === "/") {
    console.log(num1 / num2);
  }
  // Thanks DJ for the easier sqrt function!
  if (mathSymbol === "sqrt") {
    console.log(Math.sqrt(num1));
  }

  if (mathSymbol === "^2") {
    console.log(num1 ** 2);
  }

  if (mathSymbol === "^3") {
    console.log(num1 ** 3);
  }

  if (mathSymbol === "%") {
    console.log(num1 % num2);
  }

  // This line closes the connection to the command line interface.
  reader.close();
});

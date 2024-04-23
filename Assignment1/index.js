const { add, sub, mul, div } = require("./lib/math");
const path = require("path");
const fs = require("fs");
const readline = require("readline-sync");

const num1 = Number(readline.question("Enter First Number: "));
const num2 = Number(readline.question("Enter Second Number: "));

const addResult = add(num1, num2);
const subResult = sub(num1, num2);
const mulResult = mul(num1, num2);
const divResult = div(num1, num2);

const csvData = `SUM:${addResult}\n DIFFERENCE:${subResult}\n MULTIPLY:${mulResult}\n DIVIDE:${divResult}`;

const filePath = path.join(__dirname, "Solution.csv");

fs.writeFile(filePath, csvData, (err) => {
  if (err) {
    console.error(`Error writing to ${filePath}:`, err);
  } else {
    console.log(`Results written to ${filePath} successfully.`);
  }
});

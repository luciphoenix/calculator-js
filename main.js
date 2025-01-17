const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

let num1 = null;
let num2 = null;
let operator = null;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}


const key = document.querySelector('.keyboard')
const display = document.querySelector(".output")

key.addEventListener("click", addKeyToDisplay)

function addKeyToDisplay(e){
  const value = e.target.getAttribute("data-key")
  if (!value) return
  if(value == 'del') return deleteOnce()
  display.textContent += value;   
}

function deleteOnce() {
  console.log(display.textContent = display.textContent.slice(0,-1))
}
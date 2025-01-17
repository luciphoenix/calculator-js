const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

let num1 = null;
let num2 = null;
let operator = null;

function operate(arg) {
  console.log(args = arg.split(" "));
  
  switch (args[1]) {
    case "+":
      return display.textContent = add(+args[0], +args[2]);
      break;
    case "-":
      return display.textContent = subtract(args[0], args[2]);
      break;
    case "x":
      return display.textContent = multiply(args[0], args[2]);
      break;
    case "/":
      return display.textContent = divide(args[0], args[2]);
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
  if(value == "ac") return clearScreen()
  if(value === ' = ' ) return operate(display.textContent)
  display.textContent += value;   
}

function deleteOnce() {
  display.textContent = display.textContent.slice(0,-1)
}

function clearScreen() {
  display.textContent = ''
}
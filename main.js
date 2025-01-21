const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

let recentAns = null

function operate(arg) {
  console.log(args = arg.split(" "));
  
  switch (args[1]) {
    case "+":
      return recentAns = add(+args[0], +args[2]);
      break;
    case "-":
      return recentAns = subtract(args[0], args[2]);
      break;
    case "x":
      return recentAns = multiply(args[0], args[2]);
      break;
    case "/":
      return recentAns = divide(args[0], args[2]);
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
  if(value === "ans") return displayRecentAns()
  if(value === ' = ' ) return display.textContent = operate(display.textContent)
  operateTwoOperands(value)
  display.textContent += value;   
}

function deleteOnce() {
  display.textContent = display.textContent.slice(0,-1)
}

function clearScreen() {
  display.textContent = ''
}

function displayRecentAns(){
  display.textContent = recentAns
}

function operateTwoOperands(value){
  if((display.textContent + value).split(' ').length > 3)  display.textContent = operate(display.textContent)
  }
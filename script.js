const display = document.getElementById('display');

// Add number or operator to the display
function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Clear the screen
function clearDisplay() {
  display.innerText = '0';
}

// Calculate result
function calculate() {
  try {
    const expression = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');
    const result = eval(expression);
    display.innerText = result;
  } catch (error) {
    display.innerText = 'Error';
  }
}
let input = '';

function addToInput(value) {
  input += value;
  document.getElementById('equationInput').value = input;
}

function solveEquation() {
  const resultElement = document.getElementById('result');

  try {
    const result = eval(input);
    resultElement.textContent = `Result: ${result}`;
  } catch (error) {
    resultElement.textContent = 'Invalid equation';
  }
}

function clearInput() {
  input = '';
  document.getElementById('equationInput').value = '';
  document.getElementById('result').textContent = '';
}

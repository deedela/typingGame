const quote = document.getElementById('quote');
const input = document.getElementById ('typed-value');
const start = document.getElementById('start');

let targetWord;

function startGame() {
    console.log('Game started!');
    targetWord = 'typeme';
    quote.innerHTML = `<span>${targetWord}</span>`;
}

function checkInput() {
    console.log("Checking", input.value);
    const currentWord = targetWord;
    const typedValue = input.value.trim(); // JS string method '  hello world  ' = 'hello world'
  if (currentWord !== typedValue) {
    input.className = currentWord.startsWith(typedValue) ? '' : 'error';
    // if (currentWord.startsWith(typedValue) === true) {
    //   input.className = '';
    // } else {
    //   input.className = 'error';
    // }
    return;
  }
}

start.addEventListener('click', startGame);
start.addEventListener('input', checkInput);
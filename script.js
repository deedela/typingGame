const quote = document.getElementById('quote');
const input = document.getElementById ('typed-value');
const start = document.getElementById('start');

let quoteText;
let wordQueue;
let highLightPosition;

function startGame() {
    quoteText = 'type me';
    wordQueue = quoteText.split(' ');
    quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');    
    
    highLightPosition = 0;
    // quote.childNodes = ['<span>type</span>', '<span>me</span>']
    quote.childNodes[highLightPosition].className = 'highlight';
  }

function checkInput() {
    console.log('Checking', input.value);
    const currentWord = wordQueue [0]; // the first word is the word queue array
    const typedValue = input.value.trim(); //JS string method '  hello world  ' = 'hello world'

    if (currentWord !== typedValue) { //false when the word typed is correct
      input.className = currentWord.startsWith(typedValue) ? '' : 'error';
      // if (currentWord.startsWith(typedValue) === true) {
      //   input.className = '';
      // } else {
      //   input.className = 'error';
      // }
      return;
    }

    // this is what happens when there's no error 
    wordQueue.shift(); //remove the first word from the wordQueue array, because we already typed it!
    input.value = ''; //clear input field
  }
  
  start.addEventListener('click', startGame);
  input.addEventListener('input', checkInput);
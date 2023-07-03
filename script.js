const quote = document.getElementById('quote');
const input = document.getElementById ('typed-value');
const start = document.getElementById('start');
const message = document.getElementById('message');
const quotes = [
  'type me'
  // 'Things are only impossible until they are not',
  // 'It is possible to commit no errors and still lose. That is not a weakness. That is life',
  // 'There is a way out of every box, a solution to every puzzle; it is just a matter of finding it.',
  // 'Without freedom of choice there is no creativity',
  // 'Logic is the beginning of wisdom, not the end',
  // 'Improve a mechanical device and you may double productivity. But improve yourself, you gain a thousandfold',
  // 'Compassion: that is the one thing no machine ever had. Maybe it is the one thing that keeps us ahead of them.',
];

let wordQueue;
let highLightPosition;
let startTime;

function startGame() {
    // quoteText = 'type me';
    console.log("Game started!");

    const quoteIndex = Math.floor(Math.random()* quotes.length);
    let quoteText = quotes[quoteIndex];
    wordQueue = quoteText.split(' ');
    quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');    
    
    highLightPosition = 0;
    // quote.childNodes = ['<span>type</span>', '<span>me</span>']
    quote.childNodes[highLightPosition].className = 'highlight';
    
    document.body.className = "";
    start.className = "started";
    message.innerHTML = "";
  
    startTime = new Date().getTime();
    setTimeout(() => { 
      start.className = "launch";
    }, 500);  
    setTimeout(() => {    
      start.style.display = "none";
    }, 750);

    input.focus();

}

function checkInput() {
  const currentWord = wordQueue[0].replaceAll(".", "").replaceAll(",", "");
  const typedValue = input.value.trim();
  
  if (currentWord !== typedValue) {
    input.className = currentWord.startsWith(typedValue) ? "" : "error";
    return;
  }

  wordQueue.shift(); // remove the first item from the array, making the next item our new `currentWord`
  input.value = '';
console.log (quote, highLightPosition)
  quote.childNodes[highLightPosition].className = ""; // [0] == '<span>type</span>'

  if (wordQueue.length === 0) {
    gameOver();
    return;
  }

  highLightPosition++;                      
  quote.childNodes[highLightPosition].className = 'highlight'; // [1] == '<span>me</span>'
}

function gameOver() {
  const elapsedTime = new Date().getTime() - startTime;
  document.body.className = "winner";
  message.innerHTML = `<span class="congrats">Congratulations!</span><br />
  You finished in ${elapsedTime / 1000} seconds`;

}

start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);

  
  start.addEventListener('click', startGame);
  input.addEventListener('input', checkInput);
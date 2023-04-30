const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const checkGuess = function(number) {
  if (number > secretNumber) {
    console.log('too high');
    return false;
  }
  if (number < secretNumber) {
    console.log('too low');
    return false;
  }
  console.log('you win');
  rl.close();
  return true;
}

function askGuess() {
  rl.question('enter a guess !', (num) => {
    const n = Number(num);
    if (checkGuess(n)) {
      rl.close();
    } else {
      askGuess();
    }
  });
}

function askRange() {
  rl.question('enter min', (min) => {
    rl.question('enter max', (max) => {
      secretNumber = randomInRange(Number(min), Number(max));
      console.log('im thinking of a number between ' + min + ' and ' + max);
      askGuess();
    });
  });
}

askRange();












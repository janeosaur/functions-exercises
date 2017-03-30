// #1: A function that returns either "heads" or "tails", the result of a coin flip.
function headsOrTails() {
  if (Math.random > 0.5) {
    console.log("heads");
    return "heads"
  } else {
    console.log("tails");
    return "tails"
  }
}

// #2: A function that, when called, prompts the user to guess either "heads" or "tails" and returns their guess.
function userGuessPrompt() {
  let userInput = prompt('Please guess either "heads" or "tails"');
  console.log(userInput);
  return(userInput)
}

// #3: A function that takes in a string and puts that string into the result element on your page.
function stringUpdate(input) {
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = input;
}
stringUpdate('asldjfalksdjflsjf');

// #4: Then, write a fourth function that wraps all of these functions into one, so that calling that fourth
// function will prompt the user to guess heads or tails, flip a coin, and then tell the user whether or not
// they were right. Make sure that calling just that function from the console works as expected.

function hotFinal() {
    let userInput = prompt('Please guess either "heads" or "tails"');
    console.log(userInput); // log user's guess
    var diceRoll = Math.random(); // virtually flipping the coin
    if (diceRoll > 0.5) {
      console.log("heads"); // log heads if random number is > 0.5
      result = "heads"
    } else {
      console.log("tails"); // log tails if random number is < 0.5
      result = "tails"
    };
  if (userInput === result) {
    console.log("You guessed right!");
    alert("You guessed right!");
  } else {
    console.log("You guessed wrong, sorry!");
    alert("You guessed wrong, sorry!")
  }
}

hotFinal();

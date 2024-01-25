const words = [
  "apple",
  "banana",
  "orange",
  "mango",
  "strawberry",
  "grape",
  "pineapple",
  "blueberry",
  "raspberry",
  "blackberry",
  "kiwi",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "papaya",
  "guava",
  "lychee",
  "dragonfruit",
  "passionfruit",
  "grapefruit",
  "lime",
  "lemon",
  "cherry",
  "peach",
  "nectarine",
  "apricot",
  "plum",
  "pomegranate",
  "fig",
  "date",
  "persimmon",
  "tangerine",
  "clementine",
  "kumquat",
  "durian",
  "jackfruit",
  "starfruit",
  "avocado",
  "coconut",
  "cranberry",
  "currant",
  "gooseberry",
  "elderberry",
  "quince",
  "pear",
  "acai",
  "sapodilla",
  "soursop",
  "mulberry",
  "boysenberry",
  "loganberry",
  "jambolan",
  "salak",
  "rambutan",
  "longan",
  "pomelo",
];

let selectedWord = "";
let guessedWord = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

// Function to start a new game
function newGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = Array(selectedWord.length).fill("_");
  incorrectGuesses = 0;

  updateDisplay();
}

// Function to update the display
function updateDisplay() {
  document.getElementById("word").innerText = guessedWord.join(" ");
  document.getElementById("letters").innerHTML = generateAlphabetButtons();
  document.getElementById("message").innerText = "";
  document.getElementById("playAgain").style.display = "none";
}

// Function to generate alphabet buttons
function generateAlphabetButtons() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let buttonsHTML = "";

  for (let letter of alphabet) {
    buttonsHTML += `<button onclick="guess('${letter}')">${letter}</button>`;
  }

  return buttonsHTML;
}

// Function to handle a guess
function guess(letter) {
  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    incorrectGuesses++;
  }

  checkGameStatus();
}

// Function to check the game status (win/lose)
function checkGameStatus() {
  if (guessedWord.join("") === selectedWord) {
    document.getElementById("message").innerText =
      "Congratulations! You guessed the word!";
    document.getElementById("playAgain").style.display = "block";
  } else if (incorrectGuesses >= maxIncorrectGuesses) {
    document.getElementById(
      "message"
    ).innerText = `Sorry, you lost. The correct word was "${selectedWord}".`;
    document.getElementById("playAgain").style.display = "block";
  } else {
    updateDisplay();
  }
}

// Function to reset the game
function resetGame() {
  newGame();
}

// Start a new game when the page loads
window.onload = newGame;
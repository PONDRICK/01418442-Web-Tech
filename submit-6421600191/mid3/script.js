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

const letterDiv = document.getElementById("letters"); // เลือก elements จาก html
const wordDiv = document.getElementById("word");
const messageDiv = document.getElementById("message");
const playAgainButton = document.getElementById("playAgain");

let selectedWord = ""; // กำหนดค่าว่างของคำและจำนวนครั้งที่เดาคำ
let guessedWord = [];
let attemptsLeft = 6;

const resetGame = () => {
  // ฟังก์ชันเริ่มเกมใหม่ run ฟังก์อื่นๆใหม่ทั้งหมด
  attemptsLeft = 6;
  initGame();
  hideButton(playAgainButton);
};

const getRandomWord = () => {
  // ฟังก์ชันสุ่มคำจาก array words
  return words[Math.floor(Math.random() * words.length)];
};

const displayWord = () => {
  // ฟังก์ชันแสดงตัวอักษรที่เดาถูก
  wordDiv.textContent = guessedWord.join(" ");
};

const updateMessage = (message) => {
  // ฟังก์ชันแสดงข้อความสถานะเกม
  messageDiv.textContent = message;
};

const guessLetter = (letter) => {
  // ฟังก์ชันเลือกปุ่มตัวอักษร แสดงข้อความชนะ-แพ้ จำนวนครั้งที่เดา และแสดงปุ่มให้เล่นอีกครั้ง
  if (attemptsLeft > 0) {
    if (selectedWord.includes(letter)) {
      // Correct guess
      for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
          guessedWord[i] = letter;
        }
      }
      displayWord();

      if (!guessedWord.includes("_")) {
        // All letters guessed, player wins
        updateMessage("Congratulations! You've won!");
        showButton(playAgainButton);
      }
    } else {
      // Incorrect guess
      attemptsLeft--;
      updateMessage(`Incorrect guess. Attempts left: ${attemptsLeft}`);

      if (attemptsLeft === 0) {
        // No attempts left, player loses
        updateMessage(`Game over! The word was ${selectedWord}`);
        showButton(playAgainButton);
      }
    }
  } else {
    // Game already over
    updateMessage("Game over. Please click 'Play Again' to restart.");
    showButton(playAgainButton);
  }
};

const initGame = () => {
  // ฟังก์ชันตัวเกมที่เรียก การสุ่มคำและแสดงคำศัพท์
  selectedWord = getRandomWord();
  guessedWord = Array(selectedWord.length).fill("_");
  displayWord();
  updateMessage("");
  console.log(selectedWord);
};

initGame();

// ใช้ for loop สร้างปุ่ม A-Z ใน letterDiv
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i).toUpperCase();
  letterDiv.appendChild(button);
  button.addEventListener("click", (e) => guessLetter(String.fromCharCode(i)));
}

const showButton = (button) => {
  // ฟังก์ชันแสดงปุ่มให้กด
  button.style.display = "block";
};

const hideButton = (button) => {
  // ฟังก์ชันซ่อนปุ่มไม่ให้กด
  button.style.display = "none";
};
// ใช้ eventlistener กับปุ่ม play again ด้วย ฟังก์ชัน resetGame
playAgainButton.addEventListener("click", resetGame);

let machineNumber = Math.ceil(Math.random() * 21);
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;
  if (guess != machineNumber) {
    document.querySelector(".message").textContent =
      guess < machineNumber ? "น้อยกว่า" : "มากกว่า";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "เย้ ชนะแล้วไอ้น้อง";
    document.querySelector(".secret").textContent = machineNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  if (score == 0) {
    document.querySelector(".message").textContent = "เสียเครดิตแล้ว!";
    document.querySelector(".secret").textContent = machineNumber;
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs",
      "_blank"
    );
  }
});

document.querySelector(".btn_reload").addEventListener("click", () => {
  machineNumber = Math.ceil(Math.random() * 21);
  score = 10;
  document.querySelector(".secret").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "เอ๊า!! ทายมา";
  document.querySelector(".guess").value = "";
});

let machineNumber = Math.ceil(Math.random() * 21);
let score = 10;
let highscore = 0;
console.log("คำตอบ คือ " + machineNumber);

document.querySelector(".check").addEventListener("click", () => {
  // if (score > 0) {
  // 	guess = document.querySelector(".guess").value;
  // 	if (guess == machineNumber) {
  // 		document.querySelector(".message").textContent = "ยินดีด้วยคุณทายถูกแล้ว";
  // 		document.querySelector(".secret").textContent = machineNumber;
  // 		if (score > highscore) {
  // 			highscore = score;
  // 			document.querySelector(".highscore").textContent = score;
  // 		}
  // 	} else if (guess > machineNumber) {
  // 		document.querySelector(".message").textContent =
  // 			"เลขที่คุณทายมีค่ามากเกินไป";
  // 		score--;
  // 	} else if (guess < machineNumber) {
  // 		document.querySelector(".message").textContent =
  // 			"เลขที่คุณทายมีค่าน้อยเกินไป";
  // 		score--;
  // 	}
  // 	document.querySelector(".score").textContent = score;
  // } else {
  // 	document.querySelector(".message").textContent = "GAME OVER";
  // }
  guess = document.querySelector(".guess").value;
  if (guess < 1 || guess > 21) {
    alert("โปรดใส่ค่าระหว่าง 1-21");
  } else {
    if (score > 0) {
      if (guess != machineNumber) {
        if (guess > machineNumber) {
          document.querySelector(".message").textContent =
            "เลขที่คุณทายมีค่ามากเกินไป";
          score--;
        } else if (guess < machineNumber) {
          document.querySelector(".message").textContent =
            "เลขที่คุณทายมีค่าน้อยเกินไป";
          score--;
        }
      } else {
        document.querySelector(".message").textContent =
          "ยินดีด้วยคุณทายถูกแล้ว";
        document.querySelector(".secret").textContent = machineNumber;
        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = score;
        }
      }
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "GAME OVER!!";
    }
  }
});

document.querySelector(".restratBtn").addEventListener("click", () => {
  machineNumber = Math.ceil(Math.random() * 21);
  document.querySelector(".secret").textContent = "?";
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "เอ้า!! ทายมา";
  console.log("คำตอบ คือ " + machineNumber);
});

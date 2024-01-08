document.querySelector(".login__btn").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.querySelector(".login__input--user").value;
  const password = document.querySelector(".login__input--psw").value;
  if (username === "admin" && password === "1234") {
    document.querySelector(".welcome").textContent = "ยินดีต้อนรับ admin";
  } else {
    alert("ชื่อผู้ใช้กับรหัสผ่านไม่ถูกต้อง");
  }
});

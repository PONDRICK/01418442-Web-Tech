const account1 = {
  owner: "Prayuth Snow",
  user: "yuth",
  psw: "1111",
};
const account2 = {
  owner: "Lisa Lazoo",
  user: "lisa",
  psw: "abcd",
};

const accounts = [account1, account2];

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

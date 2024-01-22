// เชื่อม form, name, email, password, confirm
// ดักจับ event 'submit'ใน form
// เขียน function checkPassword() เช็ค password เท่ากับ
// confirm หรือไม่ ถ้าไม่ ให้แสดง รหัสผ่านไม่ตรงกัน

const form = document.getElementById("myForm");

const username = document.getElementById("username");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkPassword(password, confirm);
	checkUserName(6, 10);
});

function checkPassword(password, confirm) {
	if (password.value !== confirm.value) {
		showErrMessage("รหัสผ่านไม่ตรงกัน", confirm);
	} else {
		showSuccessBorder(password);
		showSuccessBorder(confirm);
	}
}

const showErrMessage = (message, input) => {
	const formControl = input.parentElement;
	formControl.className = "frmDiv error";
	const small = formControl.querySelector("small");
	small.innerText = message;
};

const showSuccessBorder = (input) => {
	const formControl = input.parentElement;
	formControl.className = "frmDiv success";
};

const checkUserName = (min, max) => {
	if (username.value.length < min) {
		showErrMessage(
			"ชื่อผู้ใช้ต้องมากกว่าหรือเท่ากับ " + min + " ตัวอักษร",
			username
		);
	} else if (username.value.length > max) {
		showErrMessage(
			"ชื่อผู้ใช้ต้องน้อยกว่าหรือเท่ากับ " + max + " ตัวอักษร",
			username
		);
	} else {
		showSuccessBorder(username);
	}
};
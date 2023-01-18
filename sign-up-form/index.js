const password = document.getElementById("password");
const password_confirm = document.getElementById("confirm-password");

const handlePassword = () => {
    if (password.value !== password_confirm.value) {
        document.getElementById("wrong").innerText = "*Password do not match";
        password.style.borderColor = "red";
        password_confirm.style.borderColor = "red";
    }
    else {
        document.getElementById("wrong").innerText = "";
        password.style.borderColor = "black";
        password_confirm.style.borderColor = "black";
    }
}

password.addEventListener("keyup", handlePassword)
password_confirm.addEventListener("keyup", handlePassword)
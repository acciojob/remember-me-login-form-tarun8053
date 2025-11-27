//your JS code here. If required.
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");


    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {
        existingBtn.style.display = "inline-block";
        checkbox.checked = true;
    }


form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Logged in as " + username.value);

    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

existingBtn.addEventListener("click", function () {
    const saved = localStorage.getItem("username");
    if (saved) {
        alert("Logged in as " + saved);
    }
});

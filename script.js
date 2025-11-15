const input = document.getElementById("nameInput");
const btn = document.getElementById("greetBtn");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
    const userName = input.value;

    if (userName.trim() === "") {
        output.textContent = "Please enter your name!";
    } else {
        output.textContent = `Hello ${userName}, hope you're having a great day!`;
    }
});
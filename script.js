const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light mode";
    } else {
        themeButton.textContent = "Dark mode";
    }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const status = document.getElementById("form-status");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    status.textContent = "";

    let valid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        valid = false;
    }

    if (valid) {
        status.textContent = "Thank you! Your message is valid. Nothing was sent.";
        form.reset();
    }
});
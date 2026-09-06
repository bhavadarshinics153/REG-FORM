var form = document.getElementById("registrationForm");

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var bioInput = document.getElementById("bio");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var bioError = document.getElementById("bioError");

var counter = document.getElementById("counter");
var submitBtn = document.getElementById("submitBtn");


// NAME
nameInput.addEventListener("input", function () {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }

    checkForm();
});


// EMAIL
emailInput.addEventListener("input", function () {

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
    } 
    else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email";
    } 
    else {
        emailError.textContent = "";
    }

    checkForm();
});


// PASSWORD
passwordInput.addEventListener("input", function () {

    if (passwordInput.value === "") {
        passwordError.textContent = "";
    } 
    else if (passwordInput.value.length < 6) {
        passwordError.textContent = "Minimum 6 characters required";
    } 
    else {
        passwordError.textContent = "";
    }

    checkForm();
});


// BIO
bioInput.addEventListener("input", function () {

    var length = bioInput.value.length;

    counter.textContent = length + " / 200 characters";

    if (length >= 160 && length < 200) {
        bioError.textContent = "Approaching character limit";
    } 
    else if (length === 200) {
        bioError.textContent = "Maximum 200 characters reached";
    } 
    else {
        bioError.textContent = "";
    }
});


// CHECK FORM
function checkForm() {

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nameValid = nameInput.value.trim() !== "";
    var emailValid = emailPattern.test(emailInput.value);
    var passwordValid = passwordInput.value.length >= 6;

    if (nameValid && emailValid && passwordValid) {
        submitBtn.disabled = false;
    } 
    else {
        submitBtn.disabled = true;
    }
}


// SUBMIT
form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Registration successful!");

    form.reset();

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    bioError.textContent = "";

    counter.textContent = "0 / 200 characters";

    submitBtn.disabled = true;
});
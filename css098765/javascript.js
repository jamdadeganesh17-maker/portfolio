let correctAnswer;

// Generate Captcha
function generateCaptcha() {
    let type = Math.floor(Math.random() * 2);

    if(type === 0){
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;

        document.getElementById("captchaQuestion").innerText =
            `What is ${num1} + ${num2} ?`;

        correctAnswer = (num1 + num2).toString();
    } else {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomLetter =
            letters[Math.floor(Math.random() * letters.length)];

        document.getElementById("captchaQuestion").innerText =
            `Type this letter: ${randomLetter}`;

        correctAnswer = randomLetter;
    }
}
window.onload = function () {

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("captchaQuestion").innerHTML =
        "Captcha: " + num1 + " + " + num2 + " = ?";
};
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        toggleBtn.innerHTML = "☀️ Light Mode";
    }else{
        toggleBtn.innerHTML = "🌙 Dark Mode";
    }

});
// Back To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if(document.body.scrollTop > 200 ||
       document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.onscroll = function () {
    let btn = document.getElementById("topBtn");

    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.pageYOffset > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const text = "Ganesh Jamdade";
let index = 0;

function typeName() {

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeName, 150);
    }
}

window.onload = typeName;
const text = "Ganesh Jamdade";
let i = 0;

function typingEffect(){

    document.getElementById("typing").innerHTML =
    text.substring(0, i);

    i++;

    if(i > text.length){
        i = 0;
    }

    setTimeout(typingEffect, 200);
}

typingEffect();
let correctAnswer;

function generateCaptcha() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    correctAnswer = num1 + num2;

    document.getElementById("captchaQuestion").innerHTML =
        "Captcha: " + num1 + " + " + num2 + " = ?";
}

generateCaptcha();
let correctAnswer;

// Generate Captcha
function generateCaptcha() {

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    correctAnswer = num1 + num2;

    document.getElementById("captchaQuestion").innerHTML =
        `Captcha: ${num1} + ${num2} = ?`;
}

// Form Validation
document.addEventListener("DOMContentLoaded", function () {

    generateCaptcha();

    document.getElementById("contactForm")
        .addEventListener("submit", function (e) {

            e.preventDefault();

            let userAnswer =
                document.getElementById("captchaAnswer").value;

            if (parseInt(userAnswer) === correctAnswer) {

                alert("Message Sent Successfully!");

                document.getElementById("contactForm").reset();

                generateCaptcha();

            } else {

                alert("Wrong Captcha! Please try again.");

                generateCaptcha();

                document.getElementById("captchaAnswer").value = "";
            }
        });
});
var typed = new Typed("#typing", {
strings: [
"Frontend Developer",
"Web Designer",
"JavaScript Learner"
],
typeSpeed: 100,
backSpeed: 50,
loop: true
});
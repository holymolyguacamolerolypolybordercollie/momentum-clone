const loginForm = document.querySelector(".login");
const loginForm__input = loginForm.querySelector(".login__input");
const loginForm__btn = loginForm.querySelector(".login__button");

const greetings = document.querySelector(".greetings");


const savedUsername = localStorage.getItem("username");

if (savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onclickLoginBtn);
}

else{
    sayHi();
}

function onclickLoginBtn(event){
    loginForm.classList.add("hidden");
    event.preventDefault();
    const username = loginForm__input.value;
    localStorage.setItem("username",username);
    greetings.classList.remove("hidden");
    greetings.innerHTML = "Greetings, " + username + "<br> How is your Day?";
    const watch = document.querySelector(".watch")
    watch.classList.remove("hidden")
};

function sayHi(){
    greetings.classList.remove("hidden");
    greetings.innerHTML = "Greetings, " + savedUsername + "<br> How is your Day?";
   const watch = document.querySelector(".watch")
    watch.classList.remove("hidden")

}
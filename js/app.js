const signInBtn = document.querySelector(".sign-in");
const signUpBtn = document.querySelector(".sign-up");
const resetBtn = document.querySelector("button.password");
const backToLoginBtn = document.querySelector("button.back");

console.log(resetBtn);

const signIn = document.querySelector(".form-login");
const signUp = document.querySelector(".signup-form");
const reset = document.querySelector(".reset");

const loginBtnForm = document.querySelectorAll("button.login");
const signupBtnForm = signIn.querySelector(".signup");

console.log(loginBtnForm);


signInBtn.addEventListener("click", () => {
  document.querySelector(".form-active") &&
   document.querySelector(".form-active").classList.remove("form-active");
   signIn.classList.add("form-active");
});

loginBtnForm.forEach(btn => {
   btn.addEventListener("click", () => {
      document.querySelector(".form-active").classList.remove("form-active");
      signIn.classList.add("form-active");
   })
})

signUpBtn.addEventListener("click", () => {
  document.querySelector(".form-active") &&
    document.querySelector(".form-active").classList.remove("form-active");
  signUp.classList.add("form-active");
});

signupBtnForm.addEventListener("click", () => {
   document.querySelector(".form-active").classList.remove("form-active");
   signUp.classList.add("form-active");
});

resetBtn.addEventListener("click", (e) => {
   document.querySelector(".form-active") &&
   document.querySelector(".form-active").classList.remove("form-active");
   reset.classList.add("form-active");
});

backToLoginBtn.addEventListener("click", () => {
    document.querySelector(".form-active").classList.remove("form-active");
   signIn.classList.add("form-active");
})


// signup

const account = document.querySelector(".login-form");
const signup = document.querySelector(".signup-form");

account.addEventListener("click", (e) => {
  if (e.target.matches(".login-form")) {
    console.log("hi");
    form.classList.remove("active");
    signup.classList.toggle("active");
  }
});


// console.log("app.js");

// const filter = document.querySelector(".account-container");
// const  account= document.querySelector(".account");

// account.addEventListener("click", (e) => {
//    if(e .target.matches (".account")){
//       form.classList.remove("active")
//    filter.classList.toggle("active")
//    }
// })

// const password = document.querySelector(".buttom");
// const forgot = document.querySelector(".forgot-pass");

// password . addEventListener("click", (e) => {
// if (e . target.matches(".password")){
//    filter.classList.remove("active")
//    forgot.classList.toggle("active")
// }
// })

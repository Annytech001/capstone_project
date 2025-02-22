document.addEventListener("DOMContentLoaded", function () {
   const formTitle = document.getElementById("form-title");
   const authForm = document.getElementById("auth-form");
   const toggleText = document.getElementById("toggle");

   let isSignup = false;

   toggleText.addEventListener("click", function () {
       isSignup = !isSignup;
       if (isSignup) {
           formTitle.textContent = "Sign Up";
           toggleText.textContent = "Already have an account? Login";
       } else {
           formTitle.textContent = "Login";
           toggleText.textContent = "Don't have an account? Sign up";
       }
   });

   authForm.addEventListener("submit", function (e) {
       e.preventDefault();
       alert(isSignup ? "Signing up..." : "Logging in...");
   });
});
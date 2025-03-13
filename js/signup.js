const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");

const signup = async () => {
  sessionStorage.setItem("name", name.value);
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("mobile", mobile.value);
  window.location.href = "signin.html";
  // window.location.assign("signin.html");
};

const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signup();
});

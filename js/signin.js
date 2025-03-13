const mobile = document.getElementById("mobile");
const signInBtn = document.getElementById("signin-btn");

const signin = (e) => {
  e.preventDefault();
  const mobileStored = sessionStorage.getItem("mobile");
  if (mobileStored === mobile.value) {
    window.location.href = "./index.html";
    alert("Sign in successful");
  } else {
    alert("Invalid mobile number");
  }
};

signInBtn.addEventListener("click", (e) => signin(e));

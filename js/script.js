// Login class active
const login = document.querySelector('.navbar-nav a[href="#login"]');
const loginsection = document.querySelector("#login");
const closebtn = document.querySelector(".close-btn");

login.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginsection.classList.contains("active")) {
    loginsection.classList.remove("active");
  } else {
    loginsection.classList.add("active");
  }
});

closebtn.addEventListener("click", () => {
  loginsection.classList.remove("active");
});

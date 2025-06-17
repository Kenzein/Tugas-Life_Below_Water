// Register start
const registerLink = document.querySelector('.navbar-nav a[href="#register"]');
const registerSection = document.querySelector("#register");
const registerContainer = document.querySelector(".register-container");

// Menampilkan regis
function showRegis() {
  hideLogin();
  registerSection.classList.add("active");
}
// Menghilangkan regis
function hideRegis() {
  registerSection.classList.remove("active");
}

// Klik pada Link Register
registerLink.addEventListener("click", function (e) {
  e.preventDefault();
  if (registerSection.classList.contains("active")) {
    hideRegis(); // Kondisi hide menyala
  } else {
    showRegis(); // menampilkan ketika tidak aktif
  }
});

// Keadaan di click
registerSection.addEventListener("click", (event) => {
  // Mengecek apakah klik terjadi di luar kontainer register
  if (!registerContainer.contains(event.target)) {
    hideRegis(); // Hide the register section
  }
});
// Register end

// Login start
const loginLink = document.querySelector('.navbar-nav a[href="#login"]');
const loginSection = document.querySelector("#login");
const loginContainer = document.querySelector(".login-container");

// Menampilkan login
function showLogin() {
  hideRegis();
  loginSection.classList.add("active");
}

// Menyembunyikan login
function hideLogin() {
  loginSection.classList.remove("active");
}
// Klik pada Link Login
loginLink.addEventListener("click", function (e) {
  e.preventDefault(); // stay di halaman yang sama
  if (loginSection.classList.contains("active")) {
    hideLogin(); // Kondisi hide menyala
  } else {
    showLogin(); // menampilkan ketika tidak aktif
  }
});

// Keadaan di click
loginSection.addEventListener("click", (event) => {
  // Mengecek apakah klik terjadi di luar kontainer login
  if (!loginContainer.contains(event.target)) {
    hideLogin(); // Hide the login section
  }
});
// Login End

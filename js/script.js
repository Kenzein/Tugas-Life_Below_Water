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
//Other
const otherSections = document.querySelectorAll(
  "#home, #about, #action, #news"
);
const otherLinks = document.querySelectorAll(
  '.navbar-nav a[href="#home"], .navbar-nav a[href="#about"], .navbar-nav a[href="#action"], .navbar-nav a[href="#news"]'
);
// Menambahkan event listener untuk setiap section
otherSections.forEach((section) => {
  section.addEventListener("click", () => {
    hideRegis(); // Sembunyikan registrasi
    hideLogin(); // Sembunyikan login
  });
});

// Menambahkan peristiwa listener untuk setiap tautan di navbar
otherLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //stay dihalaman yang sama
    hideRegis(); // Sembunyikan registrasi
    hideLogin(); // Sembunyikan login

    // Mengambil ID dari tautan yang diklik
    const targetSection = link.getAttribute("href");
    // Menggunakan scroll ke section yang dituju
    document
      .querySelector(targetSection)
      .scrollIntoView({ behavior: "smooth" });
  });
});

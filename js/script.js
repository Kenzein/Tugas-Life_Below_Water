// Register start
const registerLink = document.querySelector('.navbar-nav a[href="#register"]');
const registerSection = document.querySelector("#register");
const registerContainer = document.querySelector(".register-container");

// Menampilkan regis
function showRegis() {
  hideLogin();
  registerSection.classList.add("active");
}

// Klik pada Link Register
registerLink.addEventListener("click", function (e) {
  e.preventDefault();
  hideHamburgerMenu();
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

// Klik pada Link Login
loginLink.addEventListener("click", function (e) {
  e.preventDefault(); // stay di halaman yang sama
  hideHamburgerMenu();
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
//Other start
const otherSections = document.querySelectorAll(
  "#home, #about, #action, #news"
);
const otherLinks = document.querySelectorAll(
  '.navbar-nav a[href="#home"], .navbar-nav a[href="#about"], .navbar-nav a[href="#action"], .navbar-nav a[href="#news"]'
);
// Menambah event listener untuk setiap section
otherSections.forEach((section) => {
  section.addEventListener("click", () => {
    hideRegis(); // Sembunyikan registrasi
    hideLogin(); // Sembunyikan login
  });
});

// Menambah event listener untuk semua tautan di navbar
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
//Other end
// Hamburger menu start
const hamburger = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
// Ketika click menu
hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");

  if (navbarNav.classList.contains("active")) {
    hideAllPops();
  }
});
// Ketika klik diluar menu
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    hideHamburgerMenu();
  }
});

// Hamburger menu end

// Kumpulan function hide
// Menghilangkan navigasi menu
function hideHamburgerMenu() {
  navbarNav.classList.remove("active");
}

// Menghilangkan login
function hideLogin() {
  loginSection.classList.remove("active");
}
// Menghilangkan regis
function hideRegis() {
  registerSection.classList.remove("active");
}

function hideAllPops() {
  hideLogin();
  hideRegis();
}

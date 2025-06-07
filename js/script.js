// Login start
const loginLink = document.querySelector('.navbar-nav a[href="#login"]');
const loginSection = document.querySelector("#login");
const loginContainer = document.querySelector(".login-container");

// fungsi menampilkan login
function showLogin() {
  loginSection.classList.add("active");
}

// fungsi menyembunyikan login
function hideLogin() {
  loginSection.classList.remove("active");
}

// Event listener for the login link
loginLink.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default anchor behavior
  if (loginSection.classList.contains("active")) {
    hideLogin(); // Kondisi hide menyala
  } else {
    showLogin(); // menampilkan ketika tidak aktif
  }
});

// Keadaan click
loginSection.addEventListener("click", (event) => {
  // Check if the click is outside the login container
  if (!loginContainer.contains(event.target)) {
    hideLogin(); // Hide the login section
  }
});
// Login End

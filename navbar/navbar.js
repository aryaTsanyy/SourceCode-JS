/** @format */

let lastScrollTop = 0;
let navbarTimeout;
const navbar = document.querySelector(".navbar");

// Fungsi untuk menampilkan navbar
function showNavbar() {
  navbar.classList.remove("hidden");
  navbar.classList.add("visible");
  clearTimeout(navbarTimeout); // Clear timeout
  navbarTimeout = setTimeout(() => {
    navbar.classList.remove("visible"); // Hapus visible setelah 5 detik
  }, 5000); // Durasi 5 detik
}

// Event listener untuk scroll
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Jika scroll lebih dari 50px, beri warna hitam pada navbar
  if (scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled"); // Buat transparan lagi saat di section pertama
  }

  // Animasi hide/show berdasarkan arah scroll
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden"); // Sembunyikan navbar saat scroll ke bawah
  } else {
    showNavbar(); // Tampilkan navbar saat scroll ke atas
  }

  lastScrollTop = scrollTop;
});

// Event untuk mendeteksi mouse bergerak
document.addEventListener("mousemove", function (event) {
  const cursorY = event.clientY;

  // Jika kursor mendekati bagian atas halaman
  if (cursorY < 50) {
    showNavbar(); // Tampilkan navbar
  }
});

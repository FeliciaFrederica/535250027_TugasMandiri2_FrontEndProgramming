const menuIcon = document.querySelector('#menu-icon');
const navMenu = document.querySelector('.navMenu');

// Toggle buka/tutup menu saat ikon diklik
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Mengubah ikon garis 3 jadi ikon 'X' khas Boxicons
    navMenu.classList.toggle('active');
};

// Tutup navbar otomatis saat scroll
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navMenu.classList.remove('active');
};
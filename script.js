window.addEventListener('load', function() {
    // window.scrollTo(0, 0);
});




// Script untuk menyembunyikan/memunculkan header saat scroll
let lastScrollY = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    // Jika scroll ke bawah
    if (window.scrollY > 200 && window.scrollY > lastScrollY) {
        header.classList.add('hide'); // Tambahkan class 'hide'
    } 
    // Jika scroll ke atas
    else {
        header.classList.remove('hide'); // Hapus class 'hide'
    }
    // Update posisi scroll terakhir
    lastScrollY = window.scrollY;
});








let HomeHeaderClicked = document.getElementById('div-home');

let HomeFooterClicked = document.getElementById('div-home-footer');

HomeHeaderClicked.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

HomeFooterClicked.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

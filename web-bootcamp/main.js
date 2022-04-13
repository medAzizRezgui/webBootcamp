const close_btn = document.getElementById('close-btn');
const open_btn = document.getElementById('login');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');


open_btn.addEventListener('click', () => {
    overlay.classList.add("show-modal");
})
close_btn.addEventListener('click', () => {
    overlay.classList.remove("show-modal");
})
const hamburguerOpenBtn = document.querySelector("#hamburguer-open");
const hamburguerCloseBtn = document.querySelector("#hamburguer-close");
const menuModal = document.querySelector(".menu-modal");

hamburguerOpenBtn.addEventListener("click", () => {
    hamburguerOpenBtn.classList.remove("active");
    hamburguerCloseBtn.classList.add("active");
    menuModal.classList.add("active");
});

hamburguerCloseBtn.addEventListener("click", () => {
    hamburguerCloseBtn.classList.remove("active");
    hamburguerOpenBtn.classList.add("active");
    menuModal.classList.remove("active");
})
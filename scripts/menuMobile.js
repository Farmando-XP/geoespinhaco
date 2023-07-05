const menuModal = document.querySelector(".menu-modal");
const hamburguer = document.querySelector("#menu-bar");

hamburguer.addEventListener("click", () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    menuModal.classList.toggle("active");
});
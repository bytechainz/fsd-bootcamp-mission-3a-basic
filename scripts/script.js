const toggle = document.getElementById("toggle-menu")
const div = document.getElementById("navbar-menu")

const handlerShowHide = () => {
    div.style.display = div.style.display === "none" || div.style.display === ""
    ? "block"
    : "none"
}

toggle.addEventListener("click", handlerShowHide)

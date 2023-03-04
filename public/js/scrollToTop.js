const btnScroll = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnScroll.classList.remove("hidden")
    } else {
        btnScroll.classList.add("hidden")
    }
})

btnScroll.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
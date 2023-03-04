const plus = document.getElementById("btn-plus");
const minus = document.getElementById("btn-minus");
const paragraph = document.getElementsByTagName("p")

plus.addEventListener("click", () => {
    for (let p of paragraph) {
        let currentSize = p.style.fontSize;
        const size = Number(currentSize.split("px")[0])
        size <= 30 && (p.style.fontSize = `${size + 2}px`)

    }
})
minus.addEventListener("click", () => {
    for (let p of paragraph) {
        let currentSize = p.style.fontSize;
        const size = Number(currentSize.split("px")[0]);
        size >= 16 && (p.style.fontSize = `${size - 2}px`)
    }
})


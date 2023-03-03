const plus = document.getElementById("btn-plus");
const minus = document.getElementById("btn-minus");
const paragraph = document.getElementsByTagName("p")

plus.addEventListener("click", () => {
    
    for (let p of paragraph) {
        let currentSize = p.style.fontSize;
        // paragraph.style.fontSize = 
        console.log(currentSize);
        currentSize += 
        p.style.fontSize = `${currentSize}px`
    }
})
minus.addEventListener("click", () => {
    for (let p of paragraph) {
        let currentSize = p.style.fontSize;
        // paragraph.style.fontSize = 
        console.log(currentSize);
        currentSize += 
        p.style.fontSize = `${currentSize}px`
    }
})

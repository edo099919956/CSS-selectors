let text = 'CSS - селекторы'
let printText = document.querySelector('.title')
let i = 0

let int = setInterval(() => {
    printText.textContent += text[i]
    i++
    if (text.length == i) {
        clearInterval(int)
    }
}, 60);
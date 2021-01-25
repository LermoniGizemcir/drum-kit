// key down eventini dinle
window.addEventListener("keydown", event => {
    // event.keyCode ile tuşu bir değişkene ata
    const button = event.keyCode

    const element = document.querySelectorAll(`[data-key='${button}']`);
    
    if (!element || element.length === 0) return

    //button classına playing class ı ekle
    element[0].classList.add("playing");

    //button un audio file ını çal
    element[1].currentTime = 0
    element[1].play();
});

window.addEventListener("keyup", function (event) {
    const button = event.keyCode

    const element = document.querySelectorAll(`[data-key='${button}']`);

    if (!element || element.length === 0) return

    element[0].classList.remove("playing");
})

// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
// e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi 
// (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// BONUS
// Facciamo accendi e spegni:
// - Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// - Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// - E così via...

const lampImgElm = document.querySelector("img")
const lampBtnElm = document.querySelector("button")
const lightingElm = document.querySelector("body")
const titleElm = document.querySelector("h1")
// console.log(lampBtnElm, lampImgElm)

lampBtnElm.addEventListener("click", function(){
    if (lampImgElm.src.includes("img/white_lamp.png")) {
        lampImgElm.src = "img/yellow_lamp.png";
        lampImgElm.alt = "lampadina accesa"
        lampBtnElm.innerHTML = ("Spegni")
        lampBtnElm.classList.add("btn-danger")
        lightingElm.classList.add("bg-white")
        titleElm.classList.add("text-black")
        titleElm.classList.remove("text-white")
    } else {
        lampImgElm.src = "img/white_lamp.png";
        lampImgElm.alt = "lampadina spenta"
        lampBtnElm.innerHTML = ("Accendi")
        lampBtnElm.classList.remove("btn-danger")
        lightingElm.classList.remove("bg-white")
        titleElm.classList.remove("text-black")
        titleElm.classList.add("text-white")
    }
    
})
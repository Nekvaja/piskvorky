import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = 'circle';

const buttonsElement = document.querySelectorAll("button");
const naTahuElement = document.querySelector(".hrac__znak");
const btnRestartElement = document.querySelector(".btn--restart")

const tah = (event) => {
    
    if (currentPlayer === "circle") {
        event.target.classList.add("board__field--circle")
        event.target.disabled = true
        currentPlayer = "cross"
        naTahuElement.classList.remove("hrac__znak--circle")
        naTahuElement.classList.add("hrac__znak--cross")
    } else {
        event.target.classList.add("board__field--cross")
        event.target.disabled = true
        currentPlayer = "circle"
        naTahuElement.classList.remove("hrac__znak--cross")
        naTahuElement.classList.add("hrac__znak--circle")
    }

 // Úkol 4 - vítěz ---------------

const herniPole = Array.from(buttonsElement, (button) => {
    if (button.classList.contains("board__field--circle")) {
        return 'o';
    } else if (button.classList.contains("board__field--cross")) {
        return 'x';
    } else {
        return '_';
    }

});

console.log(herniPole)

const vitez = findWinner(herniPole);


if (vitez === 'o' || vitez === 'x' || vitez === 'tie') {
    const vyhlaseniViteze = () => {
        vitez === 'tie' 
        ? alert(`Hra skončila nerozhodně.`)
        : alert(`Vyhrál hráč se symbolem ${vitez}`)
        location.reload();
    };

       
    setTimeout(vyhlaseniViteze, 500);
}
}

// výše úkol 4 ---------------

buttonsElement.forEach((tlacitko) => {
tlacitko.addEventListener("click", tah)
})

const zacitZnovu = (event) => {
    const potvrzeni = confirm("Opravdu chceš začít znovu?")
    if (!potvrzeni) {
        event.preventDefault();
    }
}


btnRestartElement.addEventListener("click", zacitZnovu);

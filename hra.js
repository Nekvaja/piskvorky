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
}

buttonsElement.forEach((tlacitko) => {
tlacitko.addEventListener("click", tah)
})

const zacitZnovu = (event) => {
    const potvrzeni = confirm("Opravdu chceš začít znovu?")
    if (!potvrzeni) {
        event.preventDefault();
    }
}


btnRestartElement.addEventListener("click", zacitZnovu)




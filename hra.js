let currentPlayer = 'circle';

const buttonsElement = document.querySelectorAll("button");

const tah = (event) => {
    

    if (currentPlayer === "circle") {
        event.target.classList.add("board__field--circle")
        currentPlayer = "cross"
    } else {
        event.target.classList.add("board__field--cross")
        currentPlayer = "circle"
    }


    console.log(currentPlayer)
}

buttonsElement.forEach((tlacitko) => {
tlacitko.addEventListener("click", tah)
})


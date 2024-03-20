
// Select the elements
let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turnO = true; // playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
];

// Reset button function
const resetGame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
    // Clear the text content of each button
    btns.forEach(button => {
        button.innerText = "";
    });
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) { // playerO
            btn.innerText = "O";
            turnO = false;
        } else { // playerX
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});

const disableBtns = () => {
    btns.forEach(btn => {
        btn.disabled = true;
    });
};

const enableBtns = () => {
    btns.forEach(btn => {
        btn.disabled = false;
    });
};

// Show the result of the winner
const showWinner = (winner) => {
    message.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const checkWinner = () => {
    for (let patterns of winPatterns) {
        let pos1Val = btns[patterns[0]].innerText;
        let pos2Val = btns[patterns[1]].innerText;
        let pos3Val = btns[patterns[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

// Event listeners for new game button and reset button
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

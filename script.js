let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let para = document.querySelector("#win");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

]
btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (turnO) {
            btn.innerText = "O";
            turnO = false;
        } else {
            btn.innerText = "X";
            turnO = true;

        }
        btn.disabled = true;
        checkwinner();
    });
});

const reset = () => {
    turnO = true;
    anabledbtn();
    msg.classList.add("hide");

}

const anabledbtn = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}
const disablebtn = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
}

const showWinner = (winner) => {
    win.innerText = `Congratulations,Winner is ${winner}`;
    msg.classList.remove("hide");
    disablebtn();
};
const checkwinner = () => {
    for (let pattern of winPatterns) {
        let val1 = btns[pattern[0]].innerText;
        let val2 = btns[pattern[1]].innerText;
        let val3 = btns[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                showWinner(val1);
            }

        }
    }
};
newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);

//your JS code here. If required.
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled =true;
    })
});

const checkWinner = () => {
    for( let pattern of winPatterns){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner");
            }
        }
    }
};
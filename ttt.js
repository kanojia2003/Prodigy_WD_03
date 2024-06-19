let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let container = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let newButton = document.querySelector("#new-btn");

const winning_condition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let first_turn = true;

const resetGame = () =>{
  first_turn = true;
  restartGame();
  container.classList.add("hide");

};

boxes.forEach(box => {
    box.addEventListener("click",() =>{
        if(first_turn){
            box.innerText = "X";
            first_turn = false;
        }
        else{
            box.innerText ="0";
            first_turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

  const restartGame = ()=>
    {
       for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }};
  
  const terminateGame = () => {
      for(let box of boxes){
        box.disabled = true;
      }
  };
 const showWinner = (winner) => {
  message.innerText =` Congratulation,  Winner is ${winner}`;
    container.classList.remove("hide");
    terminateGame();
 }

const checkWinner = () => {
  for (let pattern of winning_condition) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner",pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newButton.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
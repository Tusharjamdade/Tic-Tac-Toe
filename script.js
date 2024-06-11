let btns = document.querySelectorAll(".btn");
let playero = true;
let playerO = document.querySelector("#playerO");
let playerX = document.querySelector("#playerX");
let reset = document.querySelector("#reset")
let newGame = document.querySelector("#newGame")
let playerOScore = 0;
let playerXScore = 0;
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let gameEnd = (isEnd)=>{
    if(isEnd){
        btns.forEach((btn)=>{
            btn.disabled = true;
        })
    }else{
        btns.forEach((btn)=>{
            btn.disabled = false;
            btn.innerText = "";
        })
    }
    
}
let checkWinner = () => {
  for (let pattern of winPattern) {
    let pattern0 = btns[pattern[0]].innerText;
    let pattern1 = btns[pattern[1]].innerText;
    let pattern2 = btns[pattern[2]].innerText;

    if (pattern0 != "" && pattern1 != "" && pattern2 != "") {
        if(pattern0 === pattern1  && pattern1 === pattern2){
            console.log("Winner ", pattern0);
            if(pattern0 == "O"){
                playerOScore++;
                playerO.innerText = "Player O = " + playerOScore; 
                gameEnd(true);
            }else if(pattern0 == "X"){
                playerXScore++;
                playerX.innerText = "Player X = " + playerXScore; 
                gameEnd(true);
            }
        }
    }
  }
};
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (playero) {
      btn.innerText = "O";
      playero = false;
    } else {
      playero = true;
      btn.innerText = "X";
    }
    btn.disabled = true;
    checkWinner();
  });
});
reset.addEventListener("click",()=>{
    gameEnd(false);
})
newGame.addEventListener("click",()=>{
    playerO.innerText = "Player O = 0";
    playerX.innerText = "Player X = 0"
    playerXScore = 0;
    playerOScore = 0;
    gameEnd(false);
})




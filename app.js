let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText="Game draw! Play Again";
    msg.style.backgroundColor="#44344F";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore ;       
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore ; 
        msg.innerText=`YOU LOST! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    //generat  computer choice
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        //draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin=compChoice==="paper"? false : true;
        }
        else if(userChoice === "paper") {
            //rock, scissors
            userWin=compChoice==="scissors"? false : true;
        }
        else {
            //rock, paper
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}; 

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});
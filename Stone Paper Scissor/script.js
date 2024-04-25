let userScore=0;
let compScore=0;
let rck=document.querySelector("#rock");
let pper=document.querySelector("#paper");
let sissors=document.querySelector("#scissors");
let msg=document.querySelector("#innermsg");
let comps=document.querySelector("#compScore");
let users=document.querySelector("#userScore");

let gencompChoice=()=>{
    let option=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return option[idx];
}

let userChoice;
rck.addEventListener("click",()=>
{
    userChoice="rock";
    playGame(userChoice);
});
pper.addEventListener("click",()=>
{
    userChoice="paper";
    playGame(userChoice);
});
sissors.addEventListener("click",()=>
{
    userChoice="scissors";
    playGame(userChoice);
});

let draw=()=>{
    msg.innerText="Match Draw, play again";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}
let playGame=(userChoice)=>{
    let compChoice=gencompChoice();
    if(compChoice===userChoice){
        draw();
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?true:false;
            
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);

    }
    console.log(`user choose ${userChoice}, computer choose ${compChoice}`);
}

let showWinner=(userWin)=>
    {
        if(userWin){
            userScore++;
            msg.style.backgroundColor="green";
            msg.style.color="white";
            msg.innerText=`You won`
            users.innerText=userScore;

        }else{
            compScore++;
            msg.style.backgroundColor="red";
            msg.style.color="white";
            msg.innerText=`Computer won`;
            comps.innerText=compScore;

        }
    }


    

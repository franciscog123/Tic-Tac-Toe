"use strict";

let playerOne;
let playerTwo;

function submitNameInputs()
{
    if(Settings.getGameMode()=="single")
    {
        let nameOneInput=document.querySelector("[name='singlePlayerOneName']").value;
        playerOne=Player(nameOneInput,'X');
        Display.showBoard();
    }
    else if(Settings.getGameMode()=="multi")
    {
        let nameOneInput=document.querySelector("[name='multiPlayerOneName']").value;
        playerOne=Player(nameOneInput,'X');
        let nameTwoInput=document.querySelector("[name='multiPlayerTwoName']").value;
        playerTwo=Player(nameTwoInput,'X');
        Display.showBoard();
    }
}
"use strict";

let playerOne;
let playerTwo;

function startGame() 
{
    playerOne=Player(Settings.getPlayerOneName(),"X");
    playerTwo=Player(Settings.getPlayerTwoName(),"O");
    GameBoard.setWhosTurnItIs("p1");
    Display.addBoardListeners();
    Display.announce.textContent=`It's ${playerOne.getName()}'s turn`;
}
"use strict";

Display.addBoardListeners();

let playerOne;
let playerTwo;

function startGame() 
{
    playerOne=Player(Settings.getPlayerOneName(),"X");
    playerTwo=Player(Settings.getPlayerTwoName(),"O");
}
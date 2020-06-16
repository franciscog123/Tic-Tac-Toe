"use strict";

const Display = (() => {
    
    let announce=document.querySelector(".announcement");

    const showBoard = () => {
        document.querySelector(".nameInputScreenOneP").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenTwoP").setAttribute("style","display:none;");
        document.querySelector(".boardScreen").setAttribute("style","");
    }

    /*const renderArrayToBoard = () => {
        for(let i=0; i<GameBoard.boardValuesArray.length; i++)
        {
            GameBoard.divElementArray[i].textContent=GameBoard.boardValuesArray[i];
        }
    }*/

    const loadSinglePlayerPrompts = () => {
        document.querySelector(".startScreen").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenOneP").setAttribute("style","");
        Settings.setGameMode("single");
    }

    const loadTwoPlayerPrompts = () => {
        document.querySelector(".startScreen").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenTwoP").setAttribute("style","display:;");
        Settings.setGameMode("multi");
    }

    const addBoardListeners = () => {

        GameBoard.divElementArray.forEach((cell, index) => cell.addEventListener('click', ()=>{
            
            if(GameBoard.getWhosTurnItIs()=="p1"  && cell.textContent=="" && !GameBoard.getIsGameOver())
            {
                cell.textContent="X";
                GameBoard.boardValuesArray[index]="X";
                GameBoard.setWhosTurnItIs("p2");
                Display.announce.textContent=`It's ${playerTwo.getName()}'s turn`;
                GameBoard.evaluateBoard();
            }
            else if (GameBoard.getWhosTurnItIs()=="p2" && cell.textContent=="" && !GameBoard.getIsGameOver())
            {
                cell.textContent="O";
                GameBoard.boardValuesArray[index]="O";
                GameBoard.setWhosTurnItIs("p1");
                Display.announce.textContent=`It's ${playerOne.getName()}'s turn`;
                GameBoard.evaluateBoard();
            }

        }));
    }

    return {
        showBoard, announce, loadSinglePlayerPrompts, loadTwoPlayerPrompts, addBoardListeners
    };

})();
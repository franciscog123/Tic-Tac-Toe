"use strict";

const Display = (() => {
    
    const showBoard = () => {
        document.querySelector(".nameInputScreenOneP").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenTwoP").setAttribute("style","display:none;");
        document.querySelector(".boardContainer").classList.remove("hidden");
    }

    const renderArrayToBoard = () => {
        for(let i=0; i<GameBoard.boardValuesArray.length; i++)
        {
            GameBoard.divElementArray[i].textContent=GameBoard.boardValuesArray[i];
        }
    }

    const loadSinglePlayerPrompts = () => {
        document.querySelector(".startScreen").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenOneP").setAttribute("style","display:;");
        Settings.setGameMode("single");
    }

    const loadTwoPlayerPrompts = () => {
        document.querySelector(".startScreen").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenTwoP").setAttribute("style","display:;");
        Settings.setGameMode("multi");
    }

    const addBoardListeners = () => {
        console.log("adding listeners");
        GameBoard.divElementArray.forEach(cell => cell.addEventListener('click', ()=>{
            console.log(cell);
            cell.textContent="x";
            /*if(GameBoard.getWhosTurn()=="")
            {

            }*/
        }));
    }

    return {
        showBoard, renderArrayToBoard, loadSinglePlayerPrompts, loadTwoPlayerPrompts, addBoardListeners
    };

})();
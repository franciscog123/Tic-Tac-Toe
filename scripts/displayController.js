"use strict";

const Display = (() => {
    
    let announce=document.querySelector(".announcement");
    let _newGameBtn=document.querySelector("#newGameBtn");
    let _newGameBtnContainer=document.querySelector(".newGameBtnContainer");
    let board=document.querySelector(".boardContainer");

    const showNewGameBtn = () => {
         _newGameBtnContainer.setAttribute("style","");
    }

    const showBoard = () => {
        document.querySelector(".nameInputScreenOneP").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenTwoP").setAttribute("style","display:none;");
        document.querySelector(".boardScreen").setAttribute("style","");
    }

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

    //adds event listeners to each board cell that control majority of the events fired after clicking the cell
    const addBoardListeners = () => {
        GameBoard.divElementArray.forEach((cell, index) => cell.addEventListener('click', ()=>
        {
            if(GameBoard.getWhosTurnItIs()=="p1"  && cell.textContent=="" && !GameBoard.getIsGameOver() && Settings.getGameMode()=="multi")
            {
                cell.textContent="X";
                GameBoard.boardValuesArray[index]="X";
                GameBoard.setWhosTurnItIs("p2");
                Display.announce.textContent=`It's ${playerTwo.getName()}'s turn`;
                GameBoard.evaluateBoard();
            }
            else if(GameBoard.getWhosTurnItIs()=="p1" && cell.textContent=="" && !GameBoard.getIsGameOver() && Settings.getGameMode()=="single")
            {
                cell.textContent="X";
                GameBoard.boardValuesArray[index]="X";
                GameBoard.evaluateBoard();
                if(!GameBoard.getIsGameOver())
                {
                    GameBoard.makeRandomMove();
                    GameBoard.evaluateBoard();
                }               
            }
            else if (GameBoard.getWhosTurnItIs()=="p2" && cell.textContent=="" && !GameBoard.getIsGameOver() && Settings.getGameMode()=="multi")
            {
                cell.textContent="O";
                GameBoard.boardValuesArray[index]="O";
                GameBoard.setWhosTurnItIs("p1");
                Display.announce.textContent=`It's ${playerOne.getName()}'s turn`;
                GameBoard.evaluateBoard();
            }
        }));
    }

    const makeBoardUnclickable = () => {
        board.style.pointerEvents="none";
    }

    const clearBoard = () => {
        GameBoard.setIsGameOver(false);
        board.style.pointerEvents=""; //make board clickable again
        
        //clear board
        GameBoard.divElementArray.forEach((element, index) => {
            element.textContent="";
            GameBoard.boardValuesArray[index]="";
        })

        _newGameBtnContainer.setAttribute("style","display:none;");
        announce.textContent=`It's ${playerOne.getName()}'s turn`;
        GameBoard.setWhosTurnItIs("p1");
    }

    _newGameBtn.addEventListener("click",clearBoard);

    return {
        showBoard, announce, loadSinglePlayerPrompts, loadTwoPlayerPrompts, 
        addBoardListeners, clearBoard, showNewGameBtn, makeBoardUnclickable
    };

})();
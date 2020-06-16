"use strict";

const GameBoard = (function () {
    
    let boardValuesArray = ['','','', '', '', '', '', '', ''];
    let divElementArray = Array.from(document.querySelectorAll(".cells"));
    let _isGameOver; //boolean
    let _whosTurnItIs;
    let isVsComputer;

    //scores? or players keep track?

    const setWhosTurnItIs = (player) => {
        _whosTurnItIs=player;
    }

    const getWhosTurnItIs = () => {return _whosTurnItIs;}

    const setIsGameOver = (val) => {
        _isGameOver=val;
    }

    const getIsGameOver = () => {return _isGameOver}

    const evaluateBoard = () => {
        
        if(!_isSpaceLeft())
        {
            Display.announce.textContent="Game Over!";
        }
        //convert array of board values to a 2d array to make evaluating easier
        /*let twoDArray=[];
        while(boardValuesArray.length)
            twoDArray.push(boardValuesArray.splice(0,3));

        console.log(twoDArray);*/
    }

    //returns true if there is still any open spaces remaining on board
    const _isSpaceLeft = () => {
        let isSpace=false;
        boardValuesArray.forEach(element => {
            if(element == "")
                isSpace=true;
        });
        return isSpace;
    }

    return {
        boardValuesArray, divElementArray, getWhosTurnItIs, setWhosTurnItIs, getIsGameOver, setIsGameOver, evaluateBoard
    };

})();
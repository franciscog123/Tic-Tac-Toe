"use strict";

const GameBoard = (function () {
    
    let boardValuesArray = ['x','o','x', 'o', 'x', 'o', 'x', 'o', 'x'];
    let divElementArray = Array.from(document.querySelectorAll(".cells"));
    let isGameOver; //boolean
    let _whosTurnIsIt;

    //scores? or players keep track?

    const setWhosTurn = (player) => {
        _whosTurnIsIt=player;
    }

    const getWhosTurn = () => {return _whosTurnIsIt;}

    return {
        boardValuesArray, divElementArray, getWhosTurn, setWhosTurn
    };


})();
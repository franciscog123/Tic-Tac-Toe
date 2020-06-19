"use strict";

const Settings = (function() {

    let _gameMode="";
    let _playerOneName;
    let _playerTwoName;

    const setGameMode = (mode) => {
        _gameMode=mode;
    }

    const getGameMode = () => {return _gameMode;}

    const _setPlayerOneName = (name) => {
        _playerOneName=name;
    }

    const getPlayerOneName = () => {return _playerOneName;}

    const _setPlayerTwoName = (name) => {
        _playerTwoName=name;
    }

    const getPlayerTwoName = () => {return _playerTwoName;}

    //passes values from the screen where player(s) input their names and starts the game 
    const submitNameInputs = () =>
    {
        if(getGameMode()=="single")
        {
            _setPlayerOneName(document.querySelector("[name='singlePlayerOneName']").value);
            _setPlayerTwoName("CPU");
            Display.showBoard();
            startGame();
        }
        else if(getGameMode()=="multi")
        {
            _setPlayerOneName(document.querySelector("[name='multiPlayerOneName']").value);
            _setPlayerTwoName(document.querySelector("[name='multiPlayerTwoName']").value);
            Display.showBoard();
            startGame();
        }
    }

    return {
         getGameMode, submitNameInputs, setGameMode, getPlayerOneName, getPlayerTwoName
    };

})();

const Settings = (function() {

    let _gameMode="";

    const _setGameMode = (mode) => {
        _gameMode=mode;
    }

    const getGameMode = () => {return _gameMode;}

    const loadSinglePlayerPrompts = () => {
        document.querySelector(".startScreen").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenOneP").setAttribute("style","display:;");
        _setGameMode("single");
    }

    const loadTwoPlayerPrompts = () => {
        document.querySelector(".startScreen").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenTwoP").setAttribute("style","display:;");
        _setGameMode("multi");
    }

    const loadGame = () => {
        console.log("load game");
    }

    return {
        getGameMode, loadSinglePlayerPrompts, loadTwoPlayerPrompts, loadGame
    };

})();

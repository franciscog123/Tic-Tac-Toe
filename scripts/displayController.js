"use strict";

const Display = (() => {
    
    const showBoard = () => {
        document.querySelector(".nameInputScreenOneP").setAttribute("style","display:none;");
        document.querySelector(".nameInputScreenTwoP").setAttribute("style","display:none;");
        document.querySelector(".boardContainer").classList.remove("hidden");
    }

    return {
        showBoard
    };
})();
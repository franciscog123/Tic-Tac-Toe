"use strict";

function changeScreen()
{
    document.querySelector(".startScreen").setAttribute("style","display:none;");
    document.querySelector(".boardContainer").classList.remove("hidden");
}
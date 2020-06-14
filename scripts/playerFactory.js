"use strict";

const Player = (name, token) => 
{
    const getName = () => name;
    const getToken = () => token;

    return{
        getName, getToken
    };
}
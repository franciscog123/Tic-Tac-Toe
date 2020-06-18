"use strict";

const GameBoard = (function () {
    
    let boardValuesArray = ['','','', '', '', '', '', '', ''];
    let divElementArray = Array.from(document.querySelectorAll(".cells"));
    let _isGameOver; 
    let _whosTurnItIs;
    let isVsComputer;
    let isNewGame;
    let winningToken;

    const setWhosTurnItIs = (player) => {
        _whosTurnItIs=player;
    }

    const getWhosTurnItIs = () => {return _whosTurnItIs;}

    const setIsGameOver = (val) => {
        _isGameOver=val;
    }

    const getIsGameOver = () => {return _isGameOver}

    const setWinningToken = (token) =>{
        winningToken=token;
    }

    const getWinningToken = () => {return winningToken;}

    const setIsNewGame = (gameStatus) => {
        isNewGame=gameStatus;
    }

    const getIsNewGame = () => {return isNewGame;}

    const evaluateBoard = () => {

        if(!_isSpaceLeft())
        {
            Display.announce.textContent=`Game Over! It's a draw!`;
            Display.showNewGameBtn();
            setIsNewGame(true);
        }

        //convert array of board values to a 2d array to make evaluating easier
        let twoDArray=arrayToTwoDArray(boardValuesArray);

        if(_rowEval(twoDArray)==true)
        {
            Display.makeBoardUnclickable();
            if(playerOne.getToken()==getWinningToken())
            {
                Display.announce.textContent=`${playerOne.getName()} wins!`;
            }
            else
            {
                Display.announce.textContent=`${playerTwo.getName()} wins!`;
            }
            Display.showNewGameBtn();
            setIsNewGame(true);
        }

        if(_colEval(twoDArray)==true)
        {
            Display.makeBoardUnclickable();
            if(playerOne.getToken()==getWinningToken())
            {
                Display.announce.textContent=`${playerOne.getName()} wins!`;
            }
            else
            {
                Display.announce.textContent=`${playerTwo.getName()} wins!`;
            }
            setIsNewGame(true);
            Display.showNewGameBtn();
        }

        if(_diagEval(twoDArray)==true)
        {
            Display.makeBoardUnclickable();
            if(playerOne.getToken()==getWinningToken())
            {
                Display.announce.textContent=`${playerOne.getName()} wins!`;
            }
            else
            {
                Display.announce.textContent=`${playerTwo.getName()} wins!`;
            }
            setIsNewGame(true);
            Display.showNewGameBtn();
        }
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

    //returns a two dimensinal array copy of a normal array
    const arrayToTwoDArray = (myArray) => {
        var twoDArray = [], i, k;

        for (i = 0, k = -1; i < myArray.length; i++) {
            if (i % 3 === 0) {
                k++;
                twoDArray[k] = [];
            }
            twoDArray[k].push(myArray[i]);
        }
        return twoDArray;
    }

    //returns true if a row is a winning row and keeps track of the winning token(X or O)
    const _rowEval = (twoDRay) => {
        let isWinningRow=true;
        for(let index=0; index <twoDRay.length; index++)
        {
            isWinningRow=true;
            for(let i=0,k=1; k<twoDRay[index].length; k++)
            {
                if(twoDRay[index][i]=="" || twoDRay[index][i]!=twoDRay[index][k])
                    isWinningRow=false;
            }
            if(isWinningRow==true)
            {
                setWinningToken(twoDRay[index][0]);
                break;
            }
        }
        return isWinningRow;
    }

    //returns true if there is a winning column
    const _colEval = (twoDRay) => {
        let isWinningColumn=true;
        for(let index=0; index <twoDRay.length; index++)
        {
            isWinningColumn=true;
            for(let i=0,k=1; k<twoDRay[index].length; k++)
            {
                if(twoDRay[i][index]=="" || twoDRay[i][index]!=twoDRay[k][index])
                    isWinningColumn=false;
            }
            if(isWinningColumn==true)
            {
                setWinningToken(twoDRay[0][index]);
                break;
            }
        }
        return isWinningColumn;
    }

    //returns true if either diagonal is a winning result
    const _diagEval = (twoDRay) => { 
        
        let isWinningDiag=true;
        let isWinningDiagTwo=true;

        let bottomRow=twoDRay.length-1;
        for(let i=0,k=1, x=twoDRay.length-2, y=1;/*y=twoDRay.length-2*/ y<twoDRay.length,x<=0,k<twoDRay.length; k++,x--,y++)
        {
            //checks top left diagonal down to bottom right
            if(twoDRay[i][i]=="" || twoDRay[i][i]!=twoDRay[k][k])
                    isWinningDiag=false;

            //check bottomLeft corner first then goes up to top right
            if(twoDRay[bottomRow][0]==""||twoDRay[bottomRow][0]!=twoDRay[x][y])
                isWinningDiagTwo=false;
        }
        setWinningToken(twoDRay[1][1]);
        return (isWinningDiag||isWinningDiagTwo);
    }

    return {
        getWinningToken, boardValuesArray, divElementArray, 
        getWhosTurnItIs, setWhosTurnItIs, getIsGameOver, setIsGameOver, evaluateBoard,
        getIsNewGame, setIsNewGame
    };

})();
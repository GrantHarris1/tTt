//init
#### create objects, functions, global vars
Model {
    constructor()
}
* setController(c)
* setState(s)
* getState()
onSetState()
<br> 
Constant data(win conditions,), Stateful Logic (placement of X & O), Array of object of moves, Number of turns( checking to see who wins, whos turn it is), Game ended, Tie?, Game restarted.
___
View{
    constructor()
* setModel(model)
* render()
* getState
}
<br>
generateHTML() (could be global or inherited), createGrid(), createBoard, showWinOrTie(), showCurrentPlayer(), showScore().
___
Controller{
    constructor()
* init()
* areaClickedY() 
* areaClicked X()
* areaView()
}
<br>
init(), restart(),checkWin(), abstract data
___
<!-- creating new game board -->
 App { 
    constructor()
* init
}

updateClickArray()
     // if checkTieOrWinner() true
        // showWinOrTie()
    // else game not ended
        // showCurrentPlayer()
​updateGrid()
updateWinner()
## Start
init()
App{
    constructor
}
gmae board is presented
X is first, O is second
usr clicks on one of the squares
3 in a row sets win condition off.

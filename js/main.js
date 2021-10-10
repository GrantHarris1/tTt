
var a;












class Model {
    constructor() {
        this.controller = null;
        this.ticTacToeBoard = []
        this.clicks = 0
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [2, 5, 8],
            [1, 4, 7],
            [0, 3, 6]
        ]

    }
    setController(Controller) {
        this.controller = Controller;
    }
    setState(s) {

    }
    onsetState() {

    }
    init() {
        this.clicked = 0
        this.ticTacToeBoard = []
        // this.View. add button and event listener use .bind
    }
};

class View {
    constructor() {
        this.model = null
        this.restartButton = null;

    }
    setModel(model) {
        this.model = model
    }
    render() {
        let app = document.getElementById("app");
        app.innerText = '' // deleting everything in the app to start fresh -> this can be done in the init method

        this.generateHTML({ type: 'div', classes: "h1 text-center text-secondary", parent: app, text: 'oTICx oTACx oTOEx' });

        let container = this.generateHTML({ type: 'div', classes: 'container text-center', parent: app })

        let row = this.generateHTML({ type: 'div', classes: 'row md-4', parent: container, text: '' })

        let circleTurn







        for (let index = 0; index < 9; index++) {
            let element = this.generateHTML({
                type: 'div',
                classes: 'col-4 border border-secondary  rounded-pill bg-dark text-light fs-1 p-5 bg-gradient ',
                parent: row,
                text: '',
                clickFunction: this.model.controller.handleClick.bind(this.model.controller, index)
            })
            // make a new smart object that store the elemnet along with data
            this.model.ticTacToeBoard.push(element)
        }
        this.restartButton = this.generateHTML({
            type: 'button',
            classes: 'col-4 btn-outline-info rounded-pill', parent: container, text: 'Restart'
        })
        this.restartButton.addEventListener('click', this.model.controller.restart.bind(this.model.controller))



    }
    generateHTML(obj) {
        let element = document.createElement(obj.type);
        element.className = obj.classes;
        if (obj.text) {
            element.innerText = obj.text;
        }
        if (obj.href) {
            if (obj.href.length > 0) {
                element.href = href;
            }
        }
        if (obj.parent) {
            obj.parent.append(element)
        }
        if (obj.index) {
            element.index = index
        }

        // if there is a click function, add onclick
        if (obj.clickFunction) {
            element.addEventListener('click', obj.clickFunction)

        }



        return element
    }

}


class Controller {
    constructor(model, view) {
        this.view = view;
        this.model = model;

    }

    init() {
        // this.view.restartButton.addEventListener('click', this.init.bind(this));

    }




    updateView() {
        this.view.render();
    };




    handleClick(index) {
        this.model.clicks++
        console.log("clicked on:", index);
        console.log("current clicks:", this.model.clicks);
        console.log("specific tile on board in model", this.model.ticTacToeBoard[index]);



        if (this.model.clicks % 2 == 1) {

            this.model.ticTacToeBoard[index].innerText = '🧛',
                alert("Now its Os Turn");
               

        }
        else {

            this.model.ticTacToeBoard[index].innerText = '🧟‍♀️',
                alert('Now its X Turn')

        }
        if (this.model.clicks == 9) {
            alert("Game over")
        }

//         // solve win conditions without a win condition array
// ​
// //  no move:  0
// //  x moved:  1
// //  o moved: -1
// ​
// let singleArrayExample1 = [ // x wins
//     0, 0, 1,
//     0, -1, 1,
//     -1, 0, 1,
// ]
// let singleArrayExample2 = [ // o wins
//     -1, 0, 1,
//     0, -1, 1,
//     1, 0, -1,
// ]
// let singleArrayExample3 = [ // tie
//     -1, 1, -1,
//     -1, -1, 1,
//     1, -1, 1,
// ]
// ​
// function method1(singleArray /* single array of 9 items */) {
// ​
//     // solve diagonals first (less computation power)
//     let diag1Sum = singleArray[0] + singleArray[4] + singleArray[8]
//     let diag2Sum = singleArray[2] + singleArray[4] + singleArray[6]
//     // console.log({ diag1Sum, diag2Sum })
// ​
//     // return as soon as a winner is found, otherwise continue
//     if (diag1Sum == 3 || diag2Sum == 3) {
//         return `x is the winner`
//     }
//     if (diag1Sum == -3 || diag2Sum == -3) {
//         return `o is the winner`
//     }
// ​
//     let checkTie = 0;
// ​
//     // solve row and columns with double for loop
//     for (let i = 0; i < 3; i++) {
//         let rowSum = 0
//         let colSum = 0
//         for (let j = 0; j < 3; j++) {
//             let rowIndex = i * 3 + j
//             let colIndex = j * 3 + i
//             console.log({ rowIndex, colIndex })
// ​
//             if (singleArray[rowIndex] != 0) {
//                 checkTie++
//             }
// ​
//             rowSum += singleArray[rowIndex]
//             colSum += singleArray[colIndex]
//         }
//         if (rowSum == 3 || colSum == 3) {
//             return `x is the winner`
//         }
//         if (rowSum == -3 || colSum == -3) {
//             return `o is the winner`
//         }
//         console.log({ rowSum, colSum })
//     }
//     if (checkTie > 8) {
//         return 'tie'
//     } else {
//         return 'no one won, keep playing'
//     }
// }

        // if (this.model.clicks >= 5) {
        //     positiionToCheck = winConditions[j];
        //     currentValue = '';
        //     if (positiionToCheck[j] = 'xxx' || 'ooo') {
        //         this.model.ticTacToeBoard[0];
        //     }

        // }
        // this.clickFunction.addEventListener('click', this.innerText.class ='div', text: x ,bind(this));

        

    }
    restart() {
        this.model.init();
        this.init();
        this.view.render();
    }
}


class Game {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.controller = new Controller(this.model, this.view);
    }

    init() {
        this.view.setModel(this.model);
        this.model.setController(this.controller);
        console.log("starting the app");
        this.model.init();
        this.controller.init();
        this.view.render();

    }
}




function init() {
    let a = new Game();
    a.init()
    circleTurn = false
    console.log(a);
    let state = 0;
}



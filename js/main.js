const x_turn = 'x'
const o_turn = 'o'
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
        





        // let col = this.generateHTML({ type: 'div', classes: 'col-4', parent: row })

        // let h1 = this.generateHTML({ type: 'div', classes: 'h1', parent: col, text: '' })


        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '1', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 1) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '2', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 2) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '3', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 3) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '4', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 4) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '5', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 5) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '6', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 6) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '7', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 7) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '8', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 8) });
        // this.generateHTML({ type: 'div', classes: 'col-4 border border-danger', parent: row, text: '9', clickFunction: this.model.controller.handleClick.bind(this.model.controller, 9) });

        // let turn = this.generateHTML({ type: 'div', classes: 'h3', parent: app, text: 'x' })

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


        //    let restartButton = document.createElement("button");
        // restartButton.innerHTML = "Restart";
        // document.body.appendChild(restartButton);
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
    // checkTurn() {
    //     if ( this.model.clicks % 2 == 0) {
    //         this.generateHTML({ type: 'div', classes: "h2 text-center text-secondary", parent: app, text: 'Now Its Os go!' });

    //     }
    //     else {
    //         // turn = playerO
    //     }

    // }



    updateView() {
        this.view.render();
    };




    handleClick(index) {
        this.model.clicks++
        console.log("clicked on:", index);
        console.log("current clicks:", this.model.clicks);
        console.log("specific tile on board in model", this.model.ticTacToeBoard[index]);



        if (this.model.clicks % 2 == 0) {

            this.model.ticTacToeBoard[index].innerText = 'x',
                alert("Now its Os Turn");

        }
        else {
            
            this.model.ticTacToeBoard[index].innerText = 'o',
            alert('Now its X Turn')

        }
        if (this.model.clicks == 9){
            alert("Game over")
        }



        if (this.model.clicks >= 5) {
            positiionToCheck = winConditions[i];
            currentValue = '';
            if(positiionToCheck[j] = 'xxx' || 'ooo' ){
                this.model.ticTacToeBoard[0];
            }
            
        }
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



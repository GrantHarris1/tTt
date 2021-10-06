
const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
]









class Model {
    constructor() {
        this.controller = null;

    }
    setController(c) {
        this.controller = c;
    }
    setState(s) {

    }
    onsetState() {

    }
    init() {

    }
};

class View {
    constructor() {
        this.model = null


    }
    setModel(model) {
        this.model = model
    }
    render() {
        let app = document.getElementById("app");

        this.generateHTML({ type: 'div', classes: "h1", parent: app, text: 'TIC TAC TOE' });

        let container = this.generateHTML({ type: 'div', classes: 'container', parent: app })

        let row = this.generateHTML({ type: 'div', classes: 'row', parent: container, text: '' })

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
        for(let index = 1; index < 10; index++){
            let element = this.generateHTML({type: 'div', classes: 'col-4 border border-danger', parent: row, text:'x', clickFunction:this.model.controller.handleClick.bind(this.model.controller, index )})
        }
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
        if(obj.index){
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

    }
    checkTurn() {
        if (this.checkTurn % 2 == 0) {
            turn = playerX
        }
        else {
            turn = playerO
        }
    }
    handleClick(num) {
        console.log("clicked on:", num);
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
        this.view.render();
        this.controller.init();

    }
}




function init() {
    let a = new Game();
    a.init()
    console.log(a);
}


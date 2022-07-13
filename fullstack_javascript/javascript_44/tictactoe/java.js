let game_board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

let game = (function () {
    'use strict';
    let column_count = 0
    function make_row() {
        let div = document.createElement('div')
        div.className = "row"
        for (let i = 0; i < 3; i++) {
            let divx = document.createElement('div')
            divx.className = "col border border-warning"
            divx.style = "padding-top: 50px;"
            divx.id = "column" + column_count.toString()
            column_count++
            div.appendChild(divx)
        }
        let container = document.getElementById("container")
        container.appendChild(div)
    }

    function make_board() {
        for (let i = 0; i < 3; i++) {
            make_row()
        }
    }

    return {
        make_board: make_board,
        make_row: make_row
    }
})();

let game_control = (function () {
    function player(name, wins) {
        this.name = name
        this.wins = wins
        this.points = 0
    }
    function who_won() {
    }
    function getDIVclicked(e) {
        e.target.textContent = "x"
    }
    function initiate_game() {
        game.make_board()
        let divs = document.querySelectorAll('div')
        divs.forEach(
            div => { div.addEventListener('click', getDIVclicked) }
        );
        const jugador = new player("yulian", 0)
        const pc = new player("computer", 0)
        jugador_turn = true
    }

    return {
        initiate_game: initiate_game,
    }
})();

game_control.initiate_game()
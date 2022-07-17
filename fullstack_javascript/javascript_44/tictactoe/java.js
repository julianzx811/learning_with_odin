let game_board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

let game = (function () {
    let column_count = 0
    function make_row(number) {
        let div = document.createElement('div')
        div.id = "row" + number.toString()
        div.className = "row"
        for (let i = 0; i < 3; i++) {
            let divx = document.createElement('div')
            divx.className = "col border border-warning"
            divx.style = "padding-top: 40px;"
            divx.id = "column" + column_count.toString()
            column_count++
            div.appendChild(divx)
        }
        let container = document.getElementById("container")
        container.appendChild(div)
    }

    function make_board() {
        for (let i = 0; i < 3; i++) {
            make_row(i)
        }
    }
    function restar_game() {
        for (let i = 0; i < 9; i++) {
            document.getElementById("column" + i.toString()).textContent = ""
            game_board[i] = 0
        }
        document.getElementById("whowon").textContent = ""
    }
    return {
        make_board: make_board,
        make_row: make_row,
        restar_game: restar_game
    }
})();

let players = (function () {
    function player(name, wins, current_text) {
        this.name = name
        this.wins = wins
        this.points = 0
        this.current_text = current_text
        this.turn = true
    }
    return {
        player: player
    }
})();

let game_control = (function () {

    function who_won() {
        console.log(game_board)
        let ganador = document.getElementById("whowon")
        //check first diagonal spot
        if (game_board[0] == game_board[4] && game_board[4] == game_board[8]) {
            if (game_board[0] == 1 || game_board[0] == 2) {
                ganador.textContent = "el ganador es: " + document.getElementById("column0").textContent
                return true
            }
        }
        //check second diagonal spot
        else if (game_board[2] == game_board[4] && game_board[4] == game_board[6]) {
            if (game_board[2] == 1 || game_board[2] == 2) {
                ganador.textContent = "el ganador es: " + document.getElementById("column2").textContent
                return true

            }
        }
        else {
            let veredicto = false
            //check vertical spots
            for (let i = 0; i < 3; i++) {
                if (game_board[i] == game_board[i + 3] && game_board[i + 3] == game_board[i + 6]) {
                    if (game_board[i] == 1 || game_board[i] == 2) {
                        ganador.textContent = "el ganador es: " + document.getElementById("column" + i.toString()).textContent
                        veredicto = true
                        i = 3
                    }
                }
            }
            //check horizontal spots
            for (let i = 0; i < 7; i += 3) {
                if (game_board[i] == game_board[i + 1] && game_board[i + 1] == game_board[i + 2]) {
                    if (game_board[i] == 1 || game_board[i] == 2) {
                        ganador.textContent = "el ganador es: " + document.getElementById("column" + i.toString()).textContent
                        veredicto = true
                        i = 7
                    }
                }
            }
            return veredicto
        }
    }
    function spot_Free(spot) {
        position = spot.match(/\d+/)[0]
        if (game_board[position] == 0) {
            game_board[position] = 1
            return true
        } else if (game_board[position] != 1) {
            return false
        }
    }
    function ai_pc(pc) {
        turn_acomplish = false
        while (turn_acomplish == false) {
            position = Math.floor(Math.random() * 9)
            if (game_board[position] == 0) {
                document.getElementById("column" + position).textContent = pc.current_text
                game_board[position] = 2
                turn_acomplish = true
            }
        }
    }
    function restar_game(pc, jugador) {
        game.restar_game()
        pc.turn = true
        jugador.turn = true
    }
    function draw(){
        let veredicto = true 
        for (let i = 0; i < game_board.length; i++) {
           if (game_board[i] == 0 ) {
            veredicto = false
           } 
        }
        return veredicto
    }
    function initiate_game(pc, jugador) {
        game.make_board()
        let divs = document.querySelectorAll('div:not(#aminoxd)')
        divs.forEach(
            div => {
                div.addEventListener('click', e => {
                    if (spot_Free(e.target.id) && jugador.turn == true && pc.turn == true) {
                        e.target.textContent = jugador.current_text;
                        if (who_won()) {
                            console.log("wtf")
                            jugador.turn = false
                        }
                        ai_pc(pc)
                        if (who_won()) {
                            console.log("wtf1")
                            pc.turn = false
                        }
                    }
                })
            }
        );
    }

    return {
        initiate_game: initiate_game,
        restar_game: restar_game
    }
})();

let pc = new players.player("pc", 0, "o")
let jugador = new players.player("pc", 0, "x")
let juego = game_control
juego.initiate_game(pc, jugador)
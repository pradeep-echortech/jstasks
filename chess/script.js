var state = null
function resetState() {
    state = [
        [Elephant(0, 0, 'black'), Horse(0, 1, 'black'), Camel(0, 2, 'black'), Queen(0, 3, 'black'), King(0, 4, 'black'), Camel(0, 5, 'black'), Horse(0, 6, 'black'), Elephant(0, 7, 'black')],
        [Soldier(1, 0, 'black'), Soldier(1, 1, 'black'), Soldier(1, 2, 'black'), Soldier(1, 3, 'black'), Soldier(1, 4, 'black'), Soldier(1, 5, 'black'), Soldier(1, 6, 'black'), Soldier(1, 7, 'black')],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [Soldier(6, 0, 'white'), Soldier(6, 1, 'white'), Soldier(6, 2, 'white'), Soldier(6, 3, 'white'), Soldier(6, 4, 'white'), Soldier(6, 5, 'white'), Soldier(6, 6, 'white'), Soldier(6, 7, 'white')],
        [Elephant(7, 0, 'white'), Horse(7, 1, 'white'), Camel(7, 2, 'white'), Queen(7, 3, 'white'), King(7, 4, 'white'), Camel(7, 5, 'white'), Horse(7, 6, 'white'), Elephant(7, 7, 'white')],
    ]
    
}
resetState()
function Soldier(row, col, color = 'white') {
    const direction = color == 'white' ? -1 : 1
    let x = row, y = col
    let hasMoved = false
    return {
        name: `${color} Soldier`,
        icon: `<img src='/chess/assets/${color}-soldier.png'/>`,
        color,
        getPossibleMoves: () => {
            let possibleMoves = []

            if (state[x + direction][y] == null) {
                possibleMoves.push([x + direction, y])
                if (!hasMoved && state[x + (direction * 2)][y] == null) {
                    possibleMoves.push([x + (direction * 2), y])
                }
            }
            if (y != 7 &&
                state[x + direction][y + 1] != null &&
                state[x + direction][y + 1].color !== color) {
                possibleMoves.push([x + direction, y + 1])
            }

            if (y != 0 &&
                state[x + direction][y - 1] != null &&
                state[x + direction][y - 1].color !== color) {
                possibleMoves.push([x + direction, y - 1])
            }

            return possibleMoves
        },
        moveTo: (x1, y1) => {
            state[x1][y1] = state[x][y]
            state[x][y] = null
            x = x1
            y = y1
            hasMoved = true
        },
    }
}

function Elephant(row, col, color = 'white') {
    let x = row, y = col
    return {
        name: `${color} Elephant`,
        icon: `<img src='/chess/assets/${color}-rook.png'/>`,
        color,
        getPossibleMoves: () => {
            let possibleMoves = []
            for (let i = x + 1; i < 8; i++) {
                if (state[i][y] == null) {
                    possibleMoves.push([i, y])
                    continue
                }
                if (state[i][y].color != color) {
                    possibleMoves.push([i, y])
                }
                break
            }
            for (let i = x - 1; i >= 0; i--) {
                if (state[i][y] == null) {
                    possibleMoves.push([i, y])
                    continue
                }
                if (state[i][y].color != color) {
                    possibleMoves.push([i, y])
                }
                break
            }
            for (let i = y + 1; i < 8; i++) {
                if (state[x][i] == null) {
                    possibleMoves.push([x, i])
                    continue
                }
                if (state[x][i].color != color) {
                    possibleMoves.push([x, i])
                }
                break
            }
            for (let i = y - 1; i >= 0; i--) {
                if (state[x][i] == null) {
                    possibleMoves.push([x, i])
                    continue
                }
                if (state[x][i].color != color) {
                    possibleMoves.push([x, i])
                }
                break
            }

            return possibleMoves
        },
        moveTo: (x1, y1) => {
            state[x1][y1] = state[x][y]
            state[x][y] = null
            x = x1
            y = y1
        },
    }
}

function Camel(row, col, color = 'white') {
    let x = row, y = col
    return {
        name: `${color} Camel`,
        icon: `<img src='/chess/assets/${color}-bishop.png'/>`,

        color,
        getPossibleMoves: () => {
            let possibleMoves = []
            for (let i = 1; (x + i < 8 && y + i < 8); i++) {
                if (state[x + i][y + i] == null) {
                    possibleMoves.push([x + i, y + i])
                    continue
                }
                if (state[x + i][y + i].color != color) {
                    possibleMoves.push([x + i, y + i])
                }
                break
            }
            for (let i = 1; (x + i < 8 && y - i >= 0); i++) {
                if (state[x + i][y - i] == null) {
                    possibleMoves.push([x + i, y - i])
                    continue
                }
                if (state[x + i][y - i].color != color) {
                    possibleMoves.push([x + i, y - i])
                }
                break
            }
            for (let i = 1; (x - i >= 0 && y - i >= 0); i++) {
                if (state[x - i][y - i] == null) {
                    possibleMoves.push([x - i, y - i])
                    continue
                }
                if (state[x - i][y - i].color != color) {
                    possibleMoves.push([x - i, y - i])
                }
                break
            }
            for (let i = 1; (x - i >= 0 && y + i < 8); i++) {
                if (state[x - i][y + i] == null) {
                    possibleMoves.push([x - i, y + i])
                    continue
                }
                if (state[x - i][y + i].color != color) {
                    possibleMoves.push([x - i, y + i])
                }
                break
            }
            return possibleMoves
        },
        moveTo: (x1, y1) => {
            state[x1][y1] = state[x][y]
            state[x][y] = null
            x = x1
            y = y1
        },
    }
}

function Horse(row, col, color = 'white') {
    let x = row, y = col

    return {
        name: `${color} Horse`,
        icon: `<img src='/chess/assets/${color}-knight.png'/>`,

        color,
        getPossibleMoves: () => {
            let possibleMoves = []
            combinations = [1, -1, 2, -2]
            for (let i = 0; i < combinations.length; i++) {
                for (let j = 0; j < combinations.length; j++) {
                    p = combinations[i]
                    q = combinations[j]
                    if (Math.abs(p) == Math.abs(q)) continue
                    if (x + p < 0 || x + p > 7 || y + q < 0 || y + q > 7) continue
                    if (state[x + p][y + q] == null || state[x + p][y + q].color != color) {
                        possibleMoves.push([x + p, y + q])
                    }
                }
            }
            return possibleMoves
        },
        moveTo: (x1, y1) => {
            state[x1][y1] = state[x][y]
            state[x][y] = null
            x = x1
            y = y1
        },
    }
}

function King(row, col, color = 'white') {
    let x = row, y = col

    return {
        name: `${color} King`,
        icon: `<img src='/chess/assets/${color}-king.png'/>`,

        color,
        getPossibleMoves: () => {
            let possibleMoves = []
            combinations = [0, 1, -1]
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    p = combinations[i]
                    q = combinations[j]
                    if (p == 0 && q == 0) continue
                    if (x + p < 0 || x + p > 7 || y + q < 0 || y + q > 7) continue
                    if (state[x + p][y + q] == null || state[x + p][y + q].color != color) {
                        possibleMoves.push([x + p, y + q])
                    }
                }
            }
            return possibleMoves
        },
        moveTo: (x1, y1) => {
            state[x1][y1] = state[x][y]
            state[x][y] = null
            x = x1
            y = y1
        },
    }
}

function Queen(row, col, color = 'white') {
    let x = row, y = col

    return {
        name: `${color} Queen`,
        icon: `<img src='/chess/assets/${color}-queen.png'/>`,

        color,
        getPossibleMoves: () => {
            let possibleMoves = []
            for (let i = x + 1; i < 8; i++) {
                if (state[i][y] == null) {
                    possibleMoves.push([i, y])
                    continue
                }
                if (state[i][y].color != color) {
                    possibleMoves.push([i, y])
                }
                break
            }
            for (let i = x - 1; i >= 0; i--) {
                if (state[i][y] == null) {
                    possibleMoves.push([i, y])
                    continue
                }
                if (state[i][y].color != color) {
                    possibleMoves.push([i, y])
                }
                break
            }
            for (let i = y + 1; i < 8; i++) {
                if (state[x][i] == null) {
                    possibleMoves.push([x, i])
                    continue
                }
                if (state[x][i].color != color) {
                    possibleMoves.push([x, i])
                }
                break
            }
            for (let i = y - 1; i >= 0; i--) {
                if (state[x][i] == null) {
                    possibleMoves.push([x, i])
                    continue
                }
                if (state[x][i].color != color) {
                    possibleMoves.push([x, i])
                }
                break
            }
            for (let i = 1; (x + i < 8 && y + i < 8); i++) {
                if (state[x + i][y + i] == null) {
                    possibleMoves.push([x + i, y + i])
                    continue
                }
                if (state[x + i][y + i].color != color) {
                    possibleMoves.push([x + i, y + i])
                }
                break
            }
            for (let i = 1; (x + i < 8 && y - i >= 0); i++) {
                if (state[x + i][y - i] == null) {
                    possibleMoves.push([x + i, y - i])
                    continue
                }
                if (state[x + i][y - i].color != color) {
                    possibleMoves.push([x + i, y - i])
                }
                break
            }
            for (let i = 1; (x - i >= 0 && y - i >= 0); i++) {
                if (state[x - i][y - i] == null) {
                    possibleMoves.push([x - i, y - i])
                    continue
                }
                if (state[x - i][y - i].color != color) {
                    possibleMoves.push([x - i, y - i])
                }
                break
            }
            for (let i = 1; (x - i >= 0 && y + i < 8); i++) {
                if (state[x - i][y + i] == null) {
                    possibleMoves.push([x - i, y + i])
                    continue
                }
                if (state[x - i][y + i].color != color) {
                    possibleMoves.push([x - i, y + i])
                }
                break
            }

            return possibleMoves
        },
        moveTo: (x1, y1) => {
            state[x1][y1] = state[x][y]
            state[x][y] = null
            x = x1
            y = y1
        },
    }
}
let possibleMoves = []
let clickedPiece = null
let currentTurn = "white"
let playerTurn = document.querySelector('.playerTurn')
function onPieceClick(row, col) {
    const piece = state[row][col]
    if (possibleMoves.find(ele => ele[0] == row && ele[1] == col) && clickedPiece) {
        
        if (state[row][col] != null &&
            state[row][col].name.toLocaleLowerCase().includes('king')) {
            alert(`${currentTurn} wins !!!!!!!`)
            resetState()
            possibleMoves = []
            renderBoardFromState()
            return
        }

        console.log(`${clickedPiece.name} moved to (${row},${col})`);
        clickedPiece.moveTo(row, col)
        currentTurn = currentTurn == "white" ? "black" : "white"
        playerTurn.innerHTML = `<h2>${currentTurn}'s Turn </h2>`
        possibleMoves = []
        renderBoardFromState()
        return
    }
    if (piece == null) {
        possibleMoves = []
        renderBoardFromState()
        return
    }
    if (piece.color !== currentTurn) {
        return alert("not your turn")
        // return console.log("not your turn")
    }
    possibleMoves = piece.getPossibleMoves()
    clickedPiece = piece
    renderBoardFromState()
}

const board = document.querySelector('.board')
const move = `<img src="/chess/assets/move.png" class="move"/>`

function renderBoardFromState() {
    let boardHtml = ''
    for (let row = 0; row < 8; row++) {
        let boxcolor;
        let startcolorwhite = row % 2 === 0 ? true : false;


        for (let column = 0; column < 8; column++) {
            if (startcolorwhite) {
                boxcolor = column % 2 === 0 ? 'burlywood' : 'brown';
            }
            else {
                boxcolor = column % 2 === 0 ? 'brown' : 'burlywood';
            }
            const chessPiece = state[row][column]

            let isPossibleMove = possibleMoves
                .find(cords => cords[0] == row && cords[1] == column) ? true : false

            if (chessPiece == null) {
                boardHtml += `<div class='piece' style="background-color: ${boxcolor}"
                onClick="onPieceClick(${row},${column})">
                    ${isPossibleMove ? move : ""}
                </div>`
                continue
            }
            boardHtml += `<div class='piece' style="background-color: ${boxcolor}"
            onClick="onPieceClick(${row},${column})">
                ${chessPiece.icon}
                ${isPossibleMove ? move : ""}
            </div>`

        }
    }
    board.innerHTML = boardHtml
}

renderBoardFromState()
function TicTacToe(placeholder, grid_size, callback) {
        this.placeholder = placeholder;
        this.display(grid_size);
        this.callback = callback;
        this.marks = {
            X: 'X',
            O: 'O',
            count: 'O'
        };
        return this;
}

TicTacToe.prototype.display = function (grid_size) {
    // console.log(self);
    this.grid_size = grid_size
    var html = '<table id="tic-tac-toe" >'
    for (let i = 0; i < grid_size; i++) {
        html += '<tr>'
        for (let j = 0; j < grid_size; j++) {
            html += '<td></td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    this.placeholder.innerHTML = html;
    this.columns = this.placeholder.getElementsByTagName('td');
    for (i = 0; i < this.columns.length; i++) {
        this.columns[i].addEventListener('click', (e) => this.mark(e.target ));
    }

}

TicTacToe.prototype.mark = function (column) {
    if (column.innerHTML) {
        return;
    }
    var current_mark = this.marks.count == 'O' ? 'X' : 'O';

    column.innerText = current_mark;
    this.marks.count = current_mark

}

var placeholder = document.getElementById('gameboard')
var tictactoe = new TicTacToe(placeholder, 3, onResult);
function onResult() {

}

function restart(grid_size) {
    if (grid_size) {
        tictactoe.display(grid_size)
    }
}

// function gs() {
// 	value = prompt('enter the size of tic-tac-toe')
// }
// gs(this.value);
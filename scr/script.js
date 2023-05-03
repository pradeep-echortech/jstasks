let gameboard = document.getElementById('gameboard')
var state = []
const n = 3;
go = 'o'
function display() {
    for (let i = 0; i < n; i++) {
        let newArr=[] ;
        for(let j=0; j<n; j++){
            newArr.push(null)
        }        
        state.push(newArr)
    } 
}
display();
console.log(state)

function createBoard() {
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            const cellElement = document.createElement('div')
            cellElement.classList.add('square')
            cellElement.id = 'cell'
            cellElement.innerText= state[i][j];
            gameboard.append(cellElement)
            cellElement.addEventListener('click', addGo)            
        }
        
    }
}
createBoard();

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go == 'o' ? 'x' : 'o'
    goDisplay.innerText = go 
    e.target.removeEventListener('click', addGo)
}
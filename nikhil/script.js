const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
var counter = 0;
let currentPlayer = O_TEXT;
let game = true;

console.log(boxes)
const drawBoard = () => {
    boxes.forEach((box, index) => { //taking each box and index of each box
        let styleString = ''; //to add borders we take empty styleString
        if (index < 3) { //box is on the top 
            styleString += 'border-bottom:3px solid var(--purple);';
        }
        if (index % 3 === 0) { //we are on left
            styleString += 'border-right:3px solid var(--purple);';
        }
        if (index % 3 === 2) { //we are on right
            styleString += 'border-left:3px solid var(--purple);';
        }
        if (index > 5) { //box is at the bottom
            styleString += 'border-top:3px solid var(--purple);';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    });
};
const boxClicked = (e) => {
    const id = e.target.id; //getting id of the element
    counter++ //increments the count value
    console.log("counter" + counter) //counting the number of times box have been clicked
    if (!spaces[id] && game == true) { //if nothing in spaces and game is true
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer; //setting inner box to current player
        if (playerHasWon(currentPlayer)) { //handling if player has won
            game = false;
            playText.innerText = `${currentPlayer} has won!`;
            return;
        }
        if (counter == 9) { //if count is 9 it returns draw
            playText.innerText = `Match Drawn!!`
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT; //if count is 9 returns draw
    }
}
const playerHasWon = (currentplayer) => {
    if (spaces[0] === currentplayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`$(currentPlayer) wins !`)
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`$(currentPlayer) wins !`)
            return true;

        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`$(currentPlayer) wins !`)
            return true;

        }
    }
    if (spaces[8] === currentplayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`$(currentPlayer) wins!`)
            return true;
        }
        if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`$(currentPlayer) wins !`)
            return true;

        }
    }
    if (spaces[4] === currentplayer) {
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`$(currentPlayer) wins !`)
            return true;
        }
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`$(currentPlayer) wins!`)
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`$(currentPlayer) `)
            return true;
        }
    }

};


restart.addEventListener("click", () => {
    spaces.forEach((space, id) => {
        spaces[id] = null; //wipe out each space
    })
    boxes.forEach(box => {
        box.innerText = ""; //wipe outs box
    });
    playText.innerText = `let's play!!`;
    currentPlayer = O_TEXT; //reset current player (X or O)
    game = true; //resets game to true 
    counter = 0 //counter sets to zero
});

drawBoard();
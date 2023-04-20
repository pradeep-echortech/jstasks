var state = []
const n = 3
var nextUser = 'o'

function resetState() {
	state = []
	for (let i = 0; i < n; i++) {
		let newArr = []
		for (let j = 0; j < n; j++) {
			newArr.push(null);
		}
		state.push(newArr)
	}
	console.log(state)
}
resetState()

function isBoardSolved() {
	for (let i = 0; i < n; i++) {

		//checking if row values are equal
		let isRowEqual = true
		const row = state[i]
		for (let j = 0; j < n - 1; j++) {
			if (row[j] == null) {
				isRowEqual = false
				break
			}
			if (row[j] != row[j + 1]) {
				isRowEqual = false
				break
			}
		}
		if (isRowEqual) {
			console.log(i, 'row wins');
			return true
		}

		//checking if column values are equal
		let isColEqual = true
		for (let j = 0; j < n - 1; j++) {
			if (state[i][j] == null) {
				isColEqual = false
				break
			}
			if (state[j][i] != state[j + 1][i]) {
				isColEqual = false
				break
			}
		}
		if (isColEqual) {
			console.log(i, 'col wins')
			return true
		}

		// checking if right diagonal are equal
		// let isRightDiagonal = true
		// for (let j = 0; j < n; j++) {
		// 	if (row[j] == null) {
		// 		isRightDiagonal = false
		// 		break
		// 	}
		// 	if (state[i] !== nextUser)  {
		// 		isRightDiagonal = false
		// 		break
		// 	}
			
		// 	if (isRightDiagonal) {
		// 		console.log(i,j, 'RDiagnol win');
		// 		return true
		// 	}
		// }
	}

	for (i = 0; i < n; i++) {

		let isRightDiagonal = true
		for (let j = 0; j < n; j++) {
			if (state[i][j] == null) {
				isRightDiagonal = false
				break
			}
			if (state[i][j] == state[i + 1][j + 1]) {
				isRightDiagonal = true
				console.log(i,j);
				break 
			}
		}
		if(isRightDiagonal){
			console.log(i, 'RDiagnol win');
			return true
		}
	}
}

function renderBoardFromState() {
	var gridbox = document.querySelector('#gridbox');
	gridbox.innerHTML = '';

	for (let i = 0; i < n; i++) {
		var newDiv = document.createElement('tr');
		for (let j = 0; j < n; j++) {
			let child = document.createElement('td')
			child.id = 'textbox'
			child.innerText = state[i][j]
			newDiv.append(child)
			child.addEventListener('click', () => updatePosition(i, j))
		}
		gridbox.append(newDiv)
	}
	// isBoardchecked();
}
//renderBoardFromState()

function updatePosition(row, col) {
	if (state[row][col]) {
		return alert('already marked')
	}
	state[row][col] = nextUser
	renderBoardFromState()
	if (isBoardSolved()) {
		alert(`${nextUser} Wins the game`)
		resetState()
		renderBoardFromState()
		return
	}
	nextUser = nextUser == 'o' ? 'x' : 'o'
}
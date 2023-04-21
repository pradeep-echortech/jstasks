var state = []
const n = 3
var nextUser = 'o'

function resetState() {
	state = []
	nextUser = 'o'
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
			// console.log(`i=${i},j=${j}, ->${state[j][i]} ${state[j + 1][i]}`)
			if (state[j][i] == null) {
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
	}
	
	//diagnol 1
	let diagnol1 = true
	for (i = 0; i < n - 1; i++) {
		// if(state[i][i] == null){
		// 	diagnol1 = false
		// 	break
		// }
		if (state[i][i] !== state[i + 1][i + 1] || state[i][i] === null) {
			diagnol1 = false
			break
		}
	}
	if (diagnol1) {
		console.log(i, 'diagonal 1 wins')
		return true
	}
	
	// diagnol 2
	let diagnol2 = true
	for (i = 0; i < n - 1; i++) {
		// if(state[i][n-i-1] == null){
		// 	diagnol1 = false
		// 	break
		// }
		if (state[i][n-i-1] !== state[i+1][n-i-2] || state[i][n-i-1] === null) {
			diagnol2 = false
			break
		}
	}
	if (diagnol2) {
		console.log(i, 'diagonal 2 wins')
		return true
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

function refresh() {
	window.location.reload();
}
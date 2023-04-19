var state = []
const n = 3

var nextUser = 'o'

function populateState() {
    for (let i = 0; i < n; i++) {
        let newArr = []
        for (let j = 0; j < n; j++) {
            newArr.push(null);
        }
        state.push(newArr)
    }
    console.log(state)
}
populateState()

function isBoardchecked() {
    
	// Declare variables to count the presence of the mark
	var horizontal_count,
		vertical_count,
		right_to_left_count = 0,
		left_to_right_count = 0;


	// Loop 1
	for(var i = 0; i < n; i++) {

		// Empty the count
		horizontal_count = vertical_count = 0;

		// Loop 2
		for(var j = 0; j < n; j++) {

			// i * n + j ===> "0,1,2", "3,4,5", "6,7,8"
			if(this.columns[i * n + j].innerHTML == mark) {
				horizontal_count++;
			}

			// j * n + i ===> "0,3,6", "1,4,7", "2,5,8"
			if(this.columns[j * n + i].innerHTML == mark) {
				vertical_count++;
			}

		}

		// If horizontal or vertical combination is found the return true
		if(horizontal_count == n || vertical_count == n) {
			return true;	
		}

		// i * n + i ===> "0,4,8"
		if(this.columns[i * n + i].innerHTML == mark) {
			right_to_left_count++;
		}

		// (n - 1) * (i+1) ===> "2,4,6"
		if(this.columns[(n - 1) * (i+1)].innerHTML == mark) {
			left_to_right_count++;
		}

	} // End of loop

	// If mark is present diagnolly
	if(right_to_left_count == n || left_to_right_count == n) {
		return true;	
	}

	return false;   


    // return true || false
}

function renderBoardFromState() {
    var gridbox = document.querySelector('#gridbox');
    gridbox.innerHTML = '';
    for (let i = 0; i < n; i++) {
        var newDiv = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            let childrrs = document.createElement('td')
            childrrs.id = 'textbox'
            childrrs.innerText = state[i][j]
            newDiv.append(childrrs)
            childrrs.addEventListener('click', () => updatePosition(i, j))
        }
        gridbox.append(newDiv)
    }
}
//renderBoardFromState()

function updatePosition(row, col) {
    state[row][col] = nextUser
    if (isBoardchecked()) {
        alert(`${nextUser} Wins the game`)
        populateState()
        renderBoardFromState()
    }
    nextUser = nextUser == 'o' ? 'x' : 'o'
    // renderBoardFromState()

}
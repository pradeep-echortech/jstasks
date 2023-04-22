let score = 20

let secretNumber = Math.trunc(Math.random() * 20) + 1
let highScore = 0

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        displayMessage('⛔ No Number !')
    }

    // when player wins
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number !')
        document.body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }
    }
    
    // when number is high
    else if (guess > secretNumber) {
        if (score > 1) {
            displayMessage('📈 Too High !')
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('💥 You Lost the game')
        }
    }
    
    //when number is low 
    else if (guess < secretNumber) {
        if (score > 1) {
            displayMessage('📉 Too Low')
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('💥 You Lost the game')
        }
    }
    
});

document.querySelector('.again').addEventListener('click',()=>{
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing.....')
    document.body.style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score
    
})
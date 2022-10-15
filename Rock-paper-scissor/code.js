//To get a random computer choice
function getComputerChoice() {
    let array = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

//Algorithm for win and lose
//Score variables keep track of player and computer scores
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            player_score++;
            return '"You Win! Rock smash Scissors"';
        }
        else if (computerSelection === 'Paper') {
            computer_score++;
            return '"You Lose! Paper beats Rock"';
        }
        else return `"It's a tie"`;
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            player_score++;
            return '"You Win! Paper beats Rock"';
        }
        else if (computerSelection === 'Scissors') {
            computer_score++;
            return '"You Lose! Scissors cuts Paper"';
        }
        else return `"It's a tie"`;
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            player_score++;
            return '"You Win! Scissors cuts Paper"';
        }
        else if (computerSelection === 'Rock') {
            computer_score++;
            return '"You Lose! Rock smash Scissors"';
        }
        else return `"It's a tie"`;
    }
}


let player_score = 0;
let computer_score = 0;
let rounds = 0;
function resetFunc () {
    document.getElementById("final-result").innerText = '';
    document.getElementById("result").innerText = '';
    document.getElementById("bot").innerText = 'Bot is sleeping again......zzz';
    document.getElementById("score").innerText =  "0 / 5";
    rounds = 0;
    document.getElementById("score").style.color = 'black';
}

// Final Result Function
function finalResult() {
    const output = document.getElementById("final-result");
    if (player_score > computer_score) {
        output.style.color = 'green';
        output.innerText = ("Congratulation! You Win the Game.");
    }
    else if (player_score < computer_score) {
        output.style.color = 'red';
        output.innerText = ("Sorry! You Lose the Game.");
    }
        else {
            output.style.color = 'blue';
            output.innerText = ("Draw");
        }
    player_score = 0;
    computer_score = 0;
    setTimeout(resetFunc, 2500);
}

function addResult(result, computerSelection, rounds) {
    document.getElementById("bot").innerText = "Bot choosed: " + computerSelection;
    document.getElementById("score").innerText = rounds + " / 5"; 
    setTimeout(function() {document.getElementById("result").innerText = result;}, 150);
}

// Buttons click functions
function rockFunc() {
    const computerSelection = getComputerChoice();
    const result = playRound("Rock", computerSelection);
    rounds++;
    addResult(result, computerSelection, rounds);
    if (rounds == 5) finalResult();
    if (rounds > 5) document.getElementById("score").style.color = '#eee';
}
function paperFunc() {
    const computerSelection = getComputerChoice();
    const result = playRound("Paper", computerSelection)
    rounds++;
    addResult(result, computerSelection, rounds);
    if (rounds == 5) finalResult();
    if (rounds > 5) document.getElementById("score").style.color = '#eee';
}
function scissorsFunc() {
    const computerSelection = getComputerChoice();
    const result = playRound("Scissors", computerSelection)
    rounds++;
    addResult(result, computerSelection, rounds);
    if (rounds == 5) finalResult();
    if (rounds > 5) document.getElementById("score").style.color = '#eee';
}

document.querySelector("#rock").addEventListener('click', rockFunc);
document.querySelector("#paper").addEventListener('click', paperFunc);
document.querySelector("#scissor").addEventListener('click', scissorsFunc);

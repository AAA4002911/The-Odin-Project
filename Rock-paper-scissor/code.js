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
//Validating player input
function input_validator(input) {
    if (input == 'Rock' || input == 'ROCK' || input == 'rock') return 'Rock';
    else if (input == 'Paper' || input == 'PAPER' || input == 'paper') return 'Paper';
    else if (input == 'Scissors' || input == 'SCISSORS' || input == 'scissors') return 'Scissors';
    else return false;
}
//Rounds of game
function game() {
    for (let i = 0; i < 5; i++) {
        const input = prompt("Select (Rock, Paper, Scissors): ");
        const playerSelection = input_validator(input);
        if (playerSelection === false) {
            console.log("Invalid input");
            i--;
            continue;
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (player_score > computer_score) console.log("Congratulation! You Win the Game.");
    else if (player_score < computer_score) console.log("Sorry! You Lose the Game.");
    else console.log("Draw");
}

let player_score = 0;
let computer_score = 0;
game();
var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];

function main() {
    rock_div.addEventListener("click", function() {
        play("rock");
    })
    paper_div.addEventListener("click", function() {
        play("paper");
    })
    scissors_div.addEventListener("click", function() {
        play("scissors");
    })
}

function play(choice) {
    const compChoice = getCompChoice();
    if (choice == compChoice) {
        result_p.innerHTML = "It's a draw!";
    }
    else if (choice == "rock" && compChoice == "paper") {
        compScore++;
        compScore_span.innerHTML = compScore;
        result_p.innerHTML = "Paper beats rock. You lose!";
    }
    else if (choice == "rock" && compChoice == "scissors"){
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = "Rock beats scissors. You win!";
    }
    else if (choice == "paper" && compChoice == "rock"){
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = "Paper beats rock. You win!";
    }
    else if (choice == "paper" && compChoice == "scissors"){
        compScore++;
        compScore_span.innerHTML = compScore;
        result_p.innerHTML = "Scissors beats paper. You lose!";
    }
    else if (choice == "scissors" && compChoice == "rock"){
        compScore++;
        compScore_span.innerHTML = compScore;
        result_p.innerHTML = "Rock beats scissors. You lose!";
    }
    else if (choice == "scissors" && compChoice == "paper"){
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = "Scissors beats paper. You win!";
    }
}

function getCompChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

main();
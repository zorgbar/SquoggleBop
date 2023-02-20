let currentPlayer = "player1";
let player1Score = 100;
let player2Score = 100;


function addScore() {

    if (currentPlayer === "player1") {
        document.getElementById("player1").classList.add("selected");
        document.getElementById("player2").classList.remove("selected");
    } else {
        document.getElementById("player2").classList.add("selected");
        document.getElementById("player1").classList.remove("selected");
    }



    if (currentPlayer === "player1") {
        let select = document.getElementById("player1Select").value;
        if (select === "lightAttack") {
            player2Score -= Math.floor(Math.random() * 2) + 1;
        } else if (select === "heavyAttack") {
            player2Score -= Math.floor(Math.random() * 7);
        } else {
            player1Score += Math.floor(Math.random() * 2) + 1; // add score to player 1
        }
        document.getElementById("player2Score").innerHTML = "Player 2 Score: " + player2Score;
        if (player2Score <= 0) {
            document.getElementById("winner").innerHTML = "Player 1 Wins!";
        }
        currentPlayer = "player2";
    } else {
        let select = document.getElementById("player2Select").value;
        if (select === "lightAttack") {
            player1Score -= Math.floor(Math.random() * 2) + 1;
        } else if (select === "heavyAttack") {
            player1Score -= Math.floor(Math.random() * 7);
        } else {
            player2Score += Math.floor(Math.random() * 2) + 1; // add score to player 2
        }
        document.getElementById("player1Score").innerHTML = "Player 1 Score: " + player1Score;
        if (player1Score <= 0) {
            document.getElementById("winner").innerHTML = "Player 2 Wins!";
        }
        currentPlayer = "player1";
    }
}

function resetGame() {
    player1Score = 100;
    player2Score = 100;
    document.getElementById("player1Score").innerHTML = "Player 1 Score: " + player1Score;
    document.getElementById("player2Score").innerHTML = "Player 2 Score: " + player2Score;
    document.getElementById("winner")
}
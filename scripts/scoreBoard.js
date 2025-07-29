// Array of player class to hold players and scores
const players = [];

class player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

// Grabs key inputs for the "Enter" key
var input = document.getElementById("playerNameInput");

// Sumbits the player Name form when "Enter" key is pressed
input.addEventListener("keypress", function(pressedKey) {
    if (pressedKey.key === "Enter") {
        pressedKey.preventDefault();
        document.getElementById("addButton").click();
    }
});
        
document.getElementById("addButton").onclick = function() {
    let playerName = document.getElementById("playerNameInput").value;

    // Kills submission if invalid player name
    if (!playerValidation(playerName)) { return; }

    // Construct a player
    players.push({ name: playerName, score: 0 });

    // Prints Player name to screen
    printScoreBoard();

    // Resets text box
    document.getElementById("playerNameInput").value = "";
}

// Prints the Players and their scores
function printScoreBoard() {
    let string = "<th id='idplayer'>Players</th><th id='idscore'>Score</th>";

    for (let i = 0; i < players.length; i++) {
        string += "<tr><td id='idplayer'>" + players[i].name + "</td><td id='idscore'>" + players[i].score + "</td></tr>";
    }
    document.getElementById("playerList").innerHTML = string;
}

// Checks if the Player Name is at least 1 character
function playerValidation(name) {
    if (name.length >= 1) {
        return true;
    }
    return false;
}
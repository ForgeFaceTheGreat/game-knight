const players = [];

class player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

// let playerName;

document.getElementById("addButton").onclick = function() {
    let playerName = document.getElementById("playerName").value;

    // Construct a player
    players.push({ name: playerName, score: 0 });

    // Prints Player name to screen
    // document.getElementById("playerList").innerHTML = "<li>" + players[0].name + "</li>";
    printScoreBoard();

    // Resets text box
    document.getElementById("playerName").value = "";
}

function printScoreBoard() {
    let string = "";

    for (let i = 0; i < players.length; i++) {
        string += "<tr>\n<td>" + players[i].name + "</td>\n<td>" + players[i].score + "</td>\n</tr>";
    }
    document.getElementById("playerList").innerHTML = string;
}
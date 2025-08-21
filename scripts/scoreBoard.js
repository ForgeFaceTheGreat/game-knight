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
    let playerIDElement = document.getElementById("playerNameInput");
    let playerName = document.getElementById("playerNameInput").value;

    // Kills submission if invalid player name
    if (!playerValidation(playerIDElement)) { return; }

    // Uppercases first letter and lowers the rest
    playerName = caseinator(playerName);

    // Checks if player already exists
    if (!playerExists(playerName, playerIDElement)) { return; }

    // Construct a player
    players.push({ name: playerName, score: 0 });

    // Displays player cards for manipulating scores
    printPlayerCards();

    // Prints Player name and score to screen
    printScoreBoard();

    // Resets text box
    playerIDElement.value = "";
}

// Displays player cards for manipulating scores
function printPlayerCards() {
    let string = "";

    for (let i = 0; i < players.length; i++) {
        string += "<div class='card'>" +
            "<p>" + players[i].score + "</p>" + 
            "<div>Buttons</div>" +
            "<div class='cardStock'>" +
                "<h4><b>" + players[i].name + "</b></h4>" +
            "</div>" +
        "</div>";
    }
    document.getElementById("cardHolder").innerHTML = string;
}

// Prints the Players and their scores
function printScoreBoard() {
    let string = "<th id='idplayer'>Players</th><th id='idscore'>Score</th>";
    
    // Displays player count
    document.getElementById("numPlayers").innerHTML = players.length + " Player";
    
    for (let i = 0; i < players.length; i++) {
        string += "<tr><td id='idplayer'>" + players[i].name + "</td><td id='idscore'>" + players[i].score + "</td></tr>";
    }
    document.getElementById("playerList").innerHTML = string;
}

// Checks if the Player Name is valid
function playerValidation(name) {
    var pos = true;

    // Remove error messages
    name.classList.remove("error", !pos);
    document.getElementById("lengthError").style.display = "none";
    document.getElementById("charError").style.display = "none";
    document.getElementById("existsError").style.display = "none";
    document.getElementById("noError").style.display = "block";

    // name too short or too long
    if (name.value.length < 3 || name.value.length > 16) {
        pos = false;
        name.classList.add("error", !pos);
        document.getElementById("lengthError").style.display = "block";
        document.getElementById("noError").style.display = "none";
    }

    // name can only be letters and numbers
    const pattern = /^[a-zA-Z0-9]+$/;
    if (!pattern.test(name.value)) {
        pos = false;
        name.classList.add("error", !pos);
        document.getElementById("charError").style.display = "block";
        document.getElementById("noError").style.display = "none";
    }

    return pos;
}

// Checks if name already exists
function playerExists(name, nameID) {
    for (let i = 0; i < players.length; i++) {
        if (name === players[i].name) {
            pos = false;
            nameID.classList.add("error", !pos);
            document.getElementById("existsError").style.display = "block";
            document.getElementById("noError").style.display = "none";
            
            return false;
        }
    }

    return true;
}

// Uppercases first letter and lowers the rest
function caseinator(name) {
    var newName = name[0].toUpperCase();

    for (let i = 1; i < name.length; i++) {
        newName += name[i].toLowerCase();
    }

    return newName;
}
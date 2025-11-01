function createCharacters () {
    const characters = [
        {name: "Mario", level: 5, health: 2000},
        {name: "Luigi", level: 10, health: 1000},
        {name: "Peach", level: 15, health: 800},
    ];
    console.log(characters)

    const charactersPowerUp = characters.map(char => {
        return {
            name: char.name.toUpperCase(),
            level: char.level*2,
            health: char.health*3
        }
    });
    console.log(charactersPowerUp);

    const possibleWinners = characters.filter(char => char.health > 1000);
    console.log(possibleWinners)
}

createCharacters();

function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score);

    for (let i = 0; i < players.length; i++) {
        let rank = i + 1;
        let medal = "";

        if (rank === 1) {
            medal = "🥇"
        } else if (rank ===2) {
            medal = "🥈"
        } else if (rank === 3) {
            medal = "🥉"
        };

        console.log(medal + " " + rank + ". " +  players[i].name + " - " + players[i].score + "pys")
    }
};

const players = [
    {name: "Lan", score: 10},
    {name: "Mai", score: 15},
    {name: "Tung", score: 5},
    {name: "Truc", score: 0},
];

printLeaderboard(players);



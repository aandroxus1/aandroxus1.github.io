class Player{
    constructor(location, money, properties){
        self.location = location;
        self.money = money;
        self.properties = properties;
    }
}

//Initialises all players, which contains location, properties held and money in player's balance

function playerGenerate(){
    let playerList = [];
    /*
    let playerCount = document.getElementById("playerCount").innerHTML;
    console.log(playerCount)
    console.log(document.getElementById("playerCount").innerHTML)
    for (let i of (playerCount)){
        playerList[i] = new Player;
    }
    console.log(playerList)
    *///This code is not working, but I want to move on with actually building the game. Temporary hard player lock will be at 2.
    for (let i of [0,1,2,3]){
        playerList[i] = new Player(0,1000,0);
        console.log(playerList)
    }
}

function rollDice(){
    let dice=Math.random()
    dice = dice * 6
    dice = Math.ceil(dice)
    document.getElementById("testlabel").innerHTML=dice
}

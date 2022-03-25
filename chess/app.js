class playerList{
    constructor(Player){
        self.Player = Player;
        self.current = current;
    }
}
class Player{
    constructor(location, money, properties){
        self.location = location;
        self.money = money;
        self.properties = properties;
    }
}

//Initialises all players, which contains location, properties held and money in player's balance

function playerGenerate(){
    playerCount = document.getElementById("playerCount").innerHTML;
    let playerTotal = []
    for (var i = 1; i <= playerCount; i++) {
        playerTotal.push(i);
    }
    console.log(playerCount, playerTotal)
    
    playerList = [Player, Player, Player, Player]
    console.log(playerList)
    for (let i in [0,1,2,3]){
        playerList[i].location = 0;
        playerList[i].money = 1000;
        playerList[i].properties = ""
        playerList.current=0
    }
    document.getElementById("playerLabel").innerHTML=(playerList.length) + " players active."
    console.log(playerList[0].location, playerList[0].money)
}
function rollDice(){
    let dice=Math.random()
    dice = dice * 11
    dice = Math.ceil(dice)
    dice++;
    document.getElementById("testlabel").innerHTML=dice
    return dice
}
function playerMove(activePlayer){
    dice=rollDice();
    i = playerList.current
    console.log(i)
    playerList.current = i++;
    console.log(playerList.current)
}
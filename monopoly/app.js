class playerList{
    constructor(current, instances){
        this.Player = Player;
        this.current = current;
        this.instances = instances;
    }
}
class Player{
    constructor(location, money, properties){
        this.location = location;
        this.money = money;
        this.properties = properties;
    }
}


function playerGenerate(){
    let playerCount = document.getElementById("playerCount").value;
    let playerTotal = []
    for (var i = 1; i <= playerCount; i++) {
        playerTotal.push(i);
    }
    console.log(playerCount, playerTotal)
    for(let i in playerTotal){
        playerList[i]= [Player]
    }
    console.log(playerList)
    for (let i in playerTotal){
        playerList[i].location = 0;
        playerList[i].money = 1000;
        playerList[i].properties = ""
        playerList.instances++
        playerList.current=0
        console.log(playerList[i])
    }
    playerList.instances = playerCount
    document.getElementById("playerLabel").innerHTML=(playerList.instances) + " players active."
    console.log(playerList[0].location, playerList[1].money)
}
function rollDice(){
    let dice=Math.random()
    dice = dice * 11
    dice = Math.ceil(dice)
    dice++;
    return dice
}

function playerMove(){
    dice=rollDice();
    console.log(dice)
}

function completeTurn(){
    i = playerList.current
    i++
    if(i == playerList.instances){
        i=0
    }
    playerList.current = i;
    console.log(playerList.current)
}
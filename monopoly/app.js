class playerList{
    constructor(current, instances){
        this.Player = Player;
        this.current = current;
        this.instances = instances;
    }
}
class Player{
    constructor(location, money){
        this.location = location;
        this.money = money;
    }
}
var locationProperties = [
    { name: "GO", propertyType: "go", rent: -200},
    { name: "Old Kent Road", propertyType: "property", rent: 60, housePrice: 50, mortgageValue: 25, colour: "brown" },
    { name: "Community Chest", propertyType: "chest"},
    { name: "Whitechapel Road", propertyType: "property", rent: 60, housePrice: 50, mortgageValue: 25, colour: "brown" },
    { name: "Income Tax", rent: 200, propertyType: "tax"},
    { name: "King's Cross Station", propertyType: "station", rent: 0, housePrice: 200, mortgageValue: 100, colour: "null" },
    { name: "The Angel Islington", propertyType: "property", rent: 100, housePrice: 50, mortgageValue: 25, colour: "light blue" },
    { name: "Chance", propertyType: "chance"},
    { name: "Euston Road", propertyType: "property", rent: 100, housePrice: 50, mortgageValue: 25, colour: "light blue" },
    { name: "Pentonville Road", propertyType: "property", rent: 120, housePrice: 50, mortgageValue: 25, colour: "light blue" },
    { name: "Jail", propertyType: "jail"},
    { name: "Pall Mall", propertyType: "property", rent: 140, housePrice: 100, mortgageValue: 50, colour: "pink" },
    { name: "Electric Company", propertyType: "utility", rent: 0, housePrice: 150, mortgageValue: 75, colour: "null" },
    { name: "Whitehall", propertyType: "property", rent: 140, housePrice: 100, mortgageValue: 50, colour: "pink" },
    { name: "Northumberland Avenue", propertyType: "property", rent: 160, housePrice: 100, mortgageValue: 50, colour: "pink" },
    { name: "Marylebone Station", propertyType: "station", rent: 0, housePrice: 200, mortgageValue: 100, colour: "null" },
    { name: "Bow Street", propertyType: "property", rent: 180, housePrice: 100, mortgageValue: 50, colour: "orange" },
    { name: "Community Chest", propertyType: "chest"},
    { name: "Marlborough Street", propertyType: "property", rent: 180, housePrice: 100, mortgageValue: 50, colour: "orange" },
    { name: "Vine Street", propertyType: "property", rent: 200, housePrice: 100, mortgageValue: 50, colour: "orange" },
    { name: "Free Parking", rent: -100, propertyType: "chest"},
    { name: "Strand", propertyType: "property", rent: 220, housePrice: 150, mortgageValue: 75, colour: "red" },
    { name: "Chance", propertyType: "chance"},
    { name: "Fleet Street", propertyType: "property", rent: 240, housePrice: 150, mortgageValue: 75, colour: "red" },
    { name: "Trafalgar Square", propertyType: "property", rent: 200, housePrice: 150, mortgageValue: 75, colour: "red" },
    { name: "Fenchurch St. Station", propertyType: "station", rent: 0, housePrice: 200, mortgageValue: 100, colour: "null" },
    { name: "Leicester Square", propertyType: "property", rent: 260, housePrice: 150, mortgageValue: 75, colour: "yellow" },
    { name: "Coventry Street", propertyType: "property", rent: 260, housePrice: 150, mortgageValue: 75, colour: "yellow" },
    { name: "Water Works", propertyType: "utility", rent: 0, housePrice: 150, mortgageValue: 75, colour: "null" },
    { name: "Piccadilly", propertyType: "property", rent: 280, housePrice: 150, mortgageValue: 75, colour: "yellow" },
    { name: "Go To Jail", propertyType: "arrest"},
    { name: "Regent Street", propertyType: "property", rent: 300, housePrice: 200, mortgageValue: 100, colour: "green" },
    { name: "Oxford Street", propertyType: "property", rent: 300, housePrice: 200, mortgageValue: 100, colour: "green" },
    { name: "Community Chest", propertyType: "chest"},
    { name: "Bond Street", propertyType: "property", rent: 320, housePrice: 200, mortgageValue: 100, colour: "green" },
    { name: "Liverpool St. Station", propertyType: "station", rent: 0, housePrice: 200, mortgageValue: 100, colour: "null" },
    { name: "Chance", propertyType: "chance"},
    { name: "Park Lane", propertyType: "property", rent: 350, housePrice: 200, mortgageValue: 100, colour: "dark blue" },
    { name: "Super Tax", propertyType: "other", rent: 0, housePrice: 0, mortgageValue: 0, colour: "null" },
    { name: "Mayfair", propertyType: "property", rent: 400, housePrice: 200, mortgageValue: 100, colour: "dark blue" },
]

for(var i = 0; i < locationProperties.length; i++){
    console.log(locationProperties[i].propertyType);
}

function playerGenerate(){
    let playerCount = document.getElementById("playerCount").value;
    let playerTotal = []
    for (var i = 1; i <= playerCount; i++) {
        playerTotal.push(i);
    }
    console.log(playerCount, playerTotal)
    for(let i in playerTotal){
        playerList[i] = [Player]
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
    document.getElementById("1").classList.value = "disabled"
    setTimeout(function(){document.getElementById("1").style.display = "none"}, 1000)
}
function rollDice(){
    let dice=Math.random()
    dice = dice * 11
    dice = Math.ceil(dice)
    dice++;
    document.getElementById("testlabel").innerHTML=dice;
    return dice
}
function playerMove(){
    dice=rollDice();
    console.log(dice)
    p = playerList.current
    let pLoc = playerList[p].location
    pLoc = pLoc + dice
    if (pLoc >= 40){
        pLoc=pLoc-40
        playerList[p].money = playerList[p].money + 200
        document.getElementById("OutputLabel").innerHTML = document.getElementById("OutputLabel").innerHTML + "<br>Player " + (p+1) + " Passed GO! and collected 200!"
    }
    playerList[p].location = pLoc
    console.log(pLoc)
    console.log(playerList[p])

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
function buyProperty(){
    let p = playerList.current
    let pLoc = playerList[p].location
    let pMoney = playerList[p].money
    let pProp = playerList[p].properties
    let pPropCount = playerList[p].properties.length
    let pPropName = locationProperties[pLoc].name
    let pPropPrice = locationProperties[pLoc].housePrice
    let pPropColour = locationProperties[pLoc].colour
    let pPropType = locationProperties[pLoc].propertyType
    console.log(pPropType)
    if(pPropType == "property"){
        if(pPropColour == "brown"){
            if(pPropCount == 0){
                if(pMoney >= pPropPrice){
                    pMoney = pMoney - pPropPrice
                    playerList[p].money = pMoney
                    pProp = pProp + (pPropName)
                    playerList[p].properties = pProp
                    document.getElementById("OutputLabel").innerHTML = document.getElementById("OutputLabel").innerHTML + "<br>Player " + (p+1) + " bought " + pPropName + " for " + pPropPrice + "!"
                }
            }
        }
    }
}
class Player{
    constructor(health){
        this.health = health;
    }
}
class Weapon{
    constructor(test){
        this.test = test;
    }
}
Weapon.test = 5
Player.health = 10
function init(){
    document.getElementById("output").innerHTML = Player.health + "," + Weapon.test
}
function attack(){
    document.getElementById("output").innerHTML = Object.getOwnPropertyNames(new Player)
}
let tick = setInterval(function tick(){
    console.log("1")
},1000)
function startTick(){
    setInterval(tick, 1000)
}
function stopTick(){
    clearInterval(tick)
}
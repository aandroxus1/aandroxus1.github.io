class Player{
    constructor(head, torso, armL, armR, legL, legR, dmg, xp, inventory){
        this.head = head
        this.torso = torso
        this.armL = armL
        this.armR = armR
        this.legL = legL
        this.legR = legR
        this.dmg = dmg
        this.xp = xp
        this.inventory = inventory
    }
}
//Default Player Health (For max-health checks)
Player[0].head = 400
Player[0].torso = 1000
Player[0].armL = 600
Player[0].armR = 600
Player[0].legL = 600
Player[0].legR = 600
Player[0].dmg = 100
//Current Player Health
Player[1].head = 400
Player[1].torso = 1000
Player[1].armL = 600
Player[1].armR = 600
Player[1].legL = 600
Player[1].legR = 600
Player[1].dmg = 100
class EnemyHealth{
    constructor(head, torso, armL, armR, legL, legR, dmg){
        this.head = head
        this.torso = torso
        this.armL = armL
        this.armR = armR
        this.legL = legL
        this.legR = legR
        this.dmg = dmg
    }
}

function playerAttack(tgt){
    let prevTgt = tgt
    tgt = tgt - Player.dmg
    let changePercent = prevTgt - tgt
}

function tick(){
    console.log(Player.head)
    document.getElementById("playerHead").innerHTML = "HEAD = " + Player.head
}
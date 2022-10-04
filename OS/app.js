function startToggle(){
    document.getElementById("startButton").style.borderColor = "grey black black grey";
    if(window.getComputedStyle(startMenu).display == "block") {
        document.getElementById("startMenu").style.display = "none"
    } else {
        document.getElementById("startMenu").style.display = "block"
    }
}
function startButtonDown(){
    document.getElementById("startButton").style.borderColor = "lightgrey white white lightgrey"
}
document.addEventListener("keydown", function(event){
    console.log(event.key)
    let key = event.key;
    if (key == "Control"){
        startButtonDown()
    }
})
document.addEventListener("keyup", function(event){
    console.log(event.key)
    let key = event.key;
    if (key == "Control"){
        startToggle()
    }
})
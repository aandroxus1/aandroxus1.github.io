function closeWebsite(){
    window.close()
}
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
    let key = event.key;
    if (key == "Control"){
        startToggle()
    }
})
function closeWindow(win){
    document.getElementById(win).style.display = "none"
}
function openWindow(win){
    document.getElementById(win).style.display = "block"
}
document.addEventListener('mousemove',(event) => {
    let x = event.pageX
    let y = event.pageY
    x = x + 20
    x = x + "px"
    y = y + "px"
    document.getElementById('follower').style.left = x
    document.getElementById('follower').style.top = y
});

function fNone(){
    document.getElementById('follower').style.display = "none"
}
function fBlock(){
    document.getElementById('follower').style.display = "block"
}

document.addEventListener('mouseover',(event) => {
    let d = document.getElementById('follower').style.display
    //console.log(event.target.id)
    let a = event.target.id
    let text = ""
    if(a == ""){
        fNone()
    }
    if(a == "taskbar"){
        fBlock()
        text = "Taskbar. Holds icons and the start button."
    }
    if(a=="startButton"){
        fNone()
    }
    if(a=="startMenu"){
        fNone()
    }
    if(a=="helpIcon"){
        fBlock()
        text = "Tips to get to know the OS."
    }
    
    document.getElementById('follower').innerHTML = text
})
function windowHandler(){
    let down = false
    document.addEventListener("mousedown", (event) => {
        if(event.target.className == "windowHeader"){
                down = true
                console.log(down)
                let windowDrag = event.target.parentNode.id
                console.log(windowDrag)
                let x = event.pageX
                let y = event.pageY
                x = x + "px"
                y = y + "px"
                console.log(x,y)

                document.addEventListener("mouseup", event => {
                    down = false
                    console.log(down)
                })
                document.addEventListener("mousemove", (event) => {
                    if(down==true){
                        let x = event.pageX
                        let y = event.pageY
                        x = x + "px"
                        y = y + "px"
                        document.getElementById(windowDrag).style.left = x
                        document.getElementById(windowDrag).style.top = y
                    }
                }) 
            }
        })

}
windowHandler()
function closeWebsite(){
    document.getElementById("screenOff").style.display = "block"
    document.getElementById("screenOff").style.opacity = 1
}
function openWebsite(){
    let startupAudio = new Audio ('/assets/Win95Startup.mp3')
    startupAudio.play() 
    document.getElementById("screenOff").style.opacity = 0
    setTimeout(function(){document.getElementById("screenOff").style.display = "none"}, 1000)
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
    let docWin = document.getElementById(win)
    docWin.style.display = "none"
    docWin.style.left = "1vw"
    docWin.style.top = "1vw"
}
function openWindow(win){
    let docWin = document.getElementById(win)
    docWin.style.display = "block"
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
    if(a=="screenOff"){
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
    if(a=="powerIcon"){
        fBlock()
        text = "Options to change power status."
    }
    if(a=="calcIcon"){
        fBlock()
        text = "calutor"
    }
    
    document.getElementById('follower').innerHTML = text
})
document.addEventListener("mousemove", (event) => {
    //let y = event.pageY
    //console.log(y)
    //console.log(window.screen.availHeight)
    let fHeight = document.getElementById("follower").style.height
    console.log(fHeight)
})
function windowHandler(){
    let down = false
    let windowDrag = ""
    document.addEventListener("mousedown", (event) => {
        windowDrag = event.target.parentNode.id
        if(event.target.className == "windowHeader"){
            down = true
            document.getElementById(windowDrag).style.zIndex = 9999
            console.log(down)
            document.addEventListener("mouseup", event => {
                down = false
                console.log(down)
                document.getElementById(windowDrag).style.zIndex = 0
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
//Application JS
function calcHost(){

}
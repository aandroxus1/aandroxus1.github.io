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
    if(window.getComputedStyle(startMenu).display == "block") {
        document.getElementById("startMenu").style.display = "none"
    } else {
        document.getElementById("startMenu").style.display = "block"
    }
}
function startButtonDown(){
    document.getElementById("startButton").style.borderColor = ""
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
    y = y - 20
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
document.addEventListener("mousemove", (e) => {
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
                if(document.getElementById(windowDrag) != null){document.getElementById(windowDrag).style.zIndex = 0}
            })
            document.addEventListener("mousemove", (event) => {
                if(down==true){
                    let x = event.pageX
                    let y = event.pageY
                    let w = document.getElementById(windowDrag).offsetWidth
                    w = w / 2
                    //console.log("W is ", w)
                    x = x - w
                    y = y - 5
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
    var operator = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
        '*': function(a, b) { return a * b },
        '/': function(a, b) { return a / b },
        '%': function(a, b) { return a % b },
    };
    let list = []
    let intList = []
    let num1 = 0
    let num2 = 0
    let result = 0
    let tempConcat = ""
    const operators = ["-","+","/","*","="]
    let isOperator = false
    let activeOperator = false
    function calculateResult(){
        console.log("calcResult")
        for (let i = 0; i < list.length; i++){
            //a
        }
    }
    function getInput(item){
        console.log(num1, num2, result)
        list = list.concat(item)
        console.log(list)
        if(isOperator == true && operators.includes(item)==true) {
            calculateResult()
        }
        if (operators.includes(item)){
            isOperator = true
            console.log(isOperator)
        }
    }
    console.log(list)
    calcHost.getInput = getInput
    calcHost.calculateResult = calculateResult
}
calcHost();
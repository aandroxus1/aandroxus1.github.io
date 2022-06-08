function startup(){
    document.getElementById("powerButton").style.position = "absolute"
    document.getElementById("powerButton").style.width = "10vw"
    document.getElementById("powerButton").style.top = "2vh"
    document.getElementById("powerButton").style.left ="45.5vw"
    setTimeout(function(){document.getElementById("pre_bootscreen").style.opacity = "0"}, 1000)
    setTimeout(function(){document.getElementById("pre_bootscreen").style.display = "none"}, 3000)
    setTimeout(function(){document.getElementById("bootscreen").style.display = "flex"},1000)
    setTimeout(sidebarLoader,3000)
}
function sidebarLoader(){
    document.getElementById("loadingInfo").innerHTML = "Loading sidebar..."
    document.getElementById("sidebar").style.display = "block"
    setTimeout(function(){document.getElementById("sidebar").style.opacity = "1"},2500)
    setTimeout(taskbarLoader, 4000)
}
function taskbarLoader(){
    document.getElementById("loadingInfo").innerHTML = "Loading taskbar..."
    document.getElementById("taskbar").style.display = "block"
    setTimeout(function(){document.getElementById("taskbar").style.opacity = "1"},2500)
    //setTimeout()
}
function loop(){
    const d = new Date();
    let hour = d.getHours()
    if (hour > 12){
        hour = hour - 12
    }
    let minute = d.getMinutes()
    let second = d.getSeconds()
    let percentSec = second / 60
    let percentSecAngle = percentSec * 360
    let exportSecondAngle = ("rotate("+percentSecAngle+"deg)")
    
    let percentMin = minute / 60
    let percentMinAngle = percentMin * 360 + (0.1*second)
    let exportMinuteAngle = ("rotate("+percentMinAngle+"deg)")

    let percentHr = hour / 12
    let percentHrAngle = percentHr * 360 + (0.5*minute)
    let exportHourAngle = ("rotate("+percentHrAngle+"deg)")

    if(hour < 10){
        hour = ("0"+hour)
    }
    if(minute < 10){
        minute = ("0"+minute)
    }
    if(second < 10){
        second = ("0"+second)
    }
    currentDigitalTime = (hour+":"+minute+":"+second) 

    document.getElementById("hourLine").style.transform = exportHourAngle
    document.getElementById("minuteLine").style.transform = exportMinuteAngle
    document.getElementById("secondLine").style.transform = exportSecondAngle
    document.getElementById("digitalTime").innerHTML = currentDigitalTime
    setTimeout(loop, 1000)
}
function start_create_Element(){
    let val = document.getElementById("varHolder").innerHTML
    let app = document.getElementById("newIconApp").classList
    if(val == "1"){
        document.getElementById("varHolder").innerHTML = "0"
        app.value = "state_0"
    } else {
        document.getElementById("varHolder").innerHTML = "1"
        app.value = "none"
    }

}
function create_Element(){
    let newLink = document.createElement("div")
    newLink.className = "desktopIcon"
    let linkTo = document.getElementById("linkTo").value;
    console.log(linkTo)
    let a = document.createElement("a")
    a.href = linkTo
    img = document.createElement("img")
    img.src="alec_blank.png"
    img.classList = "desktopIconB"
    a.appendChild(img)
    newLink.appendChild(a)
    let t = document.getElementById("desktopIconParent").childElementCount
    let d = new Date();
    d.setTime(d.getTime() + (3650 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = (t + "=" + newLink + ";" + expires)
    console.log((t + "=" + linkTo + ";" + expires))
    document.getElementById("desktopIconParent").appendChild(newLink)
}
function getCookies(){
    let c = document.cookie
    console.log(c)
} 
function deleteCookies() {
    var allCookies = document.cookie.split(';');
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires="
        + new Date(0).toUTCString();
}
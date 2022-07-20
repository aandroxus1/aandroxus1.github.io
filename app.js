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

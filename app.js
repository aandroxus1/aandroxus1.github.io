function loginError(){
    document.getElementById("errorDialogue").open=true;
    document.getElementById("error").loop = false;
    document.getElementById("error").play()
}
function closeError(){
    document.getElementById("errorDialogue").open=false;
    document.getElementById("error").pause()
    document.getElementById("error").currentTime=0
}
function diary_CloseHome(){
    document.getElementById("diaryBody").open=true;
    document.getElementById("diaryBody").style.animation="diaryBodyIn 1s"
    CloseHome()
}
function calc_CloseHome(){
    document.getElementById("calcBody").open=true;
    document.getElementById("calcBody").style.animation="calcBodyIn 1s"
    CloseHome()
}
function OpenHomeX(){
    document.getElementById("returnButton").close();
}
function CloseAll(){
    document.getElementById("diaryBody").open=false;
    document.getElementById("calcBody").open=false;
    document.getElementById("caesarBody").open=false;
}
function OpenHome(){
    //Add Close dialogs here
    document.getElementById("diaryBody").style.animation="diaryBodyOut 1s";
    document.getElementById("calcOutput").innerHTML=0
    document.getElementById("calcBody") .style.animation="calcBodyOut 1s";
    document.getElementById("caesarBody").style.animation="caesarBodyOut 1s"

    setTimeout(CloseAll,900)
    document.getElementById("main").open=true;
    document.getElementById("sidebar").open=true;
    document.getElementById("main").style.animation="dropDown 1s";
    document.getElementById("sidebar").style.animation="leftIn 2s";
    document.getElementById("returnButton").style.animation="rightOut 2s";
    setTimeout(OpenHomeX,900)
}
function CloseHomeX(){
    document.getElementById("main").open=false;
    document.getElementById("sidebar").open=false;

}
function CloseHome(){
    document.getElementById('main').style.animation="backUp 2s";
    document.getElementById('sidebar').style.animation="leftOut 2s";
    setTimeout(CloseHomeX,1950)
    document.getElementById("returnButton").open=true;
    document.getElementById("returnButton").style.animation="rightIn 4s";

}
function LoginClose(){
    document.getElementById("dialog").open=false;
}
function Enter()    {
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    if (username == "alec") {
        if (password =="pass")  {
            document.getElementById("password").value=""
            document.getElementById("dialog").style.animation="fadeOut 1s"
            setTimeout(LoginClose, 990)
            document.getElementById("win95startmp3").loop = false;
            document.getElementById("win95startmp3").play()
            OpenHome();
            
        }
        else{
            loginError();
        }
    }
    else{
        loginError();
    }
}
function passwordEntry(event) {
    var x = event.key;
    if (x == "Enter")   {
        Enter()
    }
    if (x=="Backspace") {
        document.getElementById("password").value="";
    }

}
function escError(event){
    var x = event.key;
    if (x == "Escape")   {
        closeError()
    }
}
function Cancel()   {
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}
// Diary Code
function DocumentAccess(){
    var content = document.getElementById("diaryText")
    fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {
        if(err) {
            console.log(err)
            return
        }
    })
}
//Calculator Code
class Operator {
    constructor(operator, type, complete) {
        this.assigned=false
        this.type=""
        this.complete=false
    }

}

function Calculator(inp){
    if (inp=="+" && Operator.assigned == false){
        Operator.type="+"
        Operator.assigned=true
    }
    if (inp=="-" && Operator.assigned == false){
        Operator.type="-"
        Operator.assigned=true
    }
    if (Operator.complete){
        document.getElementById("calcOutput").innerHTML=inp
        Operator.complete=false
    }
    else{
        document.getElementById("calcOutput").innerHTML+=inp
    }
    if (inp=="="){
        let formula = document.getElementById("calcOutput").innerHTML;
        formula_split = formula.split('+').join(',').split('-').join(',').split('/').join(",").split("*").join(",")
        document.getElementById("calcOutput").innerHTML=formula_split;
        Operator.complete=true
    }
    
}
//Caesar Code
function caesar_CloseHome(){
    document.getElementById("caesarBody").open=true;
    document.getElementById("caesarBody").style.animation="caesarBodyIn 1s"
    CloseHome()
}
function caesar_listener(){
    console.log(word_list)
    let finalList = []
    let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    let encrypt = document.getElementById("caesar_entry").value;
    encrypt = encrypt.toLowerCase();
    encrypt = encrypt.split("")
    for(let b of numbers){
        console.log(b , encrypt)
        let ascii_list = [];
        for (let x of encrypt){
            ascii_list.push(x.charCodeAt(0))
        }
        encrypt = []
        for (let x of ascii_list){
            x++;
            if ((String.fromCharCode(x)) == "{"){
                x = ("a".charCodeAt(0))
            }
            if ((String.fromCharCode(x)) == "!"){
                x = (" ".charCodeAt(0))
            }
            encrypt.push(String.fromCharCode(x))
        }
        finalList=finalList + "<br>"
        finalList = finalList + encrypt.join("")
    }
    console.log(finalList)
    document.getElementById("caesar_output").innerHTML=finalList + "<br>";
}
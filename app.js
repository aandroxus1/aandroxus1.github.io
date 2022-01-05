function loginError(){
    document.getElementById("errorDialogue").open=true;
    document.getElementById("error").loop = false;
    document.getElementById("error").play()
}
function loginClose_NewAccount(){
    document.getElementById("dialog").style.animation="fadeOut 1s"
    setTimeout(LoginClose,950)
    document.getElementById("NewAccount").open=true;
    document.getElementById("NewAccount").style.animation="fadeIn 1s"
}
function AccountCreation(name, username, password){
    const fs = require("fs");
    fs.appendFile("login.txt",(name,", ",username,", ",password));
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
}
function OpenHome(){
    //Add Open/Close dialogs here
    document.getElementById("diaryBody").style.animation="diaryBodyOut 1s";
    document.getElementById("calcOutput").innerHTML=0
    document.getElementById("calcBody") .style.animation="calcBodyOut 1s";

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
function Calculator(inp){
    if (inp=="="){
        let formula = document.getElementById("calcOutput").innerHTML;
        let var1=null;
        for (let i in formula.length){
            if (typeof formula[i] != "number"){
                break
            }
            else{
                var1.append(formula[i])
            }
        }
        document.getElementById("calcOutput").innerHTML=var1
    }
    else{
        document.getElementById("calcOutput").innerHTML=(document.getElementById("calcOutput").innerHTML+inp)
    }
}
//Caesar Code
function caesar_CloseHome(){
    document.getElementById("caesarBody").open=true;
    document.getElementById("caesarBody").style.animation="calcBodyIn 1s"
    CloseHome()
}
function caesar_listener(){
    let encrypt = document.getElementById("caesar_entry").value;
    let ascii_list = [];
    for (let x of encrypt){
        ascii_list.push(x.charCodeAt(0))
    }
    let output_list=[];
    for (let x of ascii_list){
        x++;
        output_list.push(x.fromCharCode(0))
    }
    document.getElementById("caesar_output").innerHTML=output_list;
    
}
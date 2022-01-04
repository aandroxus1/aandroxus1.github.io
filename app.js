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
}
function OpenHome(){
    /*Add Open/Close dialogs here*/
    document.getElementById("diaryBody").style.animation="diaryBodyOut 1s";
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
    fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {
        if(err) {
            console.log(err)
            return
        }
    })
}

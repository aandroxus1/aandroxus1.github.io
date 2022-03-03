function defTest(){
    alert("button1");
}
function anim_sidebarOut(){
    elem=document.getElementById("sidebar")
    elem.style.animation = ("0.7s sidebarOut");
    elem.style.left = "-17%";
}
function anim_sidebarIn(){
    elem=document.getElementById("sidebar")
    elem.style.animation = ("0.7s sidebarIn");
    elem.style.left = "0%";
}
console.log(document.getElementById("sidebar").attributes);
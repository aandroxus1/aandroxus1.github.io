const fs = require("fs");

function option1() {
    alert("hello")
}
function option2() {
    let data = "Testing the fs.writeFile R/W capability.";
    fs.appendFile("file.txt", data,[flag="a+"],function(err){
        if(err) throw err;
        console.log('IS WRITTEN')
        });
}

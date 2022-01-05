import { writeFileSync, readFileSync } from 'fs';

function learn(){
    console.log("xd")
}
function settings(){
    let data = "Testing the fs.writeFile R/W capability.";
    fs.appendFile("file.txt", data,function(err){
        if(err) throw err;
        console.log('IS WRITTEN')
        });
}

import { writeFileSync, readFileSync } from 'fs';

function learn(){
    console.log("xd")
}
function settings(){
    let data = "Testing the fs.writeFile R/W capability.";
    writeFileSync("questions.txt", data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(readFileSync("questions.txt", "utf8"));
        }
    });
}

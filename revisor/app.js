
function file_read(){
    text_list = document.getElementById("iframe").innerHTML
    let question = ""
    let questionList=""
    let answerList=""
    let scoreList = ""
    let stage = 1
    let toggleIf = true
    for (let i in text_list){
        if (stage = 1){
            if (i != ","){
                scoreList = scoreList + i
            }
        }

        if (stage = 2){
            if (i!=","){
                question = question + i
            }
        }
        if (stage = 3){
            questionList = questionList + question
            question = ""

        }
    }
    console.log(scoreList, questionList, answerList)
    console.log("done!")
    console.log(document.getElementById("iframe").innerText)
}
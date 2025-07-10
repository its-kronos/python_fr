export default async function interpreter(userCode, setTextOutput, setCodeRunning){
    //clear output/init
    setCodeRunning(true)
    var textOutput = ""
    setTextOutput(textOutput)

    textOutput = textOutput.concat("Placeholder output")

    setTextOutput(textOutput)
    
    for (let i = 0; i < 100000; i++) {
        console.log("Iteration:", i);
}

    //end output
    //setCodeRunning(false)
}
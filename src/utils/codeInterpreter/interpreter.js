import expressionHandler from "./lineHandler";
import extractLines from "./extractLines";

export default async function interpreter(userCode, setTextOutput, setCodeRunning){
    const EOL = "\n"
    userCode = extractLines(userCode)

    var storage = {
        variables : {},
        loops : {},
    }

    var lineNum = 0
    //clear output/init

    setCodeRunning(true)
    var textOutput = ""
    setTextOutput(textOutput)
    
    for (var line of userCode){
        lineNum+=1

        var handlerOutput = expressionHandler(line,storage,lineNum, "root")
        var message = handlerOutput[0]
        if (message=="err"){
            // ERROR
            e = handlerOutput[1]
        }
        var output = handlerOutput[1]

        textOutput = textOutput.concat(output)
        setTextOutput(textOutput)

    }
    
    //end output
    setCodeRunning(false)
}
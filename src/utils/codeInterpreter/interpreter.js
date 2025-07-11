import expressionHandler from "./expressionHandler";
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

        var output = expressionHandler(line,storage,lineNum, "root")

        textOutput = textOutput.concat(output)
        setTextOutput(textOutput)

    }
    
    //end output
    setCodeRunning(false)
}
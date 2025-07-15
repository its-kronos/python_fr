import lineHandler from "./lineHandler";
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
        try{
            var handlerOutput = lineHandler(line,storage,lineNum, "root")
        }
        catch(e){
            setTextOutput(e.message)
            setCodeRunning(false)
            throw new Error(e.message)
        }
        var output = handlerOutput

        textOutput = textOutput.concat(output)
        setTextOutput(textOutput)

    }
    
    //end output
    setCodeRunning(false)
}
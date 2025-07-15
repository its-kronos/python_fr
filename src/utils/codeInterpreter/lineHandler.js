import { simplifyExpression } from "./expressionUtility"
import {cleanupLine, tokenizeLine} from "./lineUtility"
import { checkVariableName, determineTypeFromVal } from "./variableUtility"

export default function lineHandler(line, storage, lineNum, key, tokenized = false){
    //cleanup line
    line = cleanupLine(line)
    //tokenize line
    if (!tokenized){
        line = tokenizeLine(line)
        console.log(line)
    }

    // VARIABLES
    if (line[1]==="="){
        var varName = line[0].trim()
        if (checkVariableName(varName)){
            var val =  simplifyExpression(line.slice(2), storage)

            var varType = determineTypeFromVal(val)
            
            storage.variables[varName] = [varType,val]
            console.log(storage)
        }
        else{
            throw new Error("ERROR ON LINE ".concat(lineNum))
        }
    }


    else{
        //ERROR
        throw new Error("ERROR ON LINE ".concat(lineNum))
    }
    return ""
}
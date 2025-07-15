import {cleanupLine, tokenizeLine} from "./lineUtility"
import { checkVariableName, determineTypeFromVal } from "./variableUtility"

export default function expressionHandler(line, storage, lineNum, key, tokenized = false){
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
            var val = line[2].trim()

            var varType = determineTypeFromVal(val)
            
            storage.variables[varName] = [varType,val]
            console.log(storage)
        }
        else{
            //ERROR
            console.log("ERR")
            return ""
        }
    }


    //else{
    //    //ERROR
    //    return ["",""]
    //}
    return ""
}
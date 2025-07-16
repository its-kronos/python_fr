import { simplifyExpression } from "./expressionUtility"
import {cleanupLine, tokenizeLine} from "./lineUtility"
import { checkVariableName, determineTypeFromVal } from "./variableUtility"

export default function lineHandler(line, storage, lineNum, key, tokenized = false){
    //cleanup line
    console.log(line)
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
            try{
                var val =  simplifyExpression(line.slice(2), storage)

                var varType = determineTypeFromVal(val)
                
                storage.variables[varName] = [varType,val]
                console.log(storage)
            }
            catch(e){
                throw new Error("ERROR DUE TO ".concat('"',e.message,"\" ON LINE ",lineNum))
            }
        }
        else{
            throw new Error("ERROR DUE TO VARIABLE NAMING ON LINE ".concat(lineNum))
        }
    }

    else if (line[0]=="imprimer"){
        //console.log(line.slice(2,-1))
        if (line[1]=="(" && line[line.length-1]==")"){
            var val = String(simplifyExpression(line.slice(2,-1), storage))
            return val.concat("\n")
        }
        else {
            throw new Error("An error with the print statement on line ".concat(lineNum))
        }   
    }


    else{
        //ERROR
        throw new Error("ERROR DUE TO UNRECOGNIZED COMMAND ON LINE ".concat(lineNum))
    }
    return ""
}
import { cleanupLine } from "./lineUtility"


function isEscaped(item, index){

}

function simplifyFunctions(expression,storage){
    return simplifyOperations(expression)
}

function simplifyOperations(expression){
    return expression[0]
}

export function simplifyExpression(expression, storage){
    console.log(expression)
    var newExpression = []

    var inQuote = false
    var quoteCharacter = null
    var escaped = false

    for (var i=0;i<expression.length;i++){
        var item = expression[i]
        var temp = NaN

        if (item===""){
            continue
        }
        
        else if (item=='"' || item=="'"){
            if (!escaped){

                if (inQuote){
                    if (quoteCharacter==item){
                        inQuote = false
                        quoteCharacter = null
                    }
                    else{
                        
                        temp = item
                    }
                }
                else if (!inQuote){
                    inQuote = true
                    quoteCharacter = item
                    newExpression.push("")
                }                
                

            }

            else{
                temp = item
                escaped = false
            }
        }


        else if (item=="\\"){
            if (inQuote){
                if (!escaped){
                    escaped = true
                    continue
                }
                else{
                    escaped = false
                    temp = item
                }
            }
            else{
                // ERROR
            }
        }


        else if (inQuote){
            temp = item
            console.log(temp)
        }

        else{

            item = item.trim()

            if (item===""){
                continue
            }

            else if (item in storage.variables){
                var v = storage.variables[item]
                if (!(v[0]=="func")){
                    newExpression.push(v[1])
                }
            }

            else if (!isNaN(Number(item))){
                newExpression.push(Number(item))
            }

            else{
                //temp = item
            }
        }



        if (escaped){
            newExpression[newExpression.length-1] = newExpression[newExpression.length-1].concat("\\")
            escaped = false
        }

        if (temp){
            newExpression[newExpression.length-1] = newExpression[newExpression.length-1].concat(temp)
        }
    }

    console.log(newExpression)
    //return "aevwavw"
    return simplifyFunctions(newExpression)
}
import { cleanupLine, tokenizeLine } from "./lineUtility"


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

                if (quoteCharacter==item){
                    escaped = false
                }
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
            if (item=="n"&&escaped){
                escaped = false
                temp = "\n"
            }
            else{
                temp = item
            }
        }

        else{

            item = item.trim()

            if (item===""){
                continue
            }

            else if (item in storage.variables){
                var v = storage.variables[item]
                if (!(v[0]=="function")){
                    newExpression.push(v[1])
                }
                else{
                    if (expression[i+1]=="("){
                        //function is called
            
                        
                        i++
                        var continueFunction = true
                        var numberParenthesis = 1

                        var args = [""]

                        while (continueFunction){
                            i++
                            if (!(expression[i]==",")){
                                if (expression[i]==")"){
                                    if (numberParenthesis==1){
                                        i++
                                        continueFunction = false
                                        continue
                                    }
                                    else{
                                        numberParenthesis-=1
                                        args[args.length-1] = args[args.length-1].concat(expression[i])
                                    }
                                }
                                else if (expression[i]=="("){
                                    numberParenthesis++
                                    args[args.length-1] = args[args.length-1].concat(expression[i])
                                }
                                else{
                                    args[args.length-1] = args[args.length-1].concat(expression[i])
                                }
                            }
                            else{
                                args.push("")
                            }

                            if (i>expression.length-1){
                                throw new Error("Function not closed")
                            }
                        }
                        

                        args = args.map(arg=>simplifyExpression(tokenizeLine(arg),storage))



                        if (item=="chaine"){
                            newExpression.push("")
                            if (args.length==1){
                                temp = String(args[0])
                            }
                            else{
                                throw new Error("Too many/little arguments!")
                            }
                        }
                        else if (item=="nombre"){
                            if (args.length==1){
                                newExpression.push(Number(args[0]))
                                if (isNaN(Number(args[0]))){
                                    throw new Error("tried converting non-number to number")
                                }
                            }
                            else{
                                throw new Error("Too many/little arguments!")
                            }
                        }
                        else if (item=="ajouter"){
                            if (args.length==2){
                                if (args[0][0]&&args[1][0]){
                                    newExpression.push("")
                                    temp = args[0].concat(args[1])
                                }
                                else if (!(isNaN(Number(args[0]))||isNaN(Number(args[1])))){
                                    newExpression.push(args[0]+args[1])
                                }
                                else{
                                    throw new Error("Tried adding incompatible types!")
                                }
                            }
                            else{
                                throw new Error("Too many/little arguments!")
                            }
                        }
                        else if (item=="soustraire"){
                            if (args.length==2){
                                if (!(isNaN(Number(args[0]))||isNaN(Number(args[1])))&&!(args[0][0]||args[1][0])){
                                    newExpression.push(args[0]-args[1])
                                }
                                else{
                                    throw new Error("Tried subtracting incompatible types!")
                                }
                            }
                            else{
                                throw new Error("Too many/little arguments!")
                            }
                        }
                        else if (item=="diviser"){
                            if (args.length==2){
                                if (!(isNaN(Number(args[0]))||isNaN(Number(args[1])))&&!(args[0][0]||args[1][0])){
                                    if (args[1]!==0){
                                        newExpression.push(args[0]/args[1])
                                    }
                                    else{
                                        throw new Error("Tried dividing by 0")
                                    }
                                }
                                else{
                                    throw new Error("Tried dividing incompatible types!")
                                }
                            }
                            else{
                                throw new Error("Too many/little arguments!")
                            }
                        }
                        else if (item=="multiplier"){
                            if (args.length==2){
                                if (args[0][0]&&!(isNaN(Number(args[1]))||args[1][0])){
                                    newExpression.push("")
                                    temp = args[0].repeat(args[1])
                                }
                                else if (args[1][0]&&!(isNaN(Number(args[0]))||args[0][0])){
                                    newExpression.push("")
                                    temp = args[1].repeat(args[0])
                                }
                                else if (!(isNaN(Number(args[0]))||isNaN(Number(args[1])))){
                                    newExpression.push(args[0]*args[1])
                                }
                                else{
                                    throw new Error("Tried multiplying incompatible types!")
                                }
                            }
                            else{
                                throw new Error("Too many/little arguments!")
                            }
                        }

                    }
                    else{
                        //function is not called
                        throw new Error("Function not called, did you mean to call it?")
                    }
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
            console.log("add slash ")
            newExpression[newExpression.length-1] = newExpression[newExpression.length-1].concat("\\")
            escaped = false
        }

        if (temp){
            console.log(temp)
            newExpression[newExpression.length-1] = newExpression[newExpression.length-1].concat(temp)
        }
    }

    console.log(newExpression)
    return simplifyFunctions(newExpression)
}
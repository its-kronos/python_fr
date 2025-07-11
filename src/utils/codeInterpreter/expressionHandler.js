export default function expressionHandler(line, storage, lineNum, key){
    // remove whitespace
    line = line.trim()


    //remove ()
    if (line[0]==="(" && line.slice(-1)===")"){
        line = line.slice(1,-1)
        return expressionHandler(line,storage,lineNum, key)
    }
    //INBUILT FUNCTIONS

    //print
    else if (line.slice(0,9) === "imprimer " || line.slice(0,9) ==="imprimer("){
        line = line.slice(8)
        line = expressionHandler(line,storage,lineNum,"print")
        if (line[0]=="string"){
            line = "'".concat(line[1],"'")
        }
        else{
            line = line[1]
        }
        return (line)
    }

    //EVALUATE

    //add
    else if (line.includes("+")){
        var splitLine = line.split("+")
        var line = ""



        while (splitLine.length>1){
            console.log(splitLine)
            var expression = splitLine[0]
            var expression2 = splitLine[1]

            var l = expressionHandler(expression,storage,lineNum,"add")
            var r = expressionHandler(expression2,storage,lineNum,"add")
            console.log(l)
            console.log(r)
            if (l[0]=="num"&&r[0]=="num"){
                line = line.concat(l[1]+r[1])
            }
            else if (l[0]=="string"&&r[0]=="string"){
                line = line.concat(l[1]+r[1])
            }
            else{
                // ERROR
                return ["",""]
            }


            splitLine = splitLine.slice(1)
            if (l[0]=="string"){
                splitLine[0] = "\"".concat(line,"\"")
            }
            else{
                splitLine[0] = line
            }
            line = ""

        }

        line = line.concat(splitLine[0])
        if (isNaN(Number(line))){
            return ["string",line]
        }
        else{
            return ["num",line]
        }
    }


//sub
    else if (line.includes("-")){
        var splitLine = line.split("-")
        var line = ""



        while (splitLine.length>1){
            var expression = splitLine[0]
            var expression2 = splitLine[1]

            var l = expressionHandler(expression,storage,lineNum,"sub")
            var r = expressionHandler(expression2,storage,lineNum,"sub")

            if (l[0] == "empty"){
                l = ["num",0]
            }

            if (l[0]=="num"&&r[0]=="num"){
                line = line.concat(l[1]-r[1])
            }
            else{
                // ERROR
                return ["",""]
            }


            splitLine = splitLine.slice(1)
                splitLine[0] = line
            line = ""

        }

        line = line.concat(splitLine[0])

        return ["num",Number(line)]
    }


//mult
    else if (line.includes("*")){
        var splitLine = line.split("*")
        var line = ""



        while (splitLine.length>1){
            var expression = splitLine[0]
            var expression2 = splitLine[1]

            var l = expressionHandler(expression,storage,lineNum,"mul")
            var r = expressionHandler(expression2,storage,lineNum,"mul")

            if (l[0]=="num"&&r[0]=="num"){
                line = line.concat(l[1]*r[1])
            }
            else{
                // ERROR
                return ["",""]
            }


            splitLine = splitLine.slice(1)
                splitLine[0] = line
            line = ""

        }

        line = line.concat(splitLine[0])

        return ["num",Number(line)]
    }



//div
else if (line.includes("/")){
        var splitLine = line.split("/")
        var line = ""



        while (splitLine.length>1){
            var expression = splitLine[0]
            var expression2 = splitLine[1]

            var l = expressionHandler(expression,storage,lineNum,"div")
            var r = expressionHandler(expression2,storage,lineNum,"div")


            if (l[0]=="num"&&r[0]=="num"&&!(l[1]===0)){
                line = line.concat(l[1]/r[1])
            }
            else{
                // ERROR
                return ["",""]
            }


            splitLine = splitLine.slice(1)
                splitLine[0] = line
            line = ""

        }

        line = line.concat(splitLine[0])

        return ["num",Number(line)]
    }




    //empty
    else if (line === ""){
        return ["empty",line]
    }

    //string
    else if (((line[0] ==="\"" && line.slice(-1)==="\"")||(line[0] ==="'" && line.slice(-1)==="'"))&&line.length>1){
        return ["string",line.slice(1,-1)]
    }

    //num
    else if (!(isNaN(Number(line)))){
        return ["num",Number(line)]
    }

    // bool
    else if (line==="True" || line==="False"){
        return ["bool",line]
    }

    else{
        //ERROR
        return ["",""]
    }
}
const inbuiltFunctions = [
    "chaine",
    "nombre",
    "ajouter",
    "soustraire",
    "diviser",
    "multiplier",
    "imprimer"
]

export function checkVariableName(name){
    if (!(isNaN(Number(name[0])))){
        return false
    }
    for (const i of inbuiltFunctions){
        if (name===i){
            return false
        }
    }
    return true
}

export function determineTypeFromVal(val){
    var varType
    if (val==="Vrai" || val==="Faux"){
                varType = "bool"
    }
    else if (val[0]){
                varType = "string"
    }
    else{
        if (val%1!==0){
            varType = "float"
        }
        else{
            varType = "int"
        }
    }
    return varType
}
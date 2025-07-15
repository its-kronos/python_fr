export function cleanupLine(line){
    // remove whitespace
    line = line.trim()
    //remove ()
    if (line[0]==="(" && line.slice(-1)===")"){
        line = line.slice(1,-1)
    }
    return line
}

export function tokenizeLine(line){
    line = line.split(/([+\-*/\=\\'"])/)
    return line.filter(i=>i!=="")
}
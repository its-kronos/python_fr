export default function extractLines (userCode){
    userCode = userCode.trim().split('\n');
    userCode = userCode.filter(line => line !== "")
    return (userCode)
}
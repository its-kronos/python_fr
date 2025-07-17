import Header from "@/utils/header";
import { Button } from "react-bootstrap";
import "@/Styles/global.css";
import { useState } from "react";
import interpreter from "@/utils/codeInterpreter/interpreter";

export default function Code(){
    const [codeRunning,setCodeRunning] = useState(false);
    const [userCode,setUserCode] = useState("");
    const [outputText, setOutputText] = useState("");


    const executeButtonClick = async () => {
        const code = userCode
        
        await interpreter(code, setOutputText, setCodeRunning)
    }

    return(
    <>
    <Header/>
    <div className="Content">

        <label className="form-label">Code</label>
        <textarea className="form-control inputText codeBox" placeholder="Entrez votre code ici..." spellCheck={false} onChange={(e)=>setUserCode(e.target.value)}></textarea>
        <Button variant="primary" className="execute" disabled={codeRunning} onClick={!codeRunning ? executeButtonClick : null}>{!codeRunning ? "Execute" : "Executing..."}</Button>
        <label className="form-label">Output</label>
        <div className="codeBox p-3 border bg-light text-wrap rounded outputText">
            <pre className={outputText ? "outputText" : "placeholderText"}>
                {outputText ? outputText : "Les résultats de votre code ici..."}
            </pre>
        </div>
        



    </div>
    </>
);
}
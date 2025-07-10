import Header from "@/utils/header";
import { Button } from "react-bootstrap";
import "@/Styles/global.css";

export default function Code(){
    return(
    <>
    <Header/>
    <div className="Content">
    <label for="username" class="form-label">Code</label>
    <textarea class="form-control"></textarea>
    <Button variant="primary">Execute</Button>
    <div class="vh25 p-3 border bg-light text-wrap rounded">
        
    </div>
    </div>
    </>
);
}
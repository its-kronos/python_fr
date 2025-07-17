import Header from "@/utils/header";
import "@/Styles/credits.css"

export default function Credits(){
    return(
    <>
    <Header/>
    <h1 className="creditsText margins">Created by its-kronos</h1>
    <h2 className="creditsText"><a className="creditsLink" href="https://github.com/its-kronos/python_fr">GITHUB REPO</a></h2>
    </>
);
}
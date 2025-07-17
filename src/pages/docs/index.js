import Header from "@/utils/header";
import { Accordion, AccordionBody, AccordionHeader } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/Styles/documentation.css";


export default function Docs(){
    return(
        <>
    
        <Header/>
        <h1 className="titleText">Documentation</h1>
        <hr></hr>
        <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Inbuilt Functions
                </Accordion.Header>

                <AccordionBody>

                <Accordion.Item eventKey="0-0">
                    <Accordion.Header>imprimer(input)</Accordion.Header>
                    <AccordionBody>Prints the input</AccordionBody>
                </Accordion.Item>

                <Accordion.Item eventKey="0-1">
                    <Accordion.Header>chaine(input)</Accordion.Header>
                    <AccordionBody>Convert input into a string</AccordionBody>
                </Accordion.Item>

                <Accordion.Item eventKey="0-2">
                    <Accordion.Header>nombre(input)</Accordion.Header>
                    <AccordionBody>Convert input into a number</AccordionBody>
                </Accordion.Item>

                </AccordionBody>


            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Operators
                </Accordion.Header>

                <Accordion.Body>

                    <Accordion.Item eventKey="1-0">
                        <Accordion.Header>ajouter(input1,input2)</Accordion.Header>
                        <AccordionBody>If both inputs are numbers, adds them together, but if both are strings, return them together</AccordionBody>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1-1">
                        <Accordion.Header>soustraire(input1,input2)</Accordion.Header>
                        <AccordionBody>If both inputs are numbers, subtract them</AccordionBody>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1-2">
                        <Accordion.Header>diviser(input1,input2)</Accordion.Header>
                        <AccordionBody>If both inputs are numbers, divide them</AccordionBody>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1-3">
                        <Accordion.Header>multiplier(input1,input2)</Accordion.Header>
                        <AccordionBody>If both inputs are numbers, multiply them, if one is a number and the other is a string, return the string repeated n amount of times</AccordionBody>
                    </Accordion.Item>
                
                </Accordion.Body>
                
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    Variables
                </Accordion.Header>
                <Accordion.Body>
                    To set a variable, just do the same as you normally would in Python: var = val
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        </>
    );
}
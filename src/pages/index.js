import { Button } from 'react-bootstrap';
import Header from '@/utils/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/Styles/home.css";

import { useEffect } from 'react';
import { useRouter } from 'next/router';




export default function Home() {
  const route = useRouter()
  
  const onButtonClick = ()=>{
    route.push("/code")
  }

  return (
    <>
    <Header/>
    <h1 className='titleText'>Python... but French</h1>
    <h3 className="margins explanationText">The story? There's practically none, but I thought that creating an Esolang would be cool, and what better way to do so than by simultaniously practicing the world language I'm learning at school!</h3>
    
    <h5 className="explanationText margins2">What are you waiting for? Go run your code!</h5>
    
    <Button className="redirectButton" onClick={onButtonClick}>Code now!</Button>
    </>
  );
}

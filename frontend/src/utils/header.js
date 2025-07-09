import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Navbar.Brand href="/">
      <img 

      src="/images/favicon.ico"
      width="50"
      height="50"
      />
      Python en Francais
      </Navbar.Brand>
      
    <Nav>
        <Nav.Link href="/docs">DOCS</Nav.Link>
        <Nav.Link href="/code">RUN CODE</Nav.Link>
    </Nav>

    <Nav className='ms-auto'>
        <Nav.Link href="/credits">CREDITS</Nav.Link>
    </Nav>

    </Navbar>
  );
}
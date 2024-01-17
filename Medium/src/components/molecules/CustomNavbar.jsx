import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomBrandLogo from '../atoms/CustomBrandLogo';
import { Button } from 'react-bootstrap';


const CustomNavbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', navScroll)
  }, [])

  const navScroll = () => {
    setScrollPos(window.scrollY)

  }
  const bgColor = scrollPos >= 100 ? "bg-white" : ""
  const buttonColor = scrollPos >= 100 ? "success" : "dark"
  return (
    <Navbar sticky="top" className={bgColor}>
      <Container>
        <Navbar.Brand href="#home"><CustomBrandLogo/></Navbar.Brand>
        <Nav>
          <Nav.Link className="d-none d-sm-none d-md-block" href="#home" style={{fontSize:"15px"}}>Our story</Nav.Link>
          <Nav.Link className="d-none d-sm-none d-md-block" href="#link" style={{fontSize:"15px"}}>Membership</Nav.Link>
          <Nav.Link className="d-none d-sm-none d-md-block" href="#link" style={{fontSize:"15px"}}>Write</Nav.Link>
          <Nav.Link href="#link" style={{fontSize:"15px"}}>Sign in</Nav.Link>
          <Button variant={buttonColor} className="py-1 rounded-pill">Get started</Button>
        </Nav> 
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
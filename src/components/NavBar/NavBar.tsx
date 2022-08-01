import React, {useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import './Navbar.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const onUpdateActiveLink = (value:string) =>{
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scroll': ''}  fixed='top'>
      <Container>
        <Navbar.Brand href="#home">S.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active nav-link': 'nav-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active nav-link': 'nav-link'} onClick={()=> onUpdateActiveLink('about')}>About us</Nav.Link>
            <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active nav-link': 'nav-link'} onClick={()=> onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active nav-link': 'nav-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

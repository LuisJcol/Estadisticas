import React, { useContext} from "react";
import { Link} from "react-router-dom";
import { Navbar, NavDropdown , Offcanvas, Nav, Container} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { FaLock, FaUser, FaListAlt, FaHome } from "react-icons/fa";







export default function Header(){

  const {signOut} = useContext(AuthContext);

  const closeSession = () => {
      signOut();
  }

    return(
        <>

          {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 navbarcss">
          <Container fluid>
            <Navbar.Brand as={Link} to="/Home"> <img
                        alt="Restaurant Tu Hogar"
                        src="https://www.urbe.edu/images/logo-urbe.gif"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '} URBE Estadisticas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/Home" className="active"><FaHome/><span className="px-3">Home</span></Nav.Link>
                  <Nav.Link as={Link} to="/User"><FaUser/><span className="px-3">Usuarios</span></Nav.Link>
                  <Nav.Link as={Link} to="/Report"><FaListAlt/><span className="px-3">Reportes</span></Nav.Link>
                  <NavDropdown
                    title="Luis Colmenarez"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
    
                    <NavDropdown.Item  onClick={() => closeSession()} className="Navop"><FaLock/> <span className="px-3">Log Out</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

        </>
    )
}
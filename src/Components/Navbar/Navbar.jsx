import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <NavbarBootstrap
        bg="dark"
        variant="dark"
        expand="lg"
        className="border-bottom border-light"
      >
        <Container>
          <NavbarBootstrap.Brand>
            <Link to="/">
              <img
                src="/logoconqueror.png"
                width="120"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-auto me-3"
          />
          <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <Link to="/category/paletas" style={{ textDecoration: "none" }}>
                <p className="text-light m-0 pe-5">Paletas</p>
              </Link>

              <Link
                to="/category/zapatillas"
                style={{ textDecoration: "none" }}
              >
                <p className="text-light m-0 pe-5">Zapatillas</p>
              </Link>

              <Link to="/category/remeras" style={{ textDecoration: "none" }}>
                <p className="text-light m-0 pe-5">Remeras</p>
              </Link>
            </Nav>
          </NavbarBootstrap.Collapse>
          <Cartwidget />
        </Container>
      </NavbarBootstrap>
      {children}
    </div>
  );
};

export default Navbar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

  const location = useLocation();

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
                alt="padel conqueror logo"
              />
            </Link>
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-auto me-3"
          />
          <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              {categoryList.map((category) => {
                return (
                  <Link
                    key={category.id}
                    to={category.path}
                    style={
                      location.pathname === category.path
                        ? {
                            color: "white",
                            textDecoration: "underline",
                            fontWeight: "bold",
                          }
                        : {
                            color: "white",
                            textDecoration: "none",
                          }
                    }
                  >
                    <p className="text-light m-0 pe-5">{category.title}</p>
                  </Link>
                );
              })}
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

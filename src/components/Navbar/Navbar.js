import React, { useState, useContext, useEffect } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Navbar.css";

export default function MenuBar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [dataInput, setDataInput] = useState("");
  const [userIsLogin, setIsLogin] = useState("");

  useEffect(() => {
    if (window.sessionStorage.getItem("User")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [userIsLogin]);

  const handleChange = (e) => {
    setDataInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDataInput("");
  };

  return (
    <Navbar
      className="color-nav"
      bg="dark" // Set background color to dark
      variant="dark" // Set navbar variant to dark
      expand="lg"
    >
      <Navbar.Brand href="#home">ChaatCharm</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/categories">Food Categories</Nav.Link>
          {!userIsLogin && <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>}
          {!userIsLogin && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          {userIsLogin && <Nav.Link as={Link} to="/user-profile">User Profile</Nav.Link>}
          {userIsLogin && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search by ingredient"
            className="mr-sm-2"
            value={dataInput}
            onChange={handleChange}
          />
          <Link to={`/search/${dataInput}`}>
            <Button type="submit" variant="dark"> {/* Use dark variant */}
              🔍
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

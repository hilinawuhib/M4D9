import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNavbar = (props) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Link to="/">
          <div className="nav-link">Home</div>
        </Link>

        <Link to="/register">
          <div className="nav-link">Registration</div>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;

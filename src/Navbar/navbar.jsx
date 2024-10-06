import React, { useContext, useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { data } from "../Images/data";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from "../component/contextstore/storedata";
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomNavbar = ({ onLogout }) => {
  const [menu, setMenu] = useState("menu");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { getTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setMenu(sectionId);
  };

  return (
    <Navbar expand="lg" className="md-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={data.logo} width={`50px`} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto" >
            <Nav.Link  as={Link} to="/" >
              <span className={menu === "Home" ? "active" : ""}
                onClick={() => setMenu("Home")}>Home</span>
            </Nav.Link>
            <Nav.Link >
              <span onClick={() => handleNavigation('/', 'menu')}
                className={menu === "menu" ? "active" : ""}>Menu</span>
            </Nav.Link>
            <Nav.Link>
              <span onClick={() => handleNavigation('/', 'download')}
                className={menu === "download" ? "active" : ""}>Mobile-app</span>
            </Nav.Link>
            <Nav.Link >
              <span onClick={() => handleNavigation('/', 'footer')}
                className={menu === "footer" ? "active" : ""}>Contact us</span>
            </Nav.Link>
          </Nav>

          <div className="serach">
            <Link to="/search">
            <img src={data.search_icon} alt="search_icon" />
            </Link>
            
            <div className="b-icon">
              <Link to="/cart">
                <img src={data.basket_icon} alt="basket-icon" />
              </Link>
              <div className={getTotal() === 0 ? "" : "dot"}></div>
            </div>
            <Dropdown className="profile-container" ref={dropdownRef}>
              <Dropdown.Toggle variant="link" id="dropdown-profile">
                <img src={data.profile_icon} alt="Profile" className="profile-image" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

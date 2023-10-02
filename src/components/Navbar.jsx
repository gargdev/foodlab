import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import Logo from "../assets/Artboard – 1.png";
import "./navbar.css";
import { Button, Dropdown, Offcanvas, Modal } from "react-bootstrap";
// import { Height } from "@mui/icons-material";

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // SCROLL

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // OFFCANVAS

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <nav className={navbarScrolled ? "scrolled" : "navbar"}>
        <div className="container nav-logo">
            <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="container nav-links">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>Services</li>
            </a>
            <a href="/services">
              <li>Gallery</li>
            </a>
            <a href="/about">
              <li>Co-traveller</li>
            </a>
            <a href="/about">
              <li>FAQs</li>
            </a>
            <a href="/about">
              <li>Contact Us</li>
            </a>
            <a href="/about">
              <li>Register</li>
            </a>
          </ul>
        </div>
        <div className="nav-menu">
          <button className="menu-icon" onClick={handleToggle}>
            <BsList size={24} />
          </button>
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(true)}
            placement="end"
            style={{ width: "250px" }}
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body className="menu">
              <ul className="nav-menu-links">
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/about">
                  <li>Services</li>
                </a>
                <a href="/services">
                  <li>Gallery</li>
                </a>
                <a href="/about">
                  <li>Co-traveller</li>
                </a>
                <a href="/about">
                  <li>FAQs</li>
                </a>
                <a href="/about">
                  <li>Contact Us</li>
                </a>
                <a href="/about">
                  <li>Register</li>
                </a>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

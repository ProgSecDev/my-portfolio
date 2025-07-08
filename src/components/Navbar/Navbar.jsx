import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../assets/Logo.png";
import ResumeButton from "../ResumeButton/ResumeButton";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const sections = ["home", "about-me", "skills", "projects", "contact-me"];
      let found = false;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (activeLink !== sections[i]) {
              setActiveLink(sections[i]);
              const newHash = `#${sections[i]}`;
              if (window.location.hash !== newHash) {
                window.history.replaceState(null, "", newHash);
              }
            }
            found = true;
            break;
          }
        }
      }

      if (!found && activeLink !== "home") {
        setActiveLink("home");
        if (window.location.hash !== "#home") {
          window.history.replaceState(null, "", "#home");
        }
      }

      updateNavbar(window.scrollY >= 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" });
            updateExpanded(false);
          }}
          className="d-flex"
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={() => {
                  updateExpanded(false);
                }}
                className={activeLink === "home" ? "active" : undefined}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#about-me"
                onClick={() => {
                  updateExpanded(false);
                }}
                className={activeLink === "about-me" ? "active" : undefined}
              >
                About Me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#skills"
                onClick={() => {
                  updateExpanded(false);
                }}
                className={activeLink === "skills" ? "active" : undefined}
              >
                My Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#projects"
                onClick={() => {
                  updateExpanded(false);
                }}
                className={activeLink === "projects" ? "active" : undefined}
              >
                My Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#contact-me"
                onClick={() => {
                  updateExpanded(false);
                }}
                className={activeLink === "contact-me" ? "active" : undefined}
              >
                Contact Me
              </Nav.Link>
            </Nav.Item>

            <ResumeButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

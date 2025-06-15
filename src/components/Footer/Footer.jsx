import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <span>
            Empowering your Software & Web with innovative design & solutions.
          </span>
        </Col> */}
        <Col md="12" className="footer-copywright">
          <span>© {year} Designed by Elie Ephram. All Rights Reserved.</span>
        </Col>
        {/* <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ProgSecDev"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/elie-ephram-280b90206/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/961xxxxxxxx" // Replace with your WhatsApp full number
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="whatsapp"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Footer;

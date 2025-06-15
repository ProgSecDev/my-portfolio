import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import BlurText from '../../components/BlurText/BlurText';
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const About = () => {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>About Me</h1>
              <p className="home-about-body">
                <BlurText
                  text="Hi, my name is Elie Ephram and I'm from Beirut, Lebanon."
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="mb-3 text-lg"
                />
                <BlurText
                  text="Experienced in software and web development with expertise in HTML, CSS, JavaScript. Specializing in modern web development using React.js, Next.js, Node.js, and Express.js."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="mb-3 text-lg"
                />
                <BlurText
                  text="Proficient in database management with MS SQL Server and MongoDB. Designing and building scalable web applications, optimizing backend performance and ensuring seamless frontend-backend integration."
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="mb-3 text-lg"
                />
                <BlurText
                  text="Key achievement: Developed and deployed multiple websites and worked on eCommerce platforms like Salesforce commerce cloud for Lebanon and UAE, significantly enhancing user experience and streamlining other processing."
                  delay={250}
                  animateBy="words"
                  direction="top"
                  className="mb-3 text-lg"
                />
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={LaptopImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Lets Connect</h1>
              <p>
                Let's discuss your next project.
              </p>
              <ul className="home-about-social-links">
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
            </Col>
          </Row>
        </Container>
      </Container>
    );
    
}

export default About
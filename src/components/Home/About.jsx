import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>About Me</h1>
              <p className="home-about-body">
                <p>Hi, my name is Elie Ephram and I'm from Beirut, Lebanon.</p>
                <p>Experienced in software and web development with expertise in
                HTML, CSS, JavaScript. Specializing in modern web development
                using React.js, Next.js, Node.js, and Express.js.</p>
                <p>Proficient in database management with MS SQL Server and MongoDB. Designing
                and building scalable web applications, optimizing backend
                performance and ensuring seamless frontend-backend integration.</p>
                <p>Key achievement: Developed and deployed multiple websites and
                worked on eCommerce platforms like Salesforce commerce cloud for
                Lebanon and UAE, significantly enhancing user experience and
                streamlining other processing.</p>
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
              <h1>FIND ME ON</h1>
              <p>
                Please don't hesitate to reach out to me and{" "}
                <span className="yellow">connect.</span>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/19sajib"
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
                    href="https://twitter.com/19sajib"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    aria-label="twitter"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/19sajib/"
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
                    href="https://leetcode.com/19sajib/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="instagram"
                  >
                    <SiLeetcode />
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
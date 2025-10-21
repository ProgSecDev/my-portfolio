import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlurText from '../../components/BlurText/BlurText';


const About = () => {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={18} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>About Me</h1>
              <div className="home-about-body">
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
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
    
}

export default About
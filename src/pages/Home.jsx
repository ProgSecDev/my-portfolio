import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import SplitText from "../components/SplitText/SplitText";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
                <SplitText
                  text="Hello there!"
                  className="text-2xl font-semibold text-center"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Elie Ephram </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home
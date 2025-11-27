import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GradientText from "../GradientText/GradientText";
import DecryptedText from "../DecryptedText/DecryptedText";


const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={18} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>About Me</h1>
            <div className="home-about-body">
              {/* <DecryptedText
text="Customize me"
speed={100}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/> */}

              <DecryptedText
                text=
                { `Full-stack web developer from Beirut, Lebanon, crafting modern, fast, and scalable digital experiences. Skilled in React.js, Next.js, Node.js, Express.js, and fluent in the core web trio HTML, CSS, and JavaScript. I build clean frontends, robust backends, and APIs that don’t break under pressure.
Experienced with MS SQL Server and MongoDB, optimizing queries, designing database schemas, and ensuring smooth,
efficient communication between the UI and the server like a well-tuned duet.
I’ve developed and deployed multiple production websites and eCommerce systems, including platforms serving businesses in
Lebanon and the UAE.
My work has directly improved performance, streamlined operations, and elevated the user experience
the kind of impact you feel, not just measure.
Driven by problem-solving, obsessed with clean architecture, and always building with intention. ` }
                speed={200}
                animateOn="view"
                revealDirection="left"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );

}

export default About
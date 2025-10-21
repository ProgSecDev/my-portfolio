import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../assets/Portfolio-profile.png";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import About from "../components/Home/About";
import Type from "../components/Home/Type";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import SplitText from "../components/SplitText/SplitText";
import ProjectCard from "../components/Projects/ProjectCard";
import spicyfood from "../assets/projects/spicy-food.png";
import admirelb from "../assets/projects/admirelb.png";
import naimcenter from "../assets/projects/naimcenter.png";
import ContactForm from "../components/Contact/Contactus";
import GlareHover from "../components/GlareHover/GlareHover";

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
              {/* <img
                src={profileImage}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "550px",
                  marginTop: "-80px",
                  zIndex: "1",
                }}
              /> */}
              <ProfileCard
  name="Elie Ephram"
  title="Software & Web Developer"
  // handle=""
  status="Online"
  contactText="Contact Me"
  avatarUrl={profileImage}
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about-me">
        <About />
      </Container>
      <Container fluid className="about-section" id="skills">
        <Container>
          <h1 className="project-heading">
            My Code <strong className="cyan"> DNA </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Stack & <strong className="cyan">Tools</strong>
          </h1>
          <Toolstack />
        </Container>
      </Container>

      {/* <div style={{ height: '600px', position: 'relative' }}>
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
  >
    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
      Hover Me
    </h2>
  </GlareHover>
</div> */}

      <Container fluid className="project-section" id="projects">
        <Container>
          <h1 className="project-heading">
            Built with <strong className="cyan">Passion </strong>
          </h1>
          <p style={{ color: "white" }}>
            Some of my proudest creations - crafted with code and caffeine.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <GlareHover
                width="100%"
                height="100%"
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{ border: "none", background: "transparent" }}
              >
                <ProjectCard
                  imgPath={spicyfood}
                  isBlog={false}
                  title="Spicy Food"
                  description={
                    <>
                  This project is a fully responsive static website developed for a Lebanese spice brand. The site showcases the company’s 
                  history, values, and diverse product offerings—from vibrant spice blends to private-label packaging solutions. <span className="cyan">Built with HTML, CSS, JavaScript & React.Js</span>, it features a sleek and visually rich layout, including high-resolution 
                  images and intuitive navigation. The design emphasizes user-friendly experience and aesthetic appeal, highlighting key 
                  product categories (Blends & Powders) and packaging types (Jar, Sachet, Bags, Silver Vacuum Bag).
                  </>
                  }
                  // ghLink="https://github.com/ProgSecDev/spicy-food"
                  link="https://spicyfoodlb.com/"
                />
              </GlareHover>
            </Col>

            <Col md={4} className="project-card">
              <GlareHover
                width="100%"
                height="100%"
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{ border: "none", background: "transparent" }}
              >
                <ProjectCard
                  imgPath={admirelb}
                  isBlog={false}
                  title="AdmireLB"
                  description={
                    <>
                    This project is a modern, responsive website built for admirelb, a multinational advertising agency headquartered in Lebanon. 
                    The site presents the agency’s mission, regional presence (Lebanon, Cyprus, KSA, Dubai, Qatar), and its core services—ranging from 
                    digital marketing strategies to creative graphic design. Developed using <span className="cyan">HTML, CSS, JavaScript, & React.Js</span>, the site focuses on clean visuals, 
                    smooth user interaction, and brand storytelling. The layout reflects AdmireLB’s professionalism while highlighting their values, 
                    client-centric approach, and long-standing industry experience.
                    </>
                    }
                  // ghLink="https://github.com/ProgSecDev/admire-lb"
                  link="https://progsecdev.github.io/admire-lb"
                />
              </GlareHover>
            </Col>

            <Col md={4} className="project-card">
              <GlareHover
                width="100%"
                height="100%"
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{ border: "none", background: "transparent" }}
              >
                <ProjectCard
                  imgPath={naimcenter}
                  isBlog={false}
                  title="Naim Center"
                  description={
                    <>
                    This project is a modern, responsive website built for Naim Center, a rental hub based in Jounieh, Lebanon. The site showcases the 
                    center’s core services—ranging from furnished apartments and studios to medical rentals and private storage. Developed using&nbsp;
                    <span className="cyan">WordPress</span> technology, the website focuses on clean visuals, intuitive navigation, and a seamless user experience. 
                    The layout reflects Naim Center’s professionalism while highlighting its flexibility, reliability, and commitment to 
                    serving both residential and medical clients.
                    </>
                    }
                  // ghLink="https://github.com/ProgSecDev/Naim-Center-Project"
                  link="https://www.naimcenter.com"
                />
              </GlareHover>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container style={{ padding: "60px" }} id="contact-me">
        <ContactForm />
      </Container>
    </section>
  );
};

export default Home;

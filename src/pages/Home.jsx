import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../assets/Profile-noBG.png";
import About from "../components/Home/About";
// import Type from "../components/Home/Type";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import SplitText from "../components/SplitText/SplitText";
import ProjectCard from "../components/Projects/ProjectCard";
import spicyfood from "../assets/projects/spicy-food.png";
import admirelb from "../assets/projects/admirelb.png";
import fivetrees from "../assets/projects/five-trees.png";
import solarpanel from "../assets/projects/Solar-Panels-System.png";
import TechBridge from "../assets/projects/BigTrade.png";
import ContactForm from "../components/Contact/Contactus";
import GlareHover from "../components/GlareHover/GlareHover.jsx";
import RotatingText from "../components/RotatingText/RotatingText.jsx";
import SplashCursor from '../components/SplashCursor/SplashCursor.jsx'
import ElectricBorder from "../components/ElectricBorder/ElectricBorder.jsx";


const Home = () => {
  return (
    <section>
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.3}
        CURL={5}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={5000}
        COLOR_UPDATE_SPEED={5}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#18FFFF"
      />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} xs={12} className="home-header">
              <h1 style={{ paddingBottom: 15, paddingTop: 20 }} className="heading">
                {" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
                <SplitText
                  text="Hello there!"
                  className="splitT text-2xl font-semibold text-center"
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
                I'm a <strong> <RotatingText
                  texts={['Software Developer', 'Full Stack Developer', 'Mobile App Developer', 'E-Commerce Expert']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  className="main-name" />
                </strong>
              </h1>

              <div style={{ padding: 30, textAlign: "left" }}>
                {/* <Type /> */}
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
              <ElectricBorder
                color="#18ffff"
                speed={1}
                chaos={0.12}
                borderRadius={16}
              >
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px 16px 16px",
                  gap: "6px",
                }}>
                  {/* Name & subtitle */}
                  <h2 style={{ color: "white", margin: 0, fontSize: "2rem", fontWeight: 700 }}>
                    Elie Ephram
                  </h2>
                  <p style={{ color: "#18ffff", margin: 0, fontSize: "1.2rem", opacity: 0.85 }}>
                    Software Developer
                  </p>

                  {/* Profile image */}
                  <img
                    src={profileImage}
                    alt="Elie Ephram"
                    style={{
                      width: "80%",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginTop: "6px",
                    }}
                  />

                  {/* Contact Me button - aligned bottom right */}
                  <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                    <button
                      className="btn btn-primary"
                      style={{ borderRadius: "8px", padding: "10px", width: "100%", marginTop: "6px" }}
                      onClick={() => document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Contact Me
                    </button>
                  </div>
                </div>
              </ElectricBorder>
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
                  link="https://www.admirelb.com"
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
                  imgPath={fivetrees}
                  isBlog={false}
                  title="Five Trees"
                  description={
                    <>
                      Five Trees Global Trading is a fully responsive branding and informational website built with <span className="cyan"> React.js</span>, crafted for a Cyprus-based Mediterranean export 
                      company specializing in halloumi cheese and extra virgin olive oil. The site presents the company's mission, values, and product offerings through 
                      a clean and elegant design that reflects the authenticity and craftsmanship behind every product. With a focus on storytelling and brand identity, 
                      the website highlights Five Trees' commitment to quality, sustainability, and tradition — connecting trusted Cypriot producers with international 
                      markets through a polished and professional digital presence..
                    </>
                  }
                  // ghLink="https://github.com/ProgSecDev/Naim-Center-Project"
                  link="https://www.fivetrees-cy.com"
                />
              </GlareHover>
            </Col>
          </Row>

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
                  imgPath={solarpanel}
                  isBlog={false}
                  title="Smart Solar System"
                  description={
                    <>
                      SSP is a full-stack e-commerce platform I built from the ground up using the MERN stack <span className="cyan"> (MongoDB, Express.js, React.js, Node.js)</span>, 
                      designed to bring clean, portable energy solutions to consumers. The platform offers a curated catalog of cutting-edge products including portable
                      power stations, home energy storage systems, expansion batteries, and portable solar panels. The customer-facing storefront delivers a seamless shopping experience with intuitive product browsing, 
                      detailed specifications, variant selection, and a secure checkout flow supporting both guest and authenticated users. On the backend, 
                      a robust admin dashboard provides full control over inventory management, product listings, order tracking, and customer data. Built with scalability 
                      and performance in mind, SSP leverages MongoDB's flexible document model for product data, JWT-based authentication for security, 
                      and a responsive React frontend that delivers a polished experience across all devices — making sustainable energy accessible with just a few clicks.
                    </>
                  }
                  // ghLink="https://github.com/ProgSecDev/Naim-Center-Project"
                  link=""
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
                  imgPath={TechBridge}
                  isBlog={false}
                  title="Tech Bridge"
                  description={
                    <>
                      Tech Bridge Group is your end-to-end IT partner, bridging the gap between technology and business with reliable, scalable, and
                      affordable solutions. It is designed to support secure network infrastructure, deliver enterprise-grade WiFi with site surveys
                      and tuning, engineer resilient servers and storage for maximum uptime, and deploy smart CCTV systems for monitoring and
                      retention. Developed using <span className="cyan">HTML, CSS, JavaScript, & React.Js</span>, the website focuses on clean visuals,
                      and smooth user interaction. The friendly IT support and strategic consultancy keep your roadmap clear and your operations
                      efficient, while open-source options ensure flexibility without vendor lock-in and it helps organizations across Lebanon and
                      the region innovate, connect, and build with confidence.
                    </>
                  }
                  // ghLink="https://github.com/ProgSecDev/big-trade"
                  link="https://www.tech-bridgegroup.com/"
                />
              </GlareHover>
            </Col>

            {/* <Col md={4} className="project-card"></Col>

            <Col md={4} className="project-card"></Col> */}
          </Row>
        </Container>
      </Container>

      <Container style={{ padding: "2px" }} id="contact-me">
        <ContactForm />
      </Container>
    </section>
  );
};

export default Home;

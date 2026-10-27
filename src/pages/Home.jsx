import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";

import profileImage from "../assets/Profile-noBG.png";

import About from "../components/Home/About";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import SplitText from "../components/SplitText/SplitText";

import ProjectCard from "../components/Projects/ProjectCard";
import ProjectDetailsModal from "../components/Projects/ProjectDetailsModal";

import spicyfood from "../assets/projects/spicy-food.png";
import admirelb from "../assets/projects/admirelb.png";
import fivetrees from "../assets/projects/five-trees.png";
import solarpanel from "../assets/projects/Solar-Panels-System.png";
import TechBridge from "../assets/projects/BigTrade.png";
import aishoppingassistant from "../assets/projects/ai-shopping-assistant.png";
import votingapp from "../assets/projects/Voting-App.png";

import ContactForm from "../components/Contact/Contactus";

import GlareHover from "../components/GlareHover/GlareHover.jsx";
import RotatingText from "../components/RotatingText/RotatingText.jsx";
import SplashCursor from "../components/SplashCursor/SplashCursor.jsx";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx";

const projects = [
  {
    id: 1,
    imgPath: spicyfood,
    title: "Spicy Food",
    link: "https://spicyfoodlb.com/",
    description: (
      <>
        This project is a fully responsive static website developed for a
        Lebanese spice brand. The site showcases the company's history,
        values, and diverse product offerings—from vibrant spice blends to
        private-label packaging solutions.{" "}
        <span className="cyan">
          Built with HTML, CSS, JavaScript & React.Js
        </span>
        , it features a sleek and visually rich layout, including
        high-resolution images and intuitive navigation. The design
        emphasizes user-friendly experience and aesthetic appeal,
        highlighting key product categories (Blends & Powders) and
        packaging types (Jar, Sachet, Bags, Silver Vacuum Bag).
      </>
    ),
  },
  {
    id: 2,
    imgPath: admirelb,
    title: "AdmireLB",
    link: "https://www.admirelb.com",
    description: (
      <>
        This project is a modern, responsive website built for admirelb,
        a multinational advertising agency headquartered in Lebanon.
        The site presents the agency's mission, regional presence
        (Lebanon, Cyprus, KSA, Dubai, Qatar), and its core services—
        ranging from digital marketing strategies to creative graphic
        design. Developed using{" "}
        <span className="cyan">
          HTML, CSS, JavaScript, & React.Js
        </span>
        , the site focuses on clean visuals, smooth user interaction,
        and brand storytelling. The layout reflects AdmireLB's
        professionalism while highlighting their values,
        client-centric approach, and long-standing industry experience.
      </>
    ),
  },
  {
    id: 3,
    imgPath: fivetrees,
    title: "Five Trees",
    link: "https://www.fivetrees-cy.com",
    description: (
      <>
        Five Trees Global Trading is a fully responsive branding and
        informational website built with{" "}
        <span className="cyan">React.js</span>, crafted for a Cyprus-based
        Mediterranean export company specializing in halloumi cheese
        and extra virgin olive oil. The site presents the company's
        mission, values, and product offerings through a clean and
        elegant design that reflects the authenticity and craftsmanship
        behind every product. With a focus on storytelling and brand
        identity, the website highlights Five Trees' commitment to
        quality, sustainability, and tradition — connecting trusted
        Cypriot producers with international markets through a
        polished and professional digital presence.
      </>
    ),
  },
  {
    id: 4,
    imgPath: solarpanel,
    title: "Smart Solar System",
    link: "",
    availableOnRequest: true,
    description: (
      <>
        SSP is a full-stack e-commerce platform I built from the ground
        up using the MERN stack{" "}
        <span className="cyan">
          (MongoDB, Express.js, React.js, Node.js)
        </span>
        , designed to bring clean, portable energy solutions to consumers.
        The platform offers a curated catalog of cutting-edge products
        including portable power stations, home energy storage systems,
        expansion batteries, and portable solar panels. The customer-facing
        storefront delivers a seamless shopping experience with intuitive
        product browsing, detailed specifications, variant selection,
        and a secure checkout flow supporting both guest and authenticated
        users. On the backend, a robust admin dashboard provides full
        control over inventory management, product listings, order
        tracking, and customer data. Built with scalability and
        performance in mind, SSP leverages MongoDB's flexible document
        model for product data, JWT-based authentication for security,
        and a responsive React frontend that delivers a polished
        experience across all devices — making sustainable energy
        accessible with just a few clicks.
      </>
    ),
  },
  {
    id: 5,
    imgPath: TechBridge,
    title: "Tech Bridge",
    link: "https://www.tech-bridgegroup.com/",
    description: (
      <>
        Tech Bridge Group is your end-to-end IT partner, bridging the gap
        between technology and business with reliable, scalable, and
        affordable solutions. It is designed to support secure network
        infrastructure, deliver enterprise-grade WiFi with site surveys
        and tuning, engineer resilient servers and storage for maximum
        uptime, and deploy smart CCTV systems for monitoring and
        retention. Developed using{" "}
        <span className="cyan">
          HTML, CSS, JavaScript, & React.Js
        </span>
        , the website focuses on clean visuals and smooth user interaction.
        The friendly IT support and strategic consultancy keep your roadmap
        clear and your operations efficient, while open-source options
        ensure flexibility without vendor lock-in and help organizations
        across Lebanon and the region innovate, connect, and build
        with confidence.
      </>
    ),
  },
  {
    id: 6,
    imgPath: aishoppingassistant,
    title: "Nexiva — AI Shopping Assistant",
    availableOnRequest: true,
    description: (
      <>
        Nexiva is a conversational AI shopping assistant built with{" "}
        <span className="cyan">
          Python + Streamlit, powered by Claude (Anthropic)
        </span>{" "}
        as its reasoning engine.

        It connects to a MongoDB product catalog and lets users describe
        what they're looking for in natural language — Nexiva then
        intelligently matches and recommends products in real time.

        <ol>
          <li>
            <span className="cyan">Claude-powered recommendations</span>
            {" "}— understands context, follow-ups, synonyms, and
            conversational nuance.
          </li>

          <li>
            <span className="cyan">Smart pre-filtering</span>
            {" "}— keyword scoring reduces token usage by ~80% before
            hitting the Claude API.
          </li>

          <li>
            <span className="cyan">Multi-turn memory</span>
            {" "}— tracks conversation history for follow-up queries
            like "show me something cheaper".
          </li>

          <li>
            <span className="cyan">Live product panel</span>
            {" "}— renders products with images, prices, discount badges,
            and reason tags.
          </li>

          <li>
            <span className="cyan">Voice responses</span>
            {" "}— optional TTS playback via pyttsx3 or gTTS.
          </li>

          <li>
            <span className="cyan">MongoDB integration</span>
            {" "}— live catalog with TTL-cached queries for performance.
          </li>

          <li>
            <span className="cyan">Modern dark UI</span>
            {" "}— custom CSS with sidebar, status indicators, and
            zoomable image modals.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 7,
    imgPath: votingapp,
    title: "Voting Management System",
    availableOnRequest: true,
    description: (
      <>
        A desktop-based Voting Management System developed using C#
        Windows Forms and Microsoft SQL Server.

        The application is designed to manage Council and Presidential
        elections, providing a secure, organized, and efficient voting
        process with voter authentication, anonymous ballot submission,
        automated vote counting, and real-time election results.

        <ol>
          <li>
            <span className="cyan">Member Authentication:</span>
            {" "}Secure voter identification using Member ID or barcode.
          </li>

          <li>
            <span className="cyan">Voter Eligibility Verification:</span>
            {" "}Ensures only registered and eligible members can participate.
          </li>

          <li>
            <span className="cyan">Duplicate Voting Prevention:</span>
            {" "}Prevents members from voting more than once per election round.
          </li>

          <li>
            <span className="cyan">Council Elections:</span>
            {" "}Supports voting for First, Second, and Third Place positions.
          </li>

          <li>
            <span className="cyan">Presidential Elections:</span>
            {" "}Allows members to select a single presidential candidate.
          </li>

          <li>
            <span className="cyan">Tie-Break Voting:</span>
            {" "}Supports a second voting round when candidates receive
            equal highest votes.
          </li>

          <li>
            <span className="cyan">Anonymous Voting:</span>
            {" "}Separates voter participation records from ballot
            selections to protect voter privacy.
          </li>

          <li>
            <span className="cyan">Vote Confirmation:</span>
            {" "}Allows voters to review their selections before submitting.
          </li>

          <li>
            <span className="cyan">Voting Countdown:</span>
            {" "}Provides a time limit for completing candidate selections.
          </li>

          <li>
            <span className="cyan">Election Administration:</span>
            {" "}Enables administrators to manually open, close, and
            monitor election rounds.
          </li>

          <li>
            <span className="cyan">Real-Time Results:</span>
            {" "}Automatically refreshes election results every five seconds.
          </li>

          <li>
            <span className="cyan">Candidate Rankings:</span>
            {" "}Displays leading candidates with photos, names,
            vote counts, and winner highlighting.
          </li>

          <li>
            <span className="cyan">SQL Server Integration:</span>
            {" "}Stores election data, candidates, ballots, voting rounds,
            and participation records in a relational database.
          </li>

          <li>
            <span className="cyan">
              Multi-Round Election Management:
            </span>
            {" "}Independently manages Council and Presidential elections,
            including their respective voting rounds.
          </li>
        </ol>

        <span className="cyan">Technologies Used:</span>{" "}
        C#, .NET, Windows Forms (WinForms), Microsoft SQL Server,
        ADO.NET, and Visual Studio.
      </>
    ),
  },
];

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact-me")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section>
      {/* Cursor Effect */}

      <SplashCursor
        rainbow={false}
        size={0.3}
        force={1}
        swirl={3}
        trail={1}
        clickSplash
        colorSpeed={0.5}
        intensity={1}
        momentum={1}
        shading={1}
        glow={0}
        quality="high"
        intro
        contained={false}
      />

      {/* Home Section */}

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} xs={12} className="home-header">
              <h1
                style={{
                  paddingBottom: 15,
                  paddingTop: 20,
                }}
                className="heading"
              >
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
                I'm a{" "}
                <strong>
                  <RotatingText
                    texts={[
                      "Software Developer",
                      "Full Stack Developer",
                      "Mobile App Developer",
                      "E-Commerce Expert",
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                    rotationInterval={2000}
                    className="main-name"
                  />
                </strong>
              </h1>

              <div
                style={{
                  padding: 30,
                  textAlign: "left",
                }}
              />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <ProfileCard
                name="Elie Ephram"
                title="Full Stack Developer"
                handle=""
                status="Available"
                contactText="Contact"
                avatarUrl={profileImage}
                iconUrl="/assets/demo/iconpattern.png"
                holo={0.8}
                glare={0.5}
                tiltStrength={12}
                parallax={8}
                radius={16}
                enableTilt
                intro
                showUserInfo
                enableMobileTilt={false}
                theme="dark"
                onContactClick={scrollToContact}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About Section */}

      <Container
        fluid
        className="home-about-section"
        id="about-me"
      >
        <About />
      </Container>

      {/* Skills Section */}

      <Container
        fluid
        className="about-section"
        id="skills"
      >
        <Container>
          <h1 className="project-heading">
            My Code <strong className="cyan">DNA</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Stack & <strong className="cyan">Tools</strong>
          </h1>

          <Toolstack />
        </Container>
      </Container>

      {/* Projects Section */}

      <Container
        fluid
        className="project-section"
        id="projects"
      >
        <Container>
          <h1 className="project-heading">
            Built with <strong className="cyan">Passion</strong>
          </h1>

          <p style={{ color: "white" }}>
            Some of my proudest creations - crafted with code and caffeine.
          </p>

          <Row
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            {projects.map((project) => (
              <Col
                md={4}
                key={project.id}
                className="project-card"
              >
                <GlareHover
                  width="100%"
                  height="100%"
                  glareColor="#ffffff"
                  glareOpacity={0.25}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  style={{
                    border: "none",
                    background: "transparent",
                  }}
                >
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    availableOnRequest={project.availableOnRequest}
                    onReadMore={() => setSelectedProject(project)}
                  />
                </GlareHover>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Contact Section */}

      <Container
        style={{ padding: "2px" }}
        id="contact-me"
      >
        <ContactForm />
      </Container>

      {/* Project Modal */}

      <ProjectDetailsModal
        project={selectedProject}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Home;
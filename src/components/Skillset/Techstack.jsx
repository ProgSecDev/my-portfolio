import React from "react";
import { Col, Row } from "react-bootstrap";

import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import js from '../../assets/skills/js.png';
import reactjs from '../../assets/skills/reactjs.png';
import nextjs from '../../assets/skills/nextjs.png';
import expressjs from '../../assets/skills/expressjs.png';
import nodejs from '../../assets/skills/nodejs.png';
import mongodb from '../../assets/skills/mongodb.png';
import sqlserver from '../../assets/skills/mssqlserver.png';
import tailwind from '../../assets/skills/Tailwind.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import typescript from '../../assets/skills/TypeScript.png';
import python from '../../assets/skills/python.png';

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <img src={html} alt="HTML"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={css} alt="CSS"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={js} alt="JavaScript"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={reactjs} alt="React JS"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={nextjs} alt="Next JS"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={expressjs} alt="Express JS"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={nodejs} alt="Node JS"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={mongodb} alt="MongoDB"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={sqlserver} alt="SQL Server"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={tailwind} alt="TailwindCSS"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={bootstrap} alt="Bootstrap"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={typescript} alt="TypeScript"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={python} alt="Python"/>
      </Col>
    </Row>
  );
}

export default Techstack;

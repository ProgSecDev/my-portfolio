import React from "react";
import { Col, Row } from "react-bootstrap";

import vscode from '../../assets/skills/vscode.png';
import postman from '../../assets/skills/postman.png';
import visualstudio from '../../assets/skills/Visual_Studio.png';

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2} className="tech-icons">
        <img src={vscode} alt="html"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={postman} alt="html"/>
      </Col>
      <Col xs={6} md={2} className="tech-icons">
        <img src={visualstudio} alt="html"/>
      </Col>
    </Row>
  );
}

export default Toolstack;

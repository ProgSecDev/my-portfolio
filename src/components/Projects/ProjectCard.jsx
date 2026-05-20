import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Card className="project-card-view" style={{ display: "flex", flexDirection: "column" }}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ height: "200px", objectFit: "contain", alignSelf: "flex-start", borderRadius: "10%" }}
      />
      <Card.Body style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Card.Title>{props.title}</Card.Title>

        <Button
          variant="outline-info"
          size="sm"
          onClick={() => setShowDesc(prev => !prev)}
          style={{ borderRadius: "8px", fontSize: "0.85rem" }}
        >
          {showDesc ? "Hide Description ▲" : "Read Project Description ▼"}
        </Button>

        {/* Smooth collapsible description */}
        <div style={{
          display: "grid",
          gridTemplateRows: showDesc ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s ease",
        }}>
          <div style={{ overflow: "hidden" }}>
            <Card.Text style={{ textAlign: "left", fontSize: "0.9rem", paddingTop: "4px" }}>
              {props.description}
            </Card.Text>
          </div>
        </div>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.ghLink && props.link && (
          <Button variant="primary" href={props.link} target="_blank"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FaExternalLinkAlt /> &nbsp; Visit Site
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
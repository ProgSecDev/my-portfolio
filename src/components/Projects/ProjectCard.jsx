import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  imgPath,
  title,
  isBlog = false,
  availableOnRequest = false,
  ghLink,
  link,
  demoLink,
  onReadMore,
}) => {
  return (
    <Card
      className="project-card-view"
      onClick={onReadMore}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onReadMore?.();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Read more about ${title}`}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
      }}
    >
      {/* Project Image */}

      <Card.Img
        variant="top"
        src={imgPath}
        alt={`${title} project`}
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flexGrow: 1,
        }}
      >
        {/* Project Title */}

        <Card.Title>{title}</Card.Title>

        {/* Available On Request Badge */}

        {availableOnRequest && (
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: "20px",
              border: "1px solid #18ffff",
              color: "#18ffff",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              opacity: 0.85,
            }}
          >
            🔒 Demo Available Upon Request
          </div>
        )}

        {/* Project Description Modal Button */}

        <Button
          type="button"
          variant="outline-info"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onReadMore?.();
          }}
          style={{
            borderRadius: "8px",
            fontSize: "0.85rem",
            padding: "9px 12px",
            transition: "all 0.3s ease",
          }}
        >
          Read Project Description ↗
        </Button>

        {/* External Links */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "auto",
          }}
        >
          {/* GitHub Link */}

          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              onClick={(e) => {
            e.stopPropagation();
            onReadMore?.();
          }}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsGithub />
              &nbsp;{isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Website Link */}

          {!ghLink && link && (
            <Button
              variant="primary"
              href={link}
              target="_blank"
              onClick={(e) => {
            e.stopPropagation();
            onReadMore?.();
          }}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaExternalLinkAlt />
              &nbsp; Visit Site
            </Button>
          )}

          {/* Demo Link */}

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              onClick={(e) => {
            e.stopPropagation();
            onReadMore?.();
          }}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CgWebsite />
              &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
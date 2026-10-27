import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./ProjectDetailsModal.css";

const ProjectDetailsModal = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements?.length) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        ref={modalRef}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          &times;
        </button>

        <div className="project-modal-content">
          <div className="project-modal-description">
            <span className="project-modal-label">
              PROJECT OVERVIEW
            </span>

            <h2 id="project-modal-title">{project.title}</h2>

            <div className="project-modal-divider" />

            <div className="project-modal-text">
              {project.description}
            </div>

            <div className="project-modal-actions">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  Visit Website <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="project-modal-availability">
                  Available on Request
                </span>
              )}
            </div>
          </div>

          <div className="project-modal-image-container">
            <img
              src={project.imgPath}
              alt={`${project.title} screenshot`}
              className="project-modal-image"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectDetailsModal;
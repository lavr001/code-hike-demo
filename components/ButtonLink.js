import React from "react";
import Link from "next/link";

const ButtonLink = ({
  href,
  children,
  id,
  tooltipText,
  tooltipActive,
  isFirstTooltip,
  isLastTooltip,
}) => {
  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      className="button-link-wrapper"
    >
      <Link
        href={href}
        passHref
        legacyBehavior={false}
        className="button-link"
        id={id}
        style={{
          display: "inline-block",
          width: "fit-content",
          padding: "0.5rem 1rem",
          marginTop: "1rem",
          backgroundColor: "var(--color-button-background)",
          color: "var(--color-button-text)",
          borderRadius: "0.25rem",
          textDecoration: "none",
          fontWeight: "600",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
      {tooltipActive && tooltipText && (
        <div className="tooltip">
          <p>{tooltipText}</p>
          {isFirstTooltip && (
            <button
              onClick={() =>
                window.globalHandleNextTooltip &&
                window.globalHandleNextTooltip()
              }
            >
              Next
            </button>
          )}
          {isLastTooltip && (
            <button
              onClick={() =>
                window.globalHandleEndGuide && window.globalHandleEndGuide()
              }
            >
              Got it!
            </button>
          )}
          <span className="tooltip-arrow"></span>
        </div>
      )}
    </div>
  );
};

export default ButtonLink;

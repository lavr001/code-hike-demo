import React from "react";
import Link from "next/link";

const ButtonLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      style={{
        display: "inline-block",
        width: "fit-content",
        padding: "0.5rem 1rem",
        marginTop: "1rem",
        backgroundColor: "var(--color-button-background)",
        color: "var(--color-button-text)",
        borderRadius: "0.25rem",
        textDecoration: "none",
        fontWeight: "bold",
      }}
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;

import React, { useState } from "react";

// Component API
/*
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        expanded={true} 
        className="box"

*/

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Hide text",
  buttonColor = "#ddd",
  expanded = false,
  className = "",
}) => {
  const [show, setShow] = useState(expanded);
  const content = show
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}... `;
  return (
    <div className={className}>
      <p>{content}</p>
      <span
        style={{ backgroundColor: buttonColor }}
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
};

export default TextExpander;

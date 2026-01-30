import React from "react";

const TypingArea = ({ text, typed }) => {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 8,
        background: "#0f172a",
        color: "#94a3b8",
        fontSize: 18,
        lineHeight: 1.6,
      }}
    >
      {text.split("").map((char, index) => {
        let color = "#94a3b8";

        if (index < typed.length) {
          color = typed[index] === char ? "#22c55e" : "#ef4444";
        }

        return (
          <span
            key={index}
            style={{
              color,
              textDecoration: index === typed.length ? "underline" : "none",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default TypingArea;

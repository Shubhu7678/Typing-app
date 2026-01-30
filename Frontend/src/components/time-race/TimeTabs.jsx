import React from "react";

const TimeTabs = ({ times, selectedTime, onSelect }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "#050b1c",
        padding: "6px",
        borderRadius: 10,
        gap: 6,
        marginBottom: "8px",
      }}
    >
      {times.map((time) => {
        const active = time === selectedTime;

        return (
          <button
            key={time}
            onClick={() => onSelect(time)}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: "none",
              color: active ? "#facc15" : "#9ca3af",
              fontSize: 13,
              fontWeight: active ? 600 : 500,
              transition: "all 0.15s ease",
            }}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default TimeTabs;

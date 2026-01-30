import React from "react";
import { IoMdRefresh } from "react-icons/io";

const RaceStats = ({ timeLeft, correct, wrong, onReset }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        marginBottom: 16,
        padding: "10px 14px",
        background: "#111827",
        border: "1px solid #374151",
        borderRadius: 10,
        width: "fit-content",
      }}
    >
      {/* Time */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#9ca3af", fontSize: 12 }}>time</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#e5e7eb" }}>
          {timeLeft}s
        </span>
      </div>

      {/* Divider */}
      <div
        style={{
          width: 1,
          height: 20,
          background: "#374151",
        }}
      />

      {/* Correct */}
      <div style={{ color: "#22c55e", fontWeight: 500 }}>
        ✔ {correct}
      </div>

      {/* Wrong */}
      <div style={{ color: "#ef4444", fontWeight: 500 }}>
        ❌ {wrong}
      </div>

      {/* Reset */}
      <IoMdRefresh
        size={18}
        onClick={onReset}
        style={{
          cursor: "pointer",
          color: "#9ca3af",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#facc15")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
      />
    </div>
  );
};

export default RaceStats;

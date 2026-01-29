import React, { useEffect, useState } from "react";

const textToType =
  "The quick brown fox jumps over the lazy dog typing speed improves with practice";

const TIMES = [15, 30, 45, 60];

const TimeRace = () => {
  const [selectedTime, setSelectedTime] = useState(15);
  const [timeLeft, setTimeLeft] = useState(15);
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState("");

  // timer logic
  useEffect(() => {
    if (!started || timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started, timeLeft]);

  // reset when tab changes
  const handleTabClick = (time) => {
    setSelectedTime(time);
    setTimeLeft(time);
    setStarted(false);
    setInput("");
  };

  // typing starts race
  const handleChange = (e) => {
    if (!started) setStarted(true);
    setInput(e.target.value);
  };

  return (
    <div style={{ padding: 24 }}>
      {/* Tabs */}
      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        {TIMES.map((time) => (
          <button
            key={time}
            onClick={() => handleTabClick(time)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: 6,
              border: "none",
              background: selectedTime === time ? "#2563eb" : "#e5e7eb",
              color: selectedTime === time ? "#fff" : "#000",
            }}
          >
            {time}s
          </button>
        ))}
      </div>

      {/* Race Box */}
      <div style={{ marginBottom: 12 }}>
        <strong>Time Left:</strong> {timeLeft}s
      </div>

      <div
        style={{
          padding: 16,
          borderRadius: 8,
          background: "#f3f4f6",
          marginBottom: 12,
        }}
      >
        {textToType}
      </div>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        disabled={timeLeft === 0}
        placeholder="Start typing here..."
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
        }}
      />

      {timeLeft === 0 && (
        <p style={{ marginTop: 12, color: "red" }}>
          ⏱ Time Over! Race finished.
        </p>
      )}
    </div>
  );
};

export default TimeRace;

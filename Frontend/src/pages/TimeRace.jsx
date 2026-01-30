import React, { useEffect, useState } from "react";
import RaceStats from "../components/time-race/RaceStats";
import TimeTabs from "../components/time-race/TimeTabs";
import TypingArea from "../components/time-race/TypingArea";
import styled from "styled-components";

const TEXT_POOL = [
  "Typing is a skill that improves steadily with time, patience, and consistent effort. Many people believe that speed comes naturally, but in reality, accuracy is the true foundation of fast typing. When you focus on pressing the correct keys and maintaining a steady rhythm, your fingers begin to memorize common patterns and movements. Over time, this muscle memory allows you to type without consciously thinking about each individual letter.",
  "Good posture also plays an important role in typing performance. Sitting upright, keeping your wrists relaxed, and positioning your fingers correctly on the keyboard can prevent fatigue and improve endurance during longer typing sessions. Taking short breaks between practice sessions helps maintain concentration and reduces strain on the hands.",
  "Typing practice should always be intentional. Instead of rushing through words, it is better to slow down and aim for precision. Mistakes slow you down more than careful typing ever will. As accuracy improves, speed naturally follows. This is why professional typists often appear calm and controlled rather than rushed.",
  "Consistency matters more than intensity. Practicing for a short period every day is far more effective than practicing for several hours once a week. Small daily improvements compound over time and lead to noticeable progress. Whether you are typing for work, coding, writing, or gaming, developing strong typing skills can save time and increase productivity.",
  "Speed will come naturally when accuracy becomes a habit",
  "A good posture and relaxed hands improve typing performance",
];

const TIMES = [15, 30, 45, 60];

const TimeRace = () => {
  const [selectedTime, setSelectedTime] = useState(15);
  const [timeLeft, setTimeLeft] = useState(15);
  const [started, setStarted] = useState(false);

  const [typed, setTyped] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [wpm, setWpm] = useState(null);
  const [textToType, setTextToType] = useState("");

  const getRandomText = () => {
    const index = Math.floor(Math.random() * TEXT_POOL.length);
    return TEXT_POOL[index];
  };

  useEffect(() => {
    setTextToType(getRandomText());
  }, []);

  /* TIMER */
  useEffect(() => {
    if (!started || timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [started, timeLeft]);

  /* WPM */
  useEffect(() => {
    if (timeLeft === 0 && started) {
      const words = correct / 5;
      const minutes = selectedTime / 60;
      setWpm(Math.round(words / minutes));
      setStarted(false);
    }
  }, [timeLeft]);

  /* RESET */
  const resetRace = (time = selectedTime) => {
    setSelectedTime(time);
    setTimeLeft(time);
    setStarted(false);
    setTyped("");
    setCorrect(0);
    setWrong(0);
    setWpm(null);
    setTextToType(getRandomText());
  };

  /* TYPING */
  const handleKeyDown = (e) => {
    if (timeLeft === 0) return;
    if (!started) setStarted(true);

    if (e.key === "Backspace") {
      setTyped((p) => p.slice(0, -1));
      return;
    }

    if (e.key.length !== 1) return;

    const index = typed.length;
    const expected = textToType[index];

    if (e.key === expected) setCorrect((c) => c + 1);
    else setWrong((w) => w + 1);

    setTyped((p) => p + e.key);
  };

  return (
    <TimeRaceWrapper
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
    <div className="time-container">
      <TimeTabs
        times={TIMES}
        selectedTime={selectedTime}
        onSelect={resetRace}
      />

      <RaceStats
        timeLeft={timeLeft}
        correct={correct}
        wrong={wrong}
        onReset={() => resetRace()}
      />

      <TypingArea text={textToType} typed={typed} />

      {timeLeft === 0 && (
        <div
          style={{
            marginTop: 24,
            padding: 20,
            borderRadius: 12,
            background: "#111827",
            border: "1px solid #374151",
            display: "flex",
            gap: 32,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          {/* WPM */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>WPM</div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#facc15",
              }}
            >
              {wpm}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 40,
              background: "#374151",
            }}
          />

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: "#22c55e" }}>
              ✔ Correct <strong>{correct}</strong>
            </div>
            <div style={{ color: "#ef4444" }}>
              ❌ Wrong <strong>{wrong}</strong>
            </div>
          </div>
        </div>
      )}
      </div>
    </TimeRaceWrapper>
  );
};

const TimeRaceWrapper = styled.div`
  background: #1e293b;
  height: 100%;
  .time-container{
    padding:24px;
  }
`;

export default TimeRace;

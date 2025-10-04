import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const textData = [
  "The quick brown fox jumps over the lazy dog. This sentence is often used as a typing exercise because it contains every letter of the English alphabet. Typing is a skill that improves with practice, and consistent effort leads to faster and more accurate results. Remember to maintain proper posture and keep your wrists relaxed while typing. Accuracy is more important than speed when you are learning. Over time, your speed will naturally increase as you become more comfortable with the keyboard layout. Practice makes perfect, and the more you type, the better you will become. Stay focused and enjoy the process of improving your typing skills.",

  "Technology has revolutionized the way we communicate and access information. The internet has made it possible to connect with people from all over the world instantly. Social media platforms allow us to share our thoughts, ideas, and experiences with a global audience. However, it is important to use technology responsibly and be mindful of the time we spend online. Balancing screen time with offline activities is essential for maintaining a healthy lifestyle. Reading books, spending time outdoors, and engaging in hobbies are great ways to relax and recharge. Remember to take breaks and prioritize your well-being in this digital age.",

  "The history of human civilization is a fascinating journey of discovery, innovation, and progress. From the invention of the wheel to the development of modern technology, humans have always sought to improve their lives through creativity and ingenuity. The Industrial Revolution marked a turning point in history, leading to rapid advancements in manufacturing, transportation, and communication. Today, we live in a world shaped by the achievements of those who came before us. It is important to learn from history and use that knowledge to build a better future. Education, collaboration, and empathy are key to addressing the challenges of our time.",

  "Nature is a source of inspiration and wonder. The beauty of a sunrise, the tranquility of a forest, and the majesty of a mountain range remind us of the incredible diversity of life on Earth. Protecting the environment is a responsibility we all share. Small actions, such as reducing waste, conserving water, and planting trees, can make a big difference. By working together, we can ensure that future generations inherit a planet that is healthy and thriving. Let us appreciate the natural world and do our part to preserve it for years to come.",

  "The power of storytelling lies in its ability to connect people and convey emotions. Stories have been a part of human culture for thousands of years, passed down through generations in the form of myths, legends, and folktales. They entertain, educate, and inspire us, offering insights into different perspectives and experiences. Whether through books, movies, or conversations, stories have the power to bring people together and foster understanding. In a world that is constantly changing, the timeless art of storytelling remains a vital way to share our humanity and build meaningful connections with one another.",
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [correctWords, setCorrectWords] = useState(0);
  const [incorrectWords, setIncorrectWords] = useState(0);
  const [remainingTime, setRemainingTime] = useState(30);
  const [startedTyping, setStartedTyping] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const textRef = useRef(null);

  const currentText = textData[currentTextIndex];

  // Start typing after countdown
  useEffect(() => {
    // console.log("startedTyping", startedTyping);
    if (countdown > 0 && startTyping) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (countdown === 0 && startedTyping) {
      console.log("Starting typing...");
      setIsTyping(true);
      const typingTimer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(typingTimer);
            setIsTyping(false);
            setStartedTyping(false);
            return 0;
          }
          //  const elapsedTime = 30 - prev + 1; // Time elapsed in seconds
          // const wordsTyped = typedText.trim().split(/\s+/).length;
          // setWpm(Math.round((wordsTyped / elapsedTime) * 60)); // WPM formula

          return prev - 1;
        });
      }, 1000);

      if (textRef.current) {
        textRef.current.focus();
      }
      return () => clearTimeout(typingTimer);
    }
  }, [countdown, isTyping, startedTyping]);

  useEffect(() => {
    if (elapsedTime > 0) {
      const wordsTyped = typedText.trim().split(/\s+/).filter(Boolean).length;
      setWpm(Math.round((wordsTyped / elapsedTime) * 60));
    }
  }, [typedText, elapsedTime]);

  // Handle key press to track typed words
  const handleKeyPress = (e) => {
    console.log(e.key);
    if (isTyping) {
      if (e.key === "Backspace") {
        setTypedText((prev) => prev.slice(0, -1));
      } else if (e.key === " ") {
        setTypedText((prev) => prev.trim() + " ");
        setCurrentWordIndex((prev) => prev + 1);
      } else if (e.key.length === 1) {
        setTypedText((prev) => prev + e.key);
      }
      const typedWordsArray = typedText.trim().split(/\s+/);
      const currentWordsArray = currentText.split(/\s+/);

      let correct = 0;
      let incorrect = 0;

      typedWordsArray.forEach((word, index) => {
        if (word === currentWordsArray[index]) {
          correct++;
        } else {
          incorrect++;
        }
      });

      setCorrectWords(correct);
      setIncorrectWords(incorrect);
    }
  };

  // Start typing session
  const startTyping = () => {
    setStartedTyping(true);
    setCountdown(3);
    setTypedText("");
    setCorrectWords(0);
    setIncorrectWords(0);
    setRemainingTime(30);
    setElapsedTime(0);
    setWpm(0);
  };

  return (
    <HomeWrapper onKeyDown={handleKeyPress} tabIndex="0" ref={textRef}>
      <div className="text-container">
        {currentText.split("").map((char, index) => {
          let status = "";
          if (index < typedText.length) {
            status = typedText[index] === char ? "correct" : "incorrect";
          } else if (index === typedText.length) {
            status = "current";
          }
          return (
            <span key={index} className={status}>
              {char}
            </span>
          );
        })}
      </div>
      <div className="language">english</div>
      <div className="controls">
        {countdown === 0 && !isTyping && !startedTyping && (
          <button className="start-button" onClick={startTyping}>
            Start
          </button>
        )}
        {countdown > 0 && (
          <div className="countdown">Starting in {countdown}...</div>
        )}
        {isTyping && (
          <div className="typing-status">
            Typing... Correct Words: {correctWords} | Incorrect Words:{" "}
            {incorrectWords} | Time Remaining: {remainingTime}s
          </div>
        )}
        {!isTyping && countdown === 0 && correctWords + incorrectWords > 0 && (
          <div className="result">
            You typed {correctWords} correct words and {incorrectWords}{" "}
            incorrect words in 30 seconds! Your WPM is {wpm}.
          </div>
        )}
      </div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 142px);
  background: #101828;
  color: var(--grey-100);
  font-family: "Courier New", Courier, monospace;
  outline: none;

  .text-container {
    width: 80%;
    max-width: 800px;
    background: #1d2939;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: left;
    color: #98a2b3;
    word-spacing: 0.2rem;
  }

  .correct {
    color: green;
  }
  .incorrect {
    color: red;
  }
  .current {
    border-left: 2px solid red;
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    0%,
    50% {
      border-color: red;
    }
    51%,
    100% {
      border-color: transparent;
    }
  }

  .cursor {
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }

  .language {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #667085;
  }

  .controls {
    margin-top: 1.5rem;
    text-align: center;
  }

  .start-button {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background: #667085;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;

    // &:hover {
    //   background: var(--primary-600);
    // }
  }

  .countdown {
    font-size: 1.2rem;
    font-weight: 600;
    color: #667085;
  }

  .typing-status {
    font-size: 1rem;
    font-weight: 500;
    color: #98a2b3;
  }

  .result {
    font-size: 1.2rem;
    font-weight: 600;
    color: #98a2b3;
    margin-top: 1rem;
  }
`;

export default Home;

// ...existing code...
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div className="left">
        <Link to="/" className="logo" aria-label="Typing App Home">
          <span className="logo-mark">T</span>
          <span className="logo-text">TypingApp</span>
        </Link>

        <nav className={open ? "open" : ""} aria-label="Main navigation">
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            to="/practice"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Practice
          </Link>
          <Link
            to="/leaderboard"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Leaderboard
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
            About
          </Link>
        </nav>
      </div>

      <div className="right">
        <div className="search" role="search" aria-label="Header search">
          <input
            className="search-input"
            type="search"
            placeholder="Search tests, users..."
            aria-label="Search"
          />
          <button className="icon-btn" aria-label="Search">
            🔍
          </button>
        </div>

        <button className="icon-btn" title="Settings" aria-label="Settings">
          ⚙️
        </button>

        <div className="avatar" title="Profile" aria-label="Profile">
          JD
        </div>

        <button
          className={`menu-toggle`}
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(90deg, #071026 0%, #0b1624 100%);
  color: #e6eef8;
  box-shadow: 0 2px 12px rgba(2, 6, 23, 0.6);
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(6px);

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
  }

  .logo-mark {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #2dd4bf, #06b6d4);
    color: #021026;
    font-weight: 800;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    display: flex;
    gap: 0.8rem;
    margin-left: 12px;
    align-items: center;
  }

  a.nav-link {
    color: #cfe9ff;
    text-decoration: none;
    padding: 0.45rem 0.6rem;
    border-radius: 6px;
    transition: background 160ms, color 160ms, transform 160ms;
    font-size: 0.95rem;
  }

  a.nav-link:hover {
    background: rgba(255, 255, 255, 0.03);
    color: #fff;
    transform: translateY(-1px);
  }

  .right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .search {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255, 255, 255, 0.02);
    padding: 0.25rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.03);
  }

  input.search-input {
    background: transparent;
    border: none;
    outline: none;
    color: #dbeafe;
    padding: 0.35rem 0.5rem;
    width: 200px;
    font-size: 0.95rem;
  }

  button.icon-btn {
    background: transparent;
    border: none;
    color: #cfe9ff;
    padding: 0.35rem;
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    background: linear-gradient(180deg, #0b1224 0%, #0f2432 100%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #bfe9ff;
    font-weight: 700;
    font-size: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.03);
  }

  .menu-toggle {
    display: none;
    background: transparent;
    border: none;
    width: 40px;
    height: 36px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
  }

  .menu-toggle .bar {
    display: block;
    height: 2px;
    width: 18px;
    background: #bcdff8;
    margin: 3px 0;
    border-radius: 2px;
  }

  @media (max-width: 900px) {
    nav {
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: linear-gradient(
        0deg,
        rgba(7, 16, 38, 0.98),
        rgba(7, 16, 38, 0.98)
      );
      flex-direction: column;
      gap: 0;
      padding: 0.6rem;
      transform: translateY(-10px);
      opacity: 0;
      pointer-events: none;
      transition: all 180ms ease;
      border-bottom: 1px solid rgba(255, 255, 255, 0.02);
    }

    nav.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    nav a.nav-link {
      padding: 0.8rem 1rem;
      border-radius: 6px;
    }

    input.search-input {
      width: 110px;
    }

    .menu-toggle {
      display: inline-flex;
    }
  }
`;

export default Header;

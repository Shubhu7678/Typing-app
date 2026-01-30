import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  /* close profile dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <HeaderWrapper>
      {/* LEFT */}
      <div className="left">
        <Link to="/" className="logo">
          <span className="logo-mark">T</span>
          <span className="logo-text">TypingApp</span>
        </Link>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="search">
          <input
            className="search-input"
            type="search"
            placeholder="Search tests, users..."
          />
          <button className="icon-btn">🔍</button>
        </div>

        <button className="icon-btn" title="Settings">
          ⚙️
        </button>

        {/* PROFILE */}
        <div className="profile" ref={profileRef}>
          <button className="avatar" onClick={() => setProfileOpen((v) => !v)}>
            JD
          </button>

          {profileOpen && (
            <div className="profile-dropdown">
              <button onClick={() => navigate("/settings")}>⚙ Settings</button>
              <button onClick={() => navigate("/account")}>
                📊 User Stats
              </button>
            </div>
          )}
        </div>

        {/* MOBILE MENU */}
        <button className="menu-toggle" onClick={() => setMenuOpen((s) => !s)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

/* ================== STYLES ================== */

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(90deg, #071026, #0b1624);
  color: #e6eef8;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

  .left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
  }

  nav {
    display: flex;
    gap: 10px;
  }

  .nav-link {
    color: #cfe9ff;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 6px;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .search {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 8px;
    padding: 4px;
  }

  .search-input {
    background: transparent;
    border: none;
    outline: none;
    color: #e6eef8;
    padding: 4px 8px;
    width: 180px;
  }

  .icon-btn {
    background: transparent;
    border: none;
    color: #cfe9ff;
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
  }

  .icon-btn:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .profile {
    position: relative;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(180deg, #0b1224, #0f2432);
    color: #bfe9ff;
    font-weight: 700;
    border: 1px solid rgba(255, 255, 255, 0.05);
    cursor: pointer;
  }

  .profile-dropdown {
    position: absolute;
    right: 0;
    top: 46px;
    background: #0b1224;
    border-radius: 10px;
    min-width: 180px;
    padding: 6px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .profile-dropdown button {
    width: 100%;
    background: transparent;
    border: none;
    color: #cfe9ff;
    padding: 10px;
    text-align: left;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
  }

  .profile-dropdown button:hover {
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 3px;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .menu-toggle .bar {
    width: 18px;
    height: 2px;
    background: #cfe9ff;
  }

  @media (max-width: 900px) {
    nav {
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: #071026;
      padding: 8px;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      transition: all 0.2s ease;
    }

    nav.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    .menu-toggle {
      display: flex;
    }

    .search-input {
      width: 120px;
    }
  }
`;

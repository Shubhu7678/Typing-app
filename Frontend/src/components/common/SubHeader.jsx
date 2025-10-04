import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SubHeader = () => {
  return (
    <SubHeaderWrapper>
      <div className="subheader-links">
        <NavLink
          to="/practice/home-row"
          className={({ isActive }) =>
            isActive ? "subheader-link active" : "subheader-link"
          }
        >
          Home Row Practice
        </NavLink>
        <div className="divider"></div>
        <NavLink
          to="/practice/other-keys"
          className={({ isActive }) =>
            isActive ? "subheader-link active" : "subheader-link"
          }
        >
          Other Key Practice
        </NavLink>
        <div className="divider"></div>
        <NavLink
          to="/practice/custom"
          className={({ isActive }) =>
            isActive ? "subheader-link active" : "subheader-link"
          }
        >
          Custom Practice
        </NavLink>
      </div>
    </SubHeaderWrapper>
  );
};

const SubHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
  background: #101828;
  color: #f2f4f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 60%;
  margin: 4px auto;
  border-radius: 12px;

  .subheader-links {
    display: flex;
    // gap: 1rem;
    align-items: center;
  }

  .subheader-link {
    text-decoration: none;
    color: var(--grey-400);
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: var(--grey-800);
      color: var(--grey-100);
    }

    &.active {
      background: var(--primary-500);
      color: var(--white);
      font-weight: 600;
    }
  }

  .divider {
    width: 1px;
    height: 20px;
    background: var(--grey-700);
  }
`;

export default SubHeader;

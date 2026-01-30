import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const menuData = [
  {
    title: "Solo",
    children: [
      { subtitle: "Home", link: "/" },
      { subtitle: "Time", link: "/time-race" },
      { subtitle: "Reports", link: "/reports" },
    ],
  },
  {
    title: "Users",
    children: [
      { subtitle: "All Users", link: "/users" },
      { subtitle: "Add User", link: "/users/add" },
      { subtitle: "Roles", link: "/users/roles" },
    ],
  },
  {
    title: "Products",
    children: [
      { subtitle: "All Products", link: "/products" },
      { subtitle: "Add Product", link: "/products/add" },
      { subtitle: "Categories", link: "/products/categories" },
    ],
  },
  {
    title: "Orders",
    children: [
      { subtitle: "All Orders", link: "/orders" },
      { subtitle: "Pending", link: "/orders/pending" },
      { subtitle: "Completed", link: "/orders/completed" },
    ],
  },
  {
    title: "Settings",
    children: [
      { subtitle: "Profile", link: "/settings/profile" },
      { subtitle: "Security", link: "/settings/security" },
      { subtitle: "Preferences", link: "/settings/preferences" },
    ],
  },
];


const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <div className="title">My App</div>

      <div className="menu">
        {menuData.map((menu, index) => (
          <div key={index}>
            <button
              className="menu-btn"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{menu.title}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="submenu">
                {menu.children.map((child, i) => (
                  <div onClick={() => navigate(child.link)} key={i} className="submenu-item">
                    {child.subtitle}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 260px;
  height: 100%;
  background-color: #030712; /* dark slate */
  color: #e5e7eb;
  padding: 16px;
  box-sizing: border-box;
  font-family: Inter, sans-serif;

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
    color: #ffffff;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .menu-btn {
    width: 100%;
    background: transparent;
    border: none;
    color: inherit;
    padding: 10px 12px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }

  .menu-btn:hover {
    background-color: #1e293b;
  }

  .submenu {
    margin-left: 12px;
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .submenu-item {
    padding: 8px 12px;
    font-size: 13px;
    border-radius: 6px;
    color: #9ca3af;
    cursor: pointer;
  }

  .submenu-item:hover {
    background-color: #1e293b;
    color: #ffffff;
  }
`;


export default Sidebar;
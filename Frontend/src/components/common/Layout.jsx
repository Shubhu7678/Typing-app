import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <div className="main-content">
        <Sidebar />
        <main className="body-content">
          <Outlet />
        </main>
      </div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  .main-content {
    display: flex;
    height: calc(100vh - 63px);
  }

  .body-content {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;

export default Layout;

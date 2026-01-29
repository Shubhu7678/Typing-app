import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <div>
        <Header />
      </div>
      <div className="main-content">
        <div>
          <Sidebar />
        </div>
        <main className="body-content">{children}</main>
      </div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  .main-content {
    display: flex;
    // gap: 2px;
    height: calc(100vh - 63px);
  }
  .body-content {
    width: 100%;
    height: 100%;
  }
`;

export default Layout;

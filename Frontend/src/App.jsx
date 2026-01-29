import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/common/Layout";
import TimeRace from "./pages/TimeRace";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time-race" element={<TimeRace/>} />
      </Routes>
    </Layout>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/common/Layout";
import TimeRace from "./pages/TimeRace";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <>
    <Routes>
      {/* Routes WITH layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/time-race" element={<TimeRace />} />
      </Route>

      {/* Route WITHOUT layout */}
      <Route path="/account" element={<ProfilePage />} />
    </Routes>
    </>
  );
};

export default App;

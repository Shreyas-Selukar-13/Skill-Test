import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import CalendarView from "./WeekView";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/calendar-view" element={<CalendarView />} />
      </Routes>
    </>
  );
};

export default App;

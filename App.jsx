import React, { useState } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";

const App = () => {
  const[isDark, isNotDark] = useState(JSON.parse(localStorage.getItem('DarkMode')))
  return (
    <ThemeContext.Provider value={[isDark, isNotDark]}>
      <Header/>
      <Outlet/>
    </ThemeContext.Provider>
  );
};

export default App;

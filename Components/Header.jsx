import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const [isDark, isNotDark] = useContext(ThemeContext)
  return (
    <>
      <header className={`header-container ${isDark && 'dark'}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer" onClick={()=>{
            isNotDark(!isDark)
            localStorage.setItem('DarkMode',!isDark)
          }}>
            <i className={`fa-solid fa-${isDark? "sun":"moon"}`}></i>&nbsp;&nbsp;{isDark? "light":"dark"} Mode
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;

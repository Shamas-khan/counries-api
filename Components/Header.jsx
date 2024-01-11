import React from "react";

import useTheme from "../hooks/usetheme";

const Header = () => {
  const [isDark, isNotDark] = useTheme()
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

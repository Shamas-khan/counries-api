import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";

import useTheme from "../hooks/usetheme";

const Home = () => {
    const [query, setquery] = useState("");
  const[isDark] = useTheme()
  return (
    <>
       <main className={`${isDark && 'dark'}`}>
        <div className="search-filter-container">
          <SearchBar setquery={setquery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main> 
    </>
  )
}

export default Home
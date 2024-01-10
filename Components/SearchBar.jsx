import React from 'react'

const SearchBar = ({setquery}) => {

  const handlechange = (e)=>{

    setquery(e.target.value.toLowerCase());
    
  }

  return (
    <>
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a country..." onChange={handlechange}/>
        </div>

    </>
  )
}

export default SearchBar
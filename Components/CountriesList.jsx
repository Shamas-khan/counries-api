import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const cachedData = sessionStorage.getItem("countriesData");

        if (cachedData) {
          setCountriesData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();

          setCountriesData(data);
          setLoading(false);

         
          sessionStorage.setItem("countriesData", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {loading ? 
          <CountryListShimmer />
       : (
        <div className="countries-container">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <CountryCard
                key={country.name.common}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.svg}
                imgalt={country.flags.alt}
                data={country}
              />
            ))
          ) : (
            <p>Country not found</p>
          )}
        </div>
      )}
    </>
  );
};

export default CountriesList;

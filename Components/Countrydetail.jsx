import React, {  useEffect, useState } from "react";
import { Link, useParams , useNavigate, useLocation} from "react-router-dom";
import useTheme from "../hooks/useTheme";

const Countrydetail = () => {
  const navigate = useNavigate();
  const params = useParams();``
  const {state} = useLocation();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false)
  const [isDark] = useTheme()

  function updateCountryData(data){
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies || {} )
        .map((currency) => currency.name )
        .join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      flag: data.flags.svg,
      borders: [],
    });
    if (!data.borders) {
      data.borders = []
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
      })
    ).then((borders) => {
      setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders })))
    })
  }
  useEffect(() => {
    if (state) {
      updateCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data)
      })
      .catch((err) => {
        console.log(err)
        setNotFound(true)
      })
  }, [countryName]);

  if (notFound) {
    return <div>country Not Fount</div>;
  }

  return countryData === null ? (
    "loading..."
  ) : (
    <main className={`${isDark && 'dark'}`}>
      <div className="country-details-container">
        <span className="back-button"  onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={countryData.name} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">
                  {countryData.population.toLocaleString("en-PK")}
                </span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
              
                  <b>Capital: </b>
                  <span className="capital">
                    {countryData.capital
                      ? countryData.capital.join(", ")
                      : "Not available"}
                  </span>
                </p>
              
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            {countryData.borders.length !==0 && <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countryData.borders.map((border) => (
                <Link to={`/${border}`} key={border}>
                  {border}
                </Link>
              ))}
            </div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Countrydetail;

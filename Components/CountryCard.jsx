import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({
  countryName,
  population,
  region,
  capital,
  flag,
  imgalt,
  data
}) => {
  return (
    <>
      <Link className="country-card" to={`/${countryName}`} state={data}>
        <img src={flag} alt={imgalt ?? countryName}  height={125} width='100%'/>
        <div className="card-text">
          <h3 className="card-title">{countryName}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-PK")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital ?? "null"}
          </p>
        </div>
      </Link>
    </>
  );
};

export default CountryCard;

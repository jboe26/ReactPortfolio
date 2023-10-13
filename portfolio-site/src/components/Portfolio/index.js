import React from "react";
import MickeyHerring from "../../assets/images/MickeyHerringTaxidermy.jpeg";
import KathySite from "../../assets/images/KathysHomeandPet.jpeg";
import "./index.scss";

const Portfolio = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1 className="portfolio-section">Portfolio</h1>

        <h1 className="projects">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mickeyherringtaxidermy.org"
          >
            Mickey Herring Taxidermy
          </a>
        </h1>
        <img
          className="avatar"
          src={MickeyHerring}
          alt="taxidermy"
          style={{
            width: 400,
            height: 300,
          }}
        />

        <h1 className="projects">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://kathyshomeandpet.com"
          >
            Kathy's Home & Pet
          </a>
        </h1>
        <img
          className="avatar"
          src={KathySite}
          alt="homepet"
          style={{
            width: 400,
            height: 300,
          }}
        />

        <br />
        <br />
      </div>
    </div>
  );
};

export default Portfolio;

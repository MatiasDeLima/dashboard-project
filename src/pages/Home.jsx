import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home section">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">
            Monitoramento <br />
            macro regional.
          </h1>

          <p className="home__description">
            Um dos maiores desafios enfrentados pelas cidades é a busca por um
            desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o
            planejamento cuidadoso do uso da terra, infraestrutura, transporte e
            para seus habitantes.
          </p>

          <Link>
              <button className="button">Começar</button>
          </Link>
        </div>

        <div className="home__image">
          <img src="src/assets/home-image.svg"/>
        </div>
      </div>
    </section>
  );
};

export default Home;

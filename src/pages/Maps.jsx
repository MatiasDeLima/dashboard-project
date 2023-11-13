import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Maps.css";

const Maps = () => {
  const [Toggle, showDropdown] = useState(false);
  return (
    <section className="maps section">
      <div className="maps__container container grid">
        <div className="maps__image"></div>

        <div className="state__form">
          <div className="maps__logos">
            <img src="./src/assets/map-logo-1.svg" />
            <img src="./src/assets/map-logo-1.svg" />
          </div>

          <div
            className={
              Toggle ? "state__dropdown show-dropdown" : "state__dropdown"
            }
          >
            <button
              className="dropdown__button"
              onClick={() => showDropdown(!Toggle)}
            >
              <i class="ri-global-line dropdown__icon"></i>
              <span className="dropdown__name">Escolha a cidade</span>

              <div className="dropdown__icons">
                <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                <i class="ri-close-line dropdown__close"></i>
              </div>
            </button>

            <ul className="dropdown__menu">
              <li className="dropdown__item">
                <span>João Pessoa</span>
              </li>

              <li className="dropdown__item">
                <span>Natal</span>
              </li>

              <li className="dropdown__item">
                <span>Recife</span>
              </li>

              <li className="dropdown__item">
                <span>Rio de Janeiro</span>
              </li>
            </ul>
          </div>

          <div className="maps__bottom grid">
            <div className="maps__input">
              <i class="ri-calendar-line"></i>
              <input type="text" placeholder="Input" />
            </div>

            <div className="maps__input">
              <i class="ri-search-line"></i>
              <input type="text" placeholder="Pesquisa" />
            </div>

            <div className="maps__buttons grid">
            <Link>
              <button className="button">Google Maps</button>
            </Link>

            <Link>
              <button className="button">MM-UI</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;

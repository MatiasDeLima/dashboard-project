import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/State.css";

const State = () => {
  /*=============== TOGGLE DROPDOWN ===============*/
  const [Toggle, showDropdown] = useState(false);

  return (
    <section className="state section">
      <div className="state__container container grid">
        <div className="state__map">
          <div className="state__map-point">
            <img src="src/assets/map-location-point.svg" />

            <div className="map__point-content">
              <span className="map__point-title">Região Norte</span>

              <p className="map__point-description">
                No momento esta região esta indisponível para uso! por favor
                escolher outra região.
              </p>
            </div>
          </div>

          <img src="src/assets/brazil-map.svg" />
        </div>

        <div className="state__form">
          <div className="state__logo">
            <i class="ri-map-pin-2-fill"></i>
          </div>

          <h3 className="state__title">Escolha seu estado</h3>

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
              <span className="dropdown__name">Escolha o estado</span>

              <div className="dropdown__icons">
                <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                <i class="ri-close-line dropdown__close"></i>
              </div>
            </button>

            <ul className="dropdown__menu">
              <li className="dropdown__item">
                <span>Paraiba</span>
              </li>

              <li className="dropdown__item">
                <span>Rio Grande do sul</span>
              </li>

              <li className="dropdown__item">
                <span>Fortaleza</span>
              </li>

              <li className="dropdown__item">
                <span>Manaus</span>
              </li>
            </ul>
          </div>

          <Link>
            <button className="button">Continuar</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default State;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/State.css";

const City = () => {
  const [Toggle, showDropdown] = useState(false);

  return (
    <section className="state section">
      <div className="state__container container grid">
        <div className="state__map">
          <img src="src/assets/cidade-map.svg" />
        </div>

        <div className="state__form">
          <div className="state__logo">
            <i class="ri-map-pin-2-fill"></i>
          </div>

          <h3 className="state__title">Escolha sua cidade</h3>

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

          <Link>
            <button className="button">Continuar</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default City;

import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = ({ OpenSidebar }) => {
  const acessToken = false;
  /*=============== SHOW MODAL ===============*/
  const [Toggle, showModal] = useState(false);

  /*=============== PAGE VALIDATION ===============*/
  const location = useLocation();
  const path = location.pathname;

  // Lista de endpoints dashboard pages
  const validEndpoints = [
    "/dashboard",
    "/economia",
    "/genurbano",
    "/inovacoes",
    "/meioambiente",
  ];
  const isDashboard = validEndpoints.includes(path);

  // Lista de endpoints normal pages
  const validEndpointsContainer = [
    "/",
    "/city",
    "/login",
    "/register",
    "/state",
    "/monitoramento",
    "/consorcio",
    "/maps",
  ];
  const isNormalContainer = validEndpointsContainer.includes(path);

  return (
    <header className={`header ${isDashboard ? "header-padding" : " "}`}>
      <div
        className={`header__container ${isNormalContainer ? "container" : " "}`}
      >
        <a
          href="/"
          className={`header__logo ${isDashboard ? "hidden-element" : " "}`}
        >
          <img src="/src/assets/logo-icon.svg" />
          MM-UI
        </a>

        <div
          className={`header__search ${
            isNormalContainer ? "hidden-element" : " "
          }`}
        >
          <input
            type="search"
            placeholder="Search..."
            className="header__input"
          />
          <i className="ri-search-line"></i>
        </div>

        <div className="header__buttons">
          <div className="theme__button">
            <i className="ri-moon-line"></i>
          </div>

          {
            acessToken ? (
            <>
              <div
                className="header__profile"
                onClick={() => showModal(!Toggle)}
              >
                <div className="header__profile-data">
                  <div className="header__profile-icon">
                    <i className="ri-user-3-line"></i>
                  </div>

                  <span className="header__profile-name">Lucas</span>
                </div>

                <div className="profile__arrow">
                  <i className="ri-arrow-down-s-line"></i>
                </div>

                <div
                  className={
                    Toggle
                      ? "profile__modal show__profile-modal"
                      : "profile__modal"
                  }
                >
                  <ul className="profile__modal-list">
                    <li className="profile__modal-item">
                      <i class="ri-settings-2-line"></i>
                      <span className="profile__modal-name">Configurações</span>
                    </li>

                    <li className="profile__modal-item">
                      <i class="ri-account-box-line"></i>
                      <span className="profile__modal-name">Perfil</span>
                    </li>

                    <li className="profile__modal-item">
                      <i class="ri-logout-box-line"></i>
                      <span className="profile__modal-name">Sair</span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="buttons__actions">
                <Link to="/login">
                  <span className="button--ghost">Entrar</span>
                </Link>

                <Link to="/register">
                  <button className="button header__button">Registrar</button>
                </Link>
              </div>
            </>
          )}

          <div
            className={`header__toggle ${
              isNormalContainer ? "hidden-element" : " "
            }`}
            onClick={OpenSidebar}
          >
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

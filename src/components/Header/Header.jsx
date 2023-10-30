import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__search">
          <input
            type="search"
            placeholder="Search..."
            className="header__input"
          />
          <i className="ri-search-line"></i>
        </div>

        <div className="header__buttons">
          <div className="theme__button">
            <i class="ri-moon-line"></i>
          </div>

          <div className="header__profile">
            <div className="header__profile-data">
              <div className="header__profile-icon">
                <i class="ri-user-3-line"></i>
              </div>

              <span className="header__profile-name">Lucas</span>
            </div>

            <div className="profile__arrow">
              <i class="ri-arrow-down-s-line"></i>
            </div>
          </div>

          <div className="header__toggle">
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

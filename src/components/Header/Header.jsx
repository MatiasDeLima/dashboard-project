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

        <div className="header__toggle">
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

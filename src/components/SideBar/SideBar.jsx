import "./SideBar.css";

const SideBar = () => {

  return (
    <div className="sidebar">
      <nav className="sidebar__container">
        <div>
          <a href="#" className="sidebar__link sidebar__logo">
            <i className="ri-pen-nib-line"></i>
            <span>Matias</span>
          </a>

          <div className="sidebar__list">

            <div className="sidebar__items">
              <h3 className="sidebar__subtitle">Profile</h3>

              <a href="#" className="sidebar__link">
                <i className="ri-home-line"></i>
                <span className="sidebar__name">Home</span>
              </a>


              <div className="sidebar__dropdown">
                <a href="#" className="sidebar__link">
                  <i className="ri-user-3-line"></i>
                  <span className="sidebar__name">Profile</span>

                  <i className="ri-arrow-down-s-line sidebar__dropdown-icon"></i>
                </a>

                <div className="sidebar__dropdown-collapse">
                    <div className="sidebar__dropdown-content">
                        <a href="" className="sidebar__dropdown-item">Passwords</a>
                        <a href="" className="sidebar__dropdown-item">Mail</a>
                        <a href="" className="sidebar__dropdown-item">Accounts</a>
                    </div>
                </div>
              </div>


              <a href="#" className="sidebar__link">
                <i className="ri-chat-3-line"></i>
                <span className="sidebar__name">Messages</span>
              </a>
            </div>

            <div className="sidebar__items">
              <h3 className="sidebar__subtitle">Menu</h3>

              <div className="sidebar__dropdown">
                <a href="#" className="sidebar__link">
                  <i className="ri-notification-3-line"></i>
                  <span className="sidebar__name">Notifications</span>

                  <i className="ri-arrow-down-s-line sidebar__dropdown-icon"></i>
                </a>

                <div className="sidebar__dropdown-collapse">
                    <div className="sidebar__dropdown-content">
                        <a href="" className="sidebar__dropdown-item">New Friends</a>
                        <a href="" className="sidebar__dropdown-item">Calls</a>
                        <a href="" className="sidebar__dropdown-item">Map</a>
                    </div>
                </div>
              </div>

              <a href="#" className="sidebar__link">
                <i className="ri-mail-line"></i>
                <span className="sidebar__name">Email</span>
              </a>

              <a href="#" className="sidebar__link">
                <i className="ri-honour-line"></i>
                <span className="sidebar__name">Friends</span>
              </a>
            </div>

          </div>
        </div>

        <a href="#" className="sidebar__link sidebar__logout">
          <i className="ri-logout-box-line"></i>
          <span className="sidebar__name">Logout</span>
        </a>

      </nav>
    </div>
  );
};

export default SideBar;

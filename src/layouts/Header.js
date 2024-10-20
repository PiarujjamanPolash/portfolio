import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection, stickyNav } from "../utils";

const Menu = () => (
  <ul className="menu">
    <li className="menu-item">
      <a href="#section-started">
        <span className="animated-button">
          <span>Home</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-about">
        <span className="animated-button">
          <span>About</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-experience">
        <span className="animated-button">
          <span>Resume</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-portfolio">
        <span className="animated-button">
          <span>Portfolio</span>
        </span>
      </a>
    </li>
    <li className="menu-item">
      <a href="#section-contacts">
        <span className="animated-button">
          <span>Contact</span>
        </span>
      </a>
    </li>
  </ul>
);

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", activeSection);
  }, []);

  return (
    <Fragment>
      <DaskTopHeader />
      <MobileHeader />
    </Fragment>
  );
};
export default Header;
const DaskTopHeader = () => (
  <header className="desktopHeader header">
    {/* logo */}
    <div className="logo">
      <a href="#">
        <img className="logo-img" src="images/logo.png" alt="" />
        <span className="logo-lnk">
        polash<br />
        .dev
        </span>
      </a>
    </div>
    {/* menu button */}
    <a href="#" className="menu-btn">
      <span />
    </a>
    {/* download cv button */}
    <a href="https://wa.me/+8801783357375" className="btn download-cv-btn">
      <span className="animated-button">
        <span>WhatsApp</span>
      </span>
      <i className="icon fas fa-chevron-right" />
    </a>
    {/* header sidebar */}
    <div className="header-sidebar">
      {/* top menu */}
      <div className="top-menu">
        <div className="top-menu-nav">
          <div className="menu-topmenu-container">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  </header>
);
const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      {/* logo */}
      <div className="logo">
        <a href="#">
          <img className="logo-img" src="images/logo.png" alt="" />
          <span className="logo-lnk">
            polash<br />
            .dev
          </span>
        </a>
      </div>
      {/* menu button */}
      <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
        <span />
      </a>
      {/* download cv button */}
      <a href="https://wa.me/+8801783357375" className="btn download-cv-btn">
        <span className="animated-button">
          <span>WhatsApp</span>
        </span>
        <i className="icon fas fa-chevron-right" />
      </a>
      {/* header sidebar */}
      <div className="header-sidebar">
        {/* top menu */}
        <div className="top-menu">
          <div className="top-menu-nav">
            <div className="menu-topmenu-container">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

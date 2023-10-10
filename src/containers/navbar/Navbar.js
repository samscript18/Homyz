import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Button } from "../../components";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="homyz-navbar">
      <div className="homyz-nav-logo">
        <img src={logo} alt="Homyz" />
      </div>
      <div className="homyz-navbar-links">
        <a href="#residency">Residencies</a>
        <a href="#value">Our Value</a>
        <a href="#contact">Contact Us</a>
        <a href="#cta">Get Started</a>
        <Button text={"Contact"} />
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-links scale-up-center">
            <a href="#residency">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#cta">Get Started</a>
            <Button text={"Contact"} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;

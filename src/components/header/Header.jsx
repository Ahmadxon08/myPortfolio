/* eslint-disable react/prop-types */
import "./Header.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useRef, useState } from "react";
import { IoLogoAngular, IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
const Header = (props) => {
  const { handleClick } = props;
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
    navRef.current.classList.toggle("open");
  };
  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navRef.current.classList.remove("open");
  };
  const toggleDark = () => {
    setIsDark(!isDark);
    handleClick();
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header_inner">
          <HashLink  smooth to="/#home" className="logo">
          <IoLogoAngular color="white" size={42} />
          </HashLink>
          <nav>
            <div ref={navRef} className={`navList ${isMenuOpen ? "open" : ""}`}>
              <HashLink onClick={closeMenu} smooth to="/#about">About</HashLink>
              <HashLink  onClick={closeMenu} smooth to="/#skill">Skills</HashLink>
              <HashLink  onClick={closeMenu}   smooth to="/#work">Work</HashLink>
              <HashLink  onClick={closeMenu}  smooth to="/#contact">Contact</HashLink>
            </div>
            <button className="darkMode" onClick={toggleDark}>
              {isDark ? (
                <IoSunnyOutline size={28} color="white" />
              ) : (
                <FaMoon size={28} color="black" />
              )}
            </button>
            <button onClick={toggle} className="menu">
              {isMenuOpen ? (
                <IoMdClose size={28} color="white" />
              ) : (
                <HiOutlineMenuAlt3 size={28} color="white" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

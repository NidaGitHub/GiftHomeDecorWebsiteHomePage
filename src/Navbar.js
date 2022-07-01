import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="announcement-bar-color">
        <p className="announcement-bar">
          FREE SHIPPING ON PAID ORDERS ABOVE ₹999
        </p>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              height="130px"
              width=" 180px"
              src="https://www.logolynx.com/images/logolynx/21/218e7a6b691b6acd668986dafa1b4cdf.jpeg"
              alt="Image"
            ></img>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Home Decor
              </Link>
            </li>

            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Festive Decor
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Corporate Gifting
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

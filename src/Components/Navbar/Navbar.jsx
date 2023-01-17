import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isPoint, setisPoint] = useState(false);

  const listenToscroll = () => {
    let height = 150;
    const winHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winHeight > height) {
      setisPoint(true);
    } else {
      setisPoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToscroll);
  }, []);
  return (
    <>
      <header id="header" className={isPoint ? "headModified" : "head"}>
        <div className="h-container">
          <div className="logo">
            <h1>
              <a href="#hero1" style={{ fontFamily: "Roboto" }}>
                BuyBooks.Com
              </a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  style={{ fontFamily: "Roboto" }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  style={{ fontFamily: "Roboto" }}
                  href="/search"
                >
                  Search Books
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;

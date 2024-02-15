import React from "react";
import { useState } from "react";
import Timer from "../../Timer";
import ModalContr from "../../components/ModalContr";
import Button from "@mui/material/Button";
import Fake from "../../Fake";

function Home() {
  const [Open, setIsOpen] = useState(false);
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">{/* <a>LOGO</a> */}</h1>

          <nav id="navbar" className="navbar">
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <div id="hero" className="hero route bg-image">
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="glitch-wrapper">
                <div>
                  <Fake/>
                  {/* <ModalContr isOpen={Open} isClose={() => setIsOpen(false)}/>
                  <Button
                    variant="outlined"
                    sx={{ color: "#b1cdf1" }}
                    onClick={() => setIsOpen(true)}
                  >
                    Contribuir com o projeto
                  </Button> */}
                </div>
              </div>
              <p className="hero-subtitle"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

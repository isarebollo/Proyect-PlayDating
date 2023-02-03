import React from "react";
import { Link } from "react-router-dom";


import "../Navbar/navbar.css"

export const Navbar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">Home</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/eventos">
            <a className="navbar-brand" href="/">Eventos</a>
              </Link>

            </ul>

            <form className="d-flex">
              <Link to="/login">
                <button

                  className="btn btn-outline-dark me-2"
                >
                  Login
                </button>
              </Link>
              <Link to="/registro">
                <button

                  className="btn btn-outline-dark me-2"
                >
                  Registro
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

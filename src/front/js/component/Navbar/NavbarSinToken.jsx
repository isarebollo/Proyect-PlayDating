import React from "react";
import { Link } from "react-router-dom";


export const NavbarSinToken = () => {


    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">PlayDating</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <a className="nav-link" href="/actividades">Actividades</a>


                    </div>
                    <form className="ms-auto">
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
    )
}
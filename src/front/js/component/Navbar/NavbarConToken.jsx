import React from "react";
import { Link } from "react-router-dom";
import {config} from "./../config"
import "./../../../../App.css"
export const NavbarConToken = () => {

    const removeStorage = () => {
        localStorage.removeItem(config.jwt.nameToken);
        localStorage.removeItem("usuario");
      };
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">PlayDating</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/home">Home</a>
                            <a className="nav-link" href="/actividades">Actividades</a>
                            <a className="nav-link" href="/eventos">Eventos</a>
                            <a className="nav-link" href="/misEventos">Mis eventos</a>
                            <a className="nav-link" href="/miPerfil">MiPerfil</a>

                        </div>
                        <form>

                            <Link to="/">
                                <button
                                    
                                    className="button me-2 "
                                    onClick={() => {
                                        removeStorage();
                                        window.location.reload()
                                    }}
                                >
                                    Salir
                                </button>
                            </Link>


                        </form>

                        


                    </div>
                </div>
            </nav>

        </>
    );
};
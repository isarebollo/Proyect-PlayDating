import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { config } from './../config'
import { obtenerInvitaciones } from './../api.js'


export const Navbar = () => {

  const [ocultarConToken, setOcultarConToken] = useState("ocultarConToken");
  const [ocultarSinToken, setOcultarSinToken] = useState("ocultarSinToken");
  const [invitaciones, setInvitaciones] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem(config.jwt.nameToken);
    if (token) {
      obtenerInvitaciones()
        .then((data) => {
          setInvitaciones(data.data);
        })
        .catch((error) => {
          const errorStr = JSON.stringify(error);
        });
    }
  }, []);


  const removeStorage = () => {
    localStorage.removeItem(config.jwt.nameToken);
    localStorage.removeItem("usuario");
  };

  useEffect(() => {
    const token = localStorage.getItem(config.jwt.nameToken);
    if (!token) {
      setOcultarSinToken("ocultarSinToken");
      setOcultarConToken("");
    } else {
      setOcultarSinToken("");
    }
  }, []);


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
              <a className={"navbar-brand mb-0 h1 " + ocultarSinToken} aria-current="page" href="/home">Home</a>
              <a className={"navbar-brand mb-0 h1 " + ocultarSinToken} href="/actividades">Actividades</a>
              <a className={"navbar-brand mb-0 h1 " + ocultarSinToken} href="/eventos">Eventos</a>
              <a className={"navbar-brand mb-0 h1 " + ocultarSinToken} href="/misEventos">Mis eventos</a>
              <a className={
                "navbar-brand mb-0 h1 position-relative " + ocultarSinToken
              } href="/miPerfil">MiPerfil</a>

            </div>
            <form className="ms-auto">
              <Link to="/login">
                <button

                  className={"btn btn-outline-dark me-2" + ocultarConToken}
                >
                  Login
                </button>
              </Link>
              <Link to="/registro">
                <button

                  className={"btn btn-outline-dark me-2" + ocultarConToken}
                >
                  Registro
                </button>
              </Link>
            </form>


            <Link to="/">
              <button

                className={"btn btn-outline-dark me-2" + ocultarSinToken}
                onClick={() => {
                  removeStorage();
                }}
              >
                Cerrar Sesion
              </button>
            </Link>
          </div>
        </div>
      </nav>

    </>
  );
};

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOSTNAME } from "../component/config";
import { Navbar } from "../component/navbar.jsx";
import "../../styles/login.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Login = (props) => {
    
    return (
        <>
            <div id="contenedor">

                <div id="contenedorcentrado">
                    <div id="login">
                        <form id="loginform">
                            <label>Usuario</label>
                            <input id="usuario" type="text" name="usuario" placeholder="Usuario" required></input>

                            <label >Contraseña</label>
                            <input id="password" type="password" placeholder="Contraseña" name="password" required></input>

                            <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                        </form>

                    </div>
                    <div id="derecho">
                        <div className="titulo">
                            Bienvenido
                        </div>
                        <hr />
                        <div className="pie-form">
                            {/* <a href="#">¿Perdiste tu contraseña?</a> */}
                            <Link to={"/registro"}><a href="#">¿No tienes Cuenta? Registrate</a>
                            </Link>

                            <hr />
                            <a href="#">« Volver</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

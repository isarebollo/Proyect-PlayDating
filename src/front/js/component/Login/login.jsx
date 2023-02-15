import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOSTNAME } from "./../config.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../Login/login.css"


export const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [textoAlerta, setTextoAlerta] = useState("");
    const [navegar, setNavegar] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateText = (e, setState) => {
        const value = e.target.value;
        setState(value);
    };

    const modalManager = (texto, canNavigate) => {
        setTextoAlerta(texto);
        setNavegar(canNavigate);
        handleShow();
    };

    const onSave = async (e) => {
        e.preventDefault();
        if (email === "" || password === "" || password.length < 4) {
        } else {
            const body = JSON.stringify({
                email,
                password,
            });

            const resp = await fetch(HOSTNAME + "/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.token}`,
                },
                body,
            });

            console.log(resp)
            if (!resp.ok) {
                modalManager("Error en el servidor", false);
            }
            const data = await resp.json();
            console.log(data)

            if (data.data !== undefined) {
                localStorage.setItem("token", data.data);
                localStorage.setItem("usuario", data.usuario_id);
                navigate("/eventos");
            } else {
                modalManager("El usuario no existe", true);
            }
        }
    };
    return (
        <>
            <div id="contenedor">

                <div id="contenedorcentrado">
                    <div id="login">
                        <form id="loginform">
                            <label>Usuario</label>
                            <input onChange={(e) => updateText(e, setEmail)}
                                value={email}
                                id="usuario"
                                type="text"
                                name="usuario"
                                placeholder="Usuario"
                                autoComplete="userName"
                                required></input>

                            <label >Contraseña</label>
                            <input onChange={(e) => updateText(e, setPassword)}
                                value={password}
                                id="password"
                                type="password"
                                placeholder="Contraseña"
                                autoComplete="current-password"
                                name="password"
                                required></input>

                            <button onClick={onSave}
                                type="submit"

                                name="Ingresar">Login</button>
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
                            <a href="/">« Volver</a>
                        </div>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{textoAlerta}</Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    if (navegar) {
                                        navigate("/register");
                                    } else {
                                        handleClose();
                                    }
                                }}
                            >
                                OK
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

        </>
    );
};

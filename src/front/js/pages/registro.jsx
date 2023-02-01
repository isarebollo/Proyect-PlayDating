import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/registro.css";


export const Registro = () => {
    return (
        <>
            <div id="contenedor-registro">
                <div id="contenedorcentradoregistro">
                    <div id="registro">
                        <h2 className="titulo-registro" >Registro</h2>
                        <form id="loginform">
                            <label for="usuario">Nombre</label>
                            <input id="usuario" type="text" name="usuario" placeholder="Nombre" required></input>


                            <label for="email">Email</label>
                            <input id="email" type="email" name="usuario" placeholder="Usuario" required></input>

                            <label for="password">Contraseña</label>
                            <input id="password" type="password" placeholder="Contraseña" name="password" required></input>
                           
                            <label for="password">Nº hijos</label>
                            <input type="number" placeholder="Nº hijos" name="password" required></input>

                            <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                        </form>

                    </div>

                </div>

            </div>

        </>


    );

}
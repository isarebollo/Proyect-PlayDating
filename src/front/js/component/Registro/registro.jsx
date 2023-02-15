import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOSTNAME } from "./../config.js";
import "./../Registro/registro.css"


export const Registro = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [numero_hijos, setNumero_hijos] = useState("");
    const [provincia, setProvincia] = useState("");

    const updateText = (e, setState) => {
        const value = e.target.value;
        setState(value);
    };
    const onSave = async (e) => {
        e.preventDefault();

        const body = JSON.stringify({
            email,
            password,
            nombre,
            provincia,
            numero_hijos,

        });
        console.log(body)

        const resp = await fetch('http://127.0.0.1:5000//api/nuevo/registro', {
            method: "POST",
            
            headers: {
                "Content-Type": "application/json",
                                             
            },
            body,
        });
        console.log(resp)
        
    }

    return (
        <>
            <div id="contenedor-registro">
                <div id="contenedorcentradoregistro">
                    <div id="registro">
                        <h2 className="titulo-registro" >Registro</h2>
                        <form id="loginform">
                            <label >Nombre</label>
                            <input onChange={(e) => updateText(e, setNombre)}
                                value={nombre}
                                id="usuario"
                                type="text"
                                placeholder="Nombre"
                                required></input>


                            <label >Email</label>
                            <input onChange={(e) => updateText(e, setEmail)}
                                value={email}
                                id="email"
                                type="email"
                                autoComplete="username"
                                placeholder="Usuario"
                                required></input>

                            <label >Contraseña</label>
                            <input onChange={(e) => updateText(e, setPassword)}
                                value={password}
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Contraseña"
                                required></input>

                            <label >Nº hijos</label>
                            <input onChange={(e) => updateText(e, setNumero_hijos)}
                                value={numero_hijos}
                                type="number"
                                placeholder="Nº hijos"
                                required></input>

                            <label className="form-label">Provincia</label>
                            <select
                                onChange={(e) => updateText(e, setProvincia)}
                                value={provincia}
                                className="form-select"
                                required
                            >
                                <option defaultValue=""></option>
                                <option value="Álava">Álava</option>
                                <option value="Albacete">Albacete</option>
                                <option value="Alicante">Alicante</option>
                                <option value="Almería">Almería</option>
                                <option value="Asturias">Asturias</option>
                                <option value="Ávila">Ávila</option>
                                <option value="Badajoz">Badajoz</option>
                                <option value="Barcelona">Barcelona</option>
                                <option value="Burgos">Burgos</option>
                                <option value="Cáceres">Cáceres</option>
                                <option value="Cádiz">Cádiz</option>
                                <option value="Cantabria">Cantabria</option>
                                <option value="Castellón">Castellón</option>
                                <option value="Ciudad Real">Ciudad Real</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="A Coruña">A Coruña</option>
                                <option value="Cuenca">Cuenca</option>
                                <option value="Girona">Girona</option>
                                <option value="Granada">Granada</option>
                                <option value="Guadalajara">Guadalajara</option>
                                <option value="Gipuzkoa">Gipuzkoa</option>
                                <option value="Huelva">Huelva</option>
                                <option value="Huesca">Huesca</option>
                                <option value="Illes Balears">Illes Balears</option>
                                <option value="Jaén">Jaén</option>
                                <option value="León">León</option>
                                <option value="Lleida<">Lleida</option>
                                <option value="Lugo">Lugo</option>
                                <option value="Madrid">Madrid</option>
                                <option value="Málaga">Málaga</option>
                                <option value="Murcia">Murcia</option>
                                <option value="Navarra">Navarra</option>
                                <option value="Ourense">Ourense</option>
                                <option value="Palencia">Palencia</option>
                                <option value="Las Palmas">Las Palmas</option>
                                <option value="Pontevedra">Pontevedra</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Segovia">Segovia</option>
                                <option value="Sevilla">Sevilla</option>
                                <option value="Soria">Soria</option>
                                <option value="Tarragona">Tarragona</option>
                                <option value="Santa Cruz de Tenerife">
                                    Santa Cruz de Tenerife
                                </option>
                                <option value="Teruel">Teruel</option>
                                <option value="Toledo">Toledo</option>
                                <option value="Valencia">Valencia</option>
                                <option value="Valladolid">Valladolid</option>
                                <option value="Bizkaia">Bizkaia</option>
                                <option value="Zamora">Zamora</option>
                                <option value="Zaragoza">Zaragoza</option>
                            </select>

                            <button onClick={onSave}
                                type="submit"
                                title="Ingresar"
                                name="Ingresar">Login</button>
                        </form>

                    </div>

                </div>

            </div>

        </>


    );

}


import React, { useState } from "react";

import "./../Mi Perfil/MiPerfil.css"
import { MisFavoritos } from "./../../component/Otros/MisFavoritos.jsx";
import {Perfil} from "./../../component/Perfil/Perfil"
import { MisInvitaciones } from "./../../component/Otros/MisInvitaciones.jsx";

export const Miperfil = () => {
  const [nombre, setNombre] = useState("");

  const notificarNombreUsuario = (nombre) => {
    setNombre(nombre);
  };
  return (
    <>
     
      <div className="container mb-5" id="miperfil">
        <div className="mt-4 pt-3 text-center">
          <h3 >¡Hola {nombre}!</h3>
        </div>
        <div className="row justify-content-center ">
          <div className="col">
            <Perfil notificarNombre={notificarNombreUsuario} />
          </div>
          <div className="col m-5 ">
            <MisFavoritos />
            <MisInvitaciones />
          </div>
        </div>
      </div>
    </>
  );
};

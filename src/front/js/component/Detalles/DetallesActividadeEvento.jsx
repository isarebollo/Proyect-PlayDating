import React from "react";
import "./../Detalles/DetalleActividadesEvento.css"

export const DetallesActividadEvento = (props) => {

  const participantesEvento = (listaParticipantes) => {
    let participantes = [];


    if (listaParticipantes.length === 0) {
      return <li>Aún no hay participantes</li>;
    } else {
      participantes = listaParticipantes.map((participante, index) => {

        if (participante.id == localStorage.getItem("usuario")) {
          return (
            <li key={index}>
              Te has unido con {participante.cantidad} participante/s{" "}
            </li>
          );
        } else {
          const favClazz = participante.esFavorito ? "fas fa-star" : "far fa-star"
          return (
            <li key={index}>
              {participante.nombre} con {participante.cantidad} participante/s{" "}
              <button
                className="btn ms-2"
                data-bs-placement="right"
                onClick={() => { props.onAgregarOEliminarFavorito(participante.id) }}
              >
                <i className={favClazz + " yellow"}></i>
              </button>
            </li>
          );
        }
      });
    }
    return participantes;
  };

  return (
    <>
      <div className="card" >
        <div className="card-title">
          <h5 className="text-center">
            <strong>{props.nombre}</strong>
          </h5>
          <hr></hr>
          <div className="card-body">
            <p>
              <strong>Creador:</strong> {props.creador}
            </p>
            <p >
              <strong>Descripción:</strong> {props.descripcion}
            </p>
          </div>
          <div className="card-footer">
            <strong> Se ha unido:</strong>
            <ul>{participantesEvento(props.participantes)}</ul>
          </div>
        </div>
      </div>

      <div className="imgDetalle">

        <img
          src={props.imagen}
          className="img-fluid card-img"
        />

      </div>


    </>
  );
};

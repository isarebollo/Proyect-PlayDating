import React from "react";

import { eliminarComentario } from "./../api.js";
import "./../Comentarios/Comentario.css"
import { BiTrash } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";


export const Comentario = (props) => {

  const favClazz = props.esFavorito ? <BsFillStarFill title="Eliminar usuario a Favoritos" /> : <AiOutlineStar title="Añadir usuario a Favoritos" />

  const onEliminarComentario = (comentarioId) => {
    eliminarComentario(comentarioId)
      .then((data) => {
        props.notificarEliminacionComentario(comentarioId);
      })
      .catch((error) => {
        const errorStr = JSON.stringify(error);
      });
  };
  return (
    <>
      <div className="container containerComentario">
        <div className="row m-2 bg-light text-center">
          <small className="mt-1">{props.fecha}</small>
          <div className="col-2 mt-3">

            <p id="nombreUsuario ">
              {props.usuario.nombre.toUpperCase()}

            </p>
          </div>
          <div className="col-7  mt-2 text-center">
            <p>{props.comentario}</p>
          </div>
          <div className="col-3 text-end">

            {props.usuario.id == localStorage.getItem("usuario") && (
              <div className="col">
                <button
                  className="buttonRedTrash mb-3 fs-4"
                  onClick={() => {
                    onEliminarComentario(props.comentarioId);
                  }}
                >
                  <BiTrash />
                </button>
              </div>
            )}
            {props.usuario.id != localStorage.getItem("usuario") && (
              <button
                className="buttonYellowStar mb-3 fs-4"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                onClick={() => {
                  props.onAgregarOEliminarFavorito(props.usuario.id);
                }}
              >
                <i>{favClazz}</i>
              </button>

            )}

          </div>
        </div>
      </div>




      {/* <div className="container bg-info">
        <div className="row mx-auto mb-4">
          <div className="card-header">
            <p id="nombreUsuario">
              {props.usuario.nombre}
              {props.usuario.id != localStorage.getItem("usuario") && (
                <button
                  className= "button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Añadir usuario a Favoritos"
                  onClick={() => {
                    props.onAgregarOEliminarFavorito(props.usuario.id);
                  }}
                >
                  <i className={favClazz + " yellow"}></i>
                </button>
              )}
            </p>
          </div>
          <div className="card-body">
            <p className="card-text">{props.comentario}</p>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col">
                <div className="text-muted">{props.fecha}</div>
              </div>
              {props.usuario.id == localStorage.getItem("usuario") && (
                <div className="col">
                  <button
                    className="buttonRedTrash fs-4"
                    onClick={() => {
                      onEliminarComentario(props.comentarioId);
                    }}
                  >
                    <BiTrash/>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

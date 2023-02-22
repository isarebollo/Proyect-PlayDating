import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import "./CardEvento.css"

import { Link } from "react-router-dom";

import { retirarseDeEvento } from "./../api"
import { HOSTNAME } from "../config";
import moment from "moment";

export const CardEvento = (props) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [textoModal, setTextoModal] = useState("");

  const onCancel = async () => {
    const response = await fetch(
      HOSTNAME + `/cancelarevento/${props.evento_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );
    const json = await response.json();
    setTextoModal("Se ha cancelado este evento.");
    setModal1(false);
    setModal2(true);
  };
  const onRetirarse = () => {
    retirarseDeEvento(props.evento_id)
      .then((data) => {
        setModal1(false);
        setTextoModal(
          "Se ha retirado la participación del usuario a este evento."
        );
        setModal2(true);
      })
      .catch((error) => {
        const errorStr = JSON.stringify(error);
        setTextoModal(error.message);
        setModal2(true);
      });
  };

  let date = moment(props.fecha_y_hora).format("DD/MM/YYYY - HH:mm");

  return (
    <>
      <div className="container">

        <div className="col">
          <div className="card h-100 mb-4 text-center">
            <img src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>

              <p className="card-text">{date}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{props.estado}</small>
            </div>
          </div>
        </div>





      </div>

    </>
  );
};
CardEvento.propTypes = {
  evento_id: propTypes.number,
  creador: propTypes.number,
  name: propTypes.string,
  src: propTypes.string,
  text: propTypes.string,
  tipo: propTypes.string,
  route: propTypes.string,
  max_participantes: propTypes.number,
  min_participantes: propTypes.number,
  estado: propTypes.string,
  fecha_y_hora: propTypes.string,
};

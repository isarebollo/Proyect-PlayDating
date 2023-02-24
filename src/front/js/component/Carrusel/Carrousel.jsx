import React, { useEffect, useState, useContext } from "react";
import { Context } from "./../../store/appContext";
import { HOSTNAME } from "../config.js";
import { config } from "../config.js";
import Carousel from 'react-bootstrap/Carousel';
import "./../Carrusel/Carrousel.css"


// let imagenes = [

//     {
//         id: "1",
//         name: "Juegos de Agua",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627381/PlayDating/1_uvjrwq_z3acjb.png"
//     },
//     {
//         id: "2",
//         name: "Juego de Agua",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627381/PlayDating/2_lsrmht_ug8so2.png"
//     }, {
//         id: "3",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627381/PlayDating/3_pfaftn_tjq6by.png"
//     }, {
//         id: "4",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627381/PlayDating/4_fcaocu_ltzazd.png"
//     }, {
//         id: "5",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627381/PlayDating/5_y0uy6z_i35lj1.png"
//     }, {
//         id: "6",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627381/PlayDating/6_qqntku_cb1xgr.png"
//     }, {
//         id: "7",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627382/PlayDating/7_iaiefz_c49cif.png"
//     }, {
//         id: "8",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627382/PlayDating/8_vbix7b_unorpc.png"
//     }, {
//         id: "1",
//         url: "https://res.cloudinary.com/dfcsm1fzk/image/upload/v1676627382/PlayDating/9_eqsdfm_juoagg.png"
//     },
// ]




export const Carrusel = () => {

    const [actividades, setActividades] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(HOSTNAME + "/api/actividades", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            const json = await response.json();
            setActividades(json.data);
        };

        fetchData().catch((error) => {
            console.log(error);
        });

    }, [])
    return (
        <>
            <Carousel touch={true}

                variant="dark">
                {actividades.map(actividad => (
                    <Carousel.Item key={actividad.id}>

                        <img
                            className=" imagenCarrusel mx-auto d-block w-50 "
                            src={actividad.imagen}
                        />
                        <Carousel.Caption>
                            <h2>{actividad.nombre}</h2>
                            <p>{actividad.descripcion}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
            <div>

                <button className="button"> 

                    REGISTRATE PARA MAS INFORMACION

                </button>
            </div>







        </>

    );
}

import React from "react";

import "./../Mis Eventos/MisEventos.css"

import { List } from "../../component/List/List";

export const MisEventos = () => {
    return (
        <>
            <div className="container" >
            <h2 className="text-center ">MIS EVENTOS</h2>
                <List></List>

            </div>
        </>
    )


}
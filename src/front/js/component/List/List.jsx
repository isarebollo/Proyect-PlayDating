import React from "react"
import "./../List/List.css"


export const List = () => {

    return (

        <>
            <div className="list-group">
                <a href="#" className="list-group-item m-3 list-group-item-action active" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">LECTURA DE CUENTOS</h5>
                        <small>Todas las edades</small>
                    </div>
                    <p className="mb-1">Descripcion</p>
                    <small>Advertencias</small>
                </a>
                <a href="#" className="list-group-item m-3 list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">JUEGOS EN EL AGUA </h5>
                        <small className="text-muted">3+</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </a>
                <a href="#" className="list-group-item m-3 list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </a>
                <a href="#" className="list-group-item m-3 list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </a>

            </div>
        </>
    )
}
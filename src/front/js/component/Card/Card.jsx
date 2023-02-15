import React from "react";

import "./../Card/Card.css"

export const Card = () => {

    return (


        <>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://img.freepik.com/vector-gratis/parque-infantil-parque-arco-iris-cielo-al-estilo-dibujos-animados-dia_1308-45277.jpg?w=2000g" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )



}
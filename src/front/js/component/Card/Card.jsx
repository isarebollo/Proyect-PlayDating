import React from "react";

import "./../Card/Card.css"

export const Card = () => {

    return (


        <>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://img.freepik.com/vector-gratis/parque-infantil-parque-arco-iris-cielo-al-estilo-dibujos-animados-dia_1308-45277.jpg?w=2000g" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )



}
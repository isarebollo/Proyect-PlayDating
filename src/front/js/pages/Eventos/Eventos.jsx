import React from "react";
import { Card } from "../../component/Card/Card";

export const Eventos = () => {

    return (
        <>
            <div className="container">
                <div>

                    <h2 className="text-center ">EVENTOS</h2>

                </div>


                <div className="mb-5">
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <Card></Card>
                        </div>
                        <div class="col">
                            <Card></Card>
                        </div>
                        <div class="col">
                            <div class="col">
                                <Card></Card>
                            </div>
                        </div>
                        <div class="col">
                            <div class="col">
                                <Card></Card>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </>
    );

}
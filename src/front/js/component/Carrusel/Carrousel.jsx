import React, { useEffect, useState, useContext } from "react";
import { Context } from "./../../store/appContext";

import { config } from "../config.js";
import Carousel from 'react-bootstrap/Carousel';


export const CarouselFadeExample = () => {


    

    return (
        <>


            <Carousel fade>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1160947136/es/foto/pareja-relajarse-en-la-playa-disfrutar-de-hermoso-mar-en-la-isla-tropical.jpg?s=612x612&w=0&k=20&c=-9tBZSpwpVrSC7xMNf1LN2fUJzlrtCgrFxuvligkkwM="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://st.depositphotos.com/1766887/2306/i/450/depositphotos_23063254-stock-photo-beautiful-white-sandy-beaches-of.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1173935107/es/foto/larga-ola-en-la-costa-amanecer-en-el-mar-t%C3%BAnez.jpg?s=612x612&w=0&k=20&c=f25DjmKduRJgIx9s3QMITXJqeQvPhDeS4VSiFRMZHyQ="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";


import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/Home/home";
import { Login } from "./component/Login/login";
import { Registro } from "./component/Registro/registro";
import { Navbar } from "./component/Navbar/navbar.jsx";
import { Footer } from "./component/Footer/footer";
//import "../styles/index.css"



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div id="container">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />

                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>

                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

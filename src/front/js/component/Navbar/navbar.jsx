import React from "react";
import { NavbarSinToken } from "./NavbarSinToken";
import { NavbarConToken } from "./NavbarConToken";
import "../Navbar/navbar.css"

export const Navbar = () => {

  if (!localStorage.getItem("token")) {

    return <NavbarSinToken></NavbarSinToken>
  }
  else {
    return <NavbarConToken></NavbarConToken>
  }



};
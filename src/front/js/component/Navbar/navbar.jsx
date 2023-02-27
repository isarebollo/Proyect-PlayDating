import React, { useState, useEffect } from "react";
import { NavbarSinToken } from "./NavbarSinToken";
import { NavbarConToken } from "./NavbarConToken";
import "../Navbar/navbar.css"
import "./../../../../App.css"

export const Navbar = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("token")) {

      setToken(true)
     
    }
    else {
      setToken(false)
    }
  }, [])

  return (

    (token) ? <NavbarConToken />  : <NavbarSinToken />
  )
}

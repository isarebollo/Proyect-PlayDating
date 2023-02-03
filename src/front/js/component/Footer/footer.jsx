import React from "react";


import "./../Footer/footer.css"

export const Footer = () => (

  <>
    <footer className="text-center bg-light  text-white">

      <div className="container ">

        <section className="mb-2">

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-facebook-f"></i>
          </a>


          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-twitter"></i>
          </a>


          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-google"></i>
          </a>


          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-instagram"></i>
          </a>


          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-linkedin"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-github"></i>
          </a>
        </section>

      </div>

      <div className="text-center text-dark p-3">
        © 2020 Copyright:
        <a className="text-dark" >Isabel Rebollo Corraliza</a>
      </div>

    </footer>
  </>
);

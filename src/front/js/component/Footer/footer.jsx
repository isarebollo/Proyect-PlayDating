import React from "react";

import "./../../../../App.css"
import "./../Footer/footer.css"


import { BsFacebook,BsTwitter,BsGithub,BsLinkedin } from "react-icons/bs";

export const Footer = () => {


  return (


    <>

      <footer className="site-footer">
        <div className="container">
          <div className="row info-Foote">
            <div className="about col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>

            <div className=" Links col-xs-6 col-md-3">
              <h6>Categorias</h6>
              <ul className="footer-links"> {/*cambiar links  */}

                <li><a href="http://scanfcode.com/category/c-language/">JavaScript</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">ReactJS</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">Python</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Flask</a></li>
                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
              </ul>
            </div>

            <div className="Links col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by{" "}
                <a href="#">Isabel Rebollo Corraliza</a>.
              </p>
            </div>
{/* ..........................................añadir links ............................ */}
            <div className="col-md-4 col-sm-6 col-xs-12">  
              <ul className="social-icons">
                <li><a className="facebook" href="#"><BsFacebook></BsFacebook></a></li>
                <li><a className="twitter" href="#"><BsTwitter></BsTwitter></a></li>
                <li><a className="dribbble" href="#"><BsGithub></BsGithub></a></li>
                <li><a className="linkedin" href="#"><BsLinkedin></BsLinkedin></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>






    </>


  )
}




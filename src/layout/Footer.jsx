import React from "react";
import { Outlet } from "react-router-dom";
import icon from "../assets/quest.png";
import cardicon from "../assets/card.png";
import apple from "../assets/apple.png";
import playstore from "../assets/playstore.png";
import fbicon from "../assets/fbp.png";
import twitter from "../assets/twi.png";
import instaicon from "../assets/iG.png";
import youtube from "../assets/ytube.png";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="  bg-black text-white p-2 d-md-flex border ">
        <section className="container m-auto text-md-start p-3 text-center">
          <div className="d-md-flex  justify-content-between gap-5 ">
            <div className="d-lg-flex gap-3 footertop ">

            <div className="d-flex justify-content-center footerflex gap-2 align-items-center">
              <img src={icon} alt="question-sign" />
              <div className="text-center">
                <h3>24/7</h3>
                <p>support</p>
              </div>
            </div>
            <div className="d-flex justify-content-center footerflex gap-2 align-items-center">
              <img src={cardicon} alt="card-lock" />
              <div className="text-center">
                <h2>100%</h2>
                <p>Payment Secured</p>
              </div>
            </div>
            </div>
            <div className="d-flex justify-content-center appflex gap-3" >

              <div>
                <img src={apple} alt="" className="app" />
              </div>
              <div>
                <img src={playstore} alt="" className="app" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <h4>Need Help</h4>
              <p className="mt-3">+234 907 466 6655 or</p>
              <p>help@jazzysburger.com</p>
            </div>

            <div>
              <h4 className="mb-3">FOLLOW US</h4>
              <div className="d-flex gap-2">
                <img
                  src={fbicon}
                  alt="facebook-icon"
                  className="border rounded "
                />
                <img
                  src={twitter}
                  alt="twitter-icon"
                  className="border  rounded "
                />
                <img
                  src={instaicon}
                  alt="instagram-icon"
                  className="border  rounded "
                />
                <img
                  src={youtube}
                  alt="youtube-icon"
                  className="border rounded "
                />
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className="container">
        <p className="text-center">
          &copy; JJB Concepts <span className="fw-bolder fs-3 ">.</span>{" "}
          Developed by our Digital LLC
        </p>
      </div>
    </>
  );
};

export default Footer;

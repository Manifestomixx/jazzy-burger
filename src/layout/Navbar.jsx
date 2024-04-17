import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import image from "../assets/image 2.png";
import image2 from "../assets/location.png";
import Bellvector from "../assets/bell.png";
import guestlogo from "../assets/guest.png";
import cartlogo from "../assets/cart .png";
import AuthDropDown from "../components/AuthDropDown";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import Bag from "../components/Bag";

const Navbar = () => {
  const [authShow, setAuthShow] = useState(false);
  const [cartShow, setCartShow] = useState(false)
  return (
    <>
      <main className="container">
        <nav className=" d-flex justify-content-between align-items-center ">
          <section className="d-flex justify-content-between align-items-center gap-3 ">
            {/* section one */}
            <div>
              <Link to="/">
                <img src={image} alt="jazzy-logo" className="img-fluid p-3" />
              </Link>
            </div>
            <div className="d-flex gap-3">
              <img
                src={image2}
                alt="location-logo"
                className="d-none d-md-block"
              />
              <h5 className="text-danger d-none d-md-block">Lagos,Nigeria</h5>
            </div>
          </section>
          <section className="d-flex justify-content-between gap-3">
            {/* section two */}
            <div className="d-flex gap-2 align-items-center">
              <img src={Bellvector} alt="bell-logo" />
              <h5 className="text-danger d-none d-md-block mt-2">
                All Products
              </h5>
            </div>
            <div
              className="d-flex gap-2 align-items-center position-relative"
              role="button"
              onClick={() =>
                !authShow ? setAuthShow(true) : setAuthShow(false)
              }
            >
              <img src={guestlogo} alt="guest-logo" />
              <h5 className="d-none d-md-block mt-2 text-secondary">
                Hi,Guests
              </h5>
              {!authShow ? (
                <div className="d-none d-lg-block mt-1 text-secondary">
                  <GoChevronUp />
                </div>
              ) : (
                <div className="d-none d-lg-block mt-1 text-secondary">
                  <GoChevronDown />
                </div>
              )}
              <div className="position-absolute top-100 end-0 mt-2">
                {authShow && <AuthDropDown />}
              </div>
            </div>

            {/* function for bag */}
            <div className="d-flex  align-items-center position-relative" role="button" onClick={()=> !cartShow ? setCartShow(true) : setCartShow(false)}>
              <div className="">
                <p className="position-absolute top-0 start-100 bg-danger translate-middle rounded-circle text-light fw-bold text-center px-1  ">10 </p>
              </div>
              <img src={cartlogo} alt="cart-logo" />
            </div>
            <div className=" position-absolute ">{cartShow && <Bag/>}</div>
          </section>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;

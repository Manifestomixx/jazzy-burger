import React from "react";
import Jazzy from "../assets/jazzy.jpg";
import Fetch from "./Fetch";

const Product = () => {
  return (
    <>
      <main className=" my-3 row ">
        <div className="d-none d-lg-block col-md-3">
          <img src={Jazzy} alt="jazzy-pic" className="rounded-2 w-100 h-100" />
        </div>
        <div className="col-md-9 ">
            <div className="d-flex flex-wrap gap-3">
            <Fetch/>
            </div>
        </div>
      </main>
    </>
  );
};

export default Product;

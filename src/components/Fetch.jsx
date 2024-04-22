import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import cheese from "../assets/cheese.png";
import bread from "../assets/bread.png";
import egg from "../assets/egg.png";
import lectuce from "../assets/lectuce.png";
import onion from "../assets/onion.png";
import favorite from "../assets/love.png";

import { FaPlus } from "react-icons/fa6";
import "../styles/Fetch.css"

const Fetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchRequest = async () => {
    try {
      setIsLoading(true);
      const req = await fetch("https://jazzy-mern.onrender.com/api/products");
      const res = await req.json();
      console.log(res);
      setData(res.products);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <>
      <main className="container d-flex flex-wrap justify-content-center gap-2">
        {isLoading && (
          <>
            <Spinner animation="border" />
          </>
        )}
        {data.map((datum) => {
          const { _id, title, image, price } = datum;
          return (
            <div key={_id} className="border p-3 rounded-4 my-2">
                <div className="position-relative">
                    <img src={favorite} alt="love-favourite" className="position-absolute m-2 end-0  favIcon rounded-pill "/>
              <img src={image} alt="" className="mb-3 "/>
                </div>
              
              <h6>{title}</h6>
              <p>Total Price</p>
              <h4>N{price}</h4>
              <div className="d-md-flex justify-content-around text-center mb-2">
                <img src={cheese} alt="" />
                <img src={onion} alt="" />
                <img src={lectuce} alt="" />
                <img src={bread} alt="" />
                <img src={egg} alt="" />
              </div>
              
              <button className="btn btn-danger  w-100 "><FaPlus className=" favIcon1 " /> Add to Cart</button>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Fetch;

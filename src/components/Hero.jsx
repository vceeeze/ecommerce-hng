import React from "react";
import heroImg from "../assets/frame.png";
import { Link, useLocation } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Hero = () => {
    const location = useLocation();
      const getActiveClass = (path) =>
        location.pathname === path ? "text-orange-400" : "text-gray-400";
  return (
    <div>
      <section
        className={`w-[100%] h-[300px] bg-cover flex justify-center  object-cover object-center bg-[#595651]`}
        style={{ backgroundImage: `url(${heroImg})` }}
      ></section>
      <div className="flex flex-row justify-evenly mt-5">
        <div>.</div>
        <div className="flex flex-row justify-between gap-5">
          <h5>
            <Link to="/" className={getActiveClass("/")}>
              Home
            </Link>
          </h5>
          <h5>
            <Link to="/products" className={getActiveClass("/products")}>
              Products
            </Link>
          </h5>
          <h5>
            <Link to="/orders" className={getActiveClass("/orders")}>
              Orders
            </Link>
          </h5>
        </div>
        <div>
          <Link to="/carts">
            <BsCart4 size={20} className="text-orange-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

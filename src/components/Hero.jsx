import React from "react";
import heroImg from "../assets/frame.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Hero = () => {
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
            <Link to="/">Home</Link>
          </h5>
          <h5>
            <Link to="/products">Products</Link>
          </h5>
          <h5>
            <Link to="/orders">Orders</Link>
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

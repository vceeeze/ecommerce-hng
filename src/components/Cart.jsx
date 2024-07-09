import React from "react";
import image1 from "../assets/1 1 (1).png";
import image2 from "../assets/1 1 (4).png";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="container mx-auto p-4 w-[80%] i sm:w-3/5 my-10 relative">
      <div className="sm:flex hidden sm:flex-row justify-between items-center bg-[#A3D985] text-white px-20">
        <div>
          <p>Item</p>
        </div>
        <div className="flex flex-row gap-20 justify-center items-center">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>

      <div className="flex flex-row justify-between border-b border-gray-300 py-10  px-20">
        <div className="mt-5 flex flex-row gap-5">
          <img
            src={image1}
            alt=""
            className="sm:w-[30%] w-[100%] h-auto shadow-md p-4"
          />
          <div className="flex flex-col gap-5">
            <p>Coconut oil</p>
            <div className="flex flex-row">
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
            </div>
            <p className="text-green-400 text-sm">InStock: 14</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-20">
          <p>$29</p>
          <div>+ 3 -</div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <p>$59</p>
            <p className="text-[#D4A373]">Remove</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between border-b border-gray-300 py-10  px-20">
        <div className="mt-5 flex flex-row gap-5">
          <img
            src={image1}
            alt=""
            className="sm:w-[30%] w-[100%] h-auto shadow-md p-4"
          />
          <div className="flex flex-col gap-5">
            <p>Coconut oil</p>
            <div className="flex flex-row">
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
            </div>
            <p className="text-green-400 text-sm">InStock: 14</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-20">
          <p>$29</p>
          <div>+ 3 -</div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <p>$59</p>
            <p className="text-[#D4A373]">Remove</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between border-b border-gray-300 py-10  px-20">
        <div className="mt-5 flex flex-row gap-5">
          <img
            src={image2}
            alt=""
            className="sm:w-[30%] w-[100%] h-auto shadow-md p-4"
          />
          <div className="flex flex-col gap-5">
            <p>Coconut oil</p>
            <div className="flex flex-row">
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
              <FaStar size={14} color="#D4A373" />
            </div>
            <p className="text-green-400 text-sm">InStock: 14</p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-20">
          <p>$29</p>
          <div>+ 3 -</div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <p>$59</p>
            <p className="text-[#D4A373]">Remove</p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[70%] flex flex-row justify-between mt-9">
        <p>Sum total</p>
        <div className="flex flex-row  gap-20">
          <p>7</p>
          <p>$170.00</p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#D4A373] mx-auto w-full md:w-[30%] text-white mt-10 rounded-md">
        <button className="py-2 px-4">Check out</button>
      </div>
    </div>
  );
};

export default Cart;

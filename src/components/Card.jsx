import React from "react";
import Img1 from "../assets/1 1.png";
import Img2 from "../assets/1 1 (1).png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="mt-5 w-[90%] md:w-[80%] m-auto">
      <div className="w-full md:w-[80%] m-auto pt-[50px] text-center md:text-left">
        <h1 className="font-bold text-[20px] md:text-[24px]">
          Welcome to Your Oasis of Calm
        </h1>
        <p className="w-full md:w-[90%]">
          Discover the power of nature with our premium essential oils. At FRin
          Essentials, we believe in the transformative power of pure,
          high-quality oils to enhance your well-being and create a tranquil
          environment. Whether you're looking to unwind after a long day, boost
          your mood, or support your overall health, we have the perfect blend
          for you.
        </p>
      </div>

      <div className="w-full md:w-[80%] m-auto pt-[50px] text-center md:text-left">
        <h1 className="font-bold text-[20px] md:text-[24px]">
          Explore Our Collection
        </h1>
      </div>

      <div className="mx-auto w-full md:w-[70%]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-5">
          <div>
            <img
              src={Img1}
              alt="Product 1"
              className="w-full md:w-[300px] h-[200px]"
            />
          </div>
          <div className="w-full md:w-[80%]">
            <p className="mx-auto w-[90%] md:w-[60%]">
              At Frin Essentials, we make shopping easy and enjoyable. Enjoy
              fast shipping, secure payment options, and a hassle-free return
              policy. We're dedicated to making your experience as smooth and
              pleasant as possible.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-5 mb-5">
          <div>
            <img
              src={Img2}
              alt="Product 2"
              className="w-full md:w-[500px] h-[200px]"
            />
          </div>
          <div className="w-full md:w-[70%]">
            <p className="mx-auto w-[90%] md:w-[70%]">
              At Frin Essentials, we make shopping easy and enjoyable. Enjoy
              fast shipping, secure payment options, and a hassle-free return
              policy. We're dedicated to making your experience as smooth and
              pleasant as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-5">
          <div>
            <img
              src={Img1}
              alt="Product 1"
              className="w-full md:w-[300px] h-[200px]"
            />
          </div>
          <div className="w-full md:w-[80%]">
            <p className="mx-auto w-[90%] md:w-[60%]">
              At Frin Essentials, we make shopping easy and enjoyable. Enjoy
              fast shipping, secure payment options, and a hassle-free return
              policy. We're dedicated to making your experience as smooth and
              pleasant as possible.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-5 mb-5">
          <div>
            <img
              src={Img2}
              alt="Product 2"
              className="w-full md:w-[500px] h-[200px]"
            />
          </div>
          <div className="w-full md:w-[70%]">
            <p className="mx-auto w-[90%] md:w-[70%]">
              At Frin Essentials, we make shopping easy and enjoyable. Enjoy
              fast shipping, secure payment options, and a hassle-free return
              policy. We're dedicated to making your experience as smooth and
              pleasant as possible.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-5">
          <div>
            <img
              src={Img1}
              alt="Product 1"
              className="w-full md:w-[300px] h-[200px]"
            />
          </div>
          <div className="w-full md:w-[80%]">
            <p className="mx-auto w-[90%] md:w-[60%]">
              At Frin Essentials, we make shopping easy and enjoyable. Enjoy
              fast shipping, secure payment options, and a hassle-free return
              policy. We're dedicated to making your experience as smooth and
              pleasant as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-[#D4A373] mx-auto w-full md:w-[30%] text-white mt-5">
        <Link to="/products">
          <button className="py-2 px-4">View Our Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

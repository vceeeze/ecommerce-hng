import React from "react";
import image1 from "../assets/1 1.png"
import image2 from "../assets/1 1 (1).png"
import image3 from "../assets/1 1 (2).png"
import image4 from "../assets/1 1 (3).png";
import image5 from "../assets/1 1 (4).png";
import image6 from "../assets/1 1 (5).png";
import image7 from "../assets/1 1 (6).png";
import image8 from "../assets/1 1 (8).png";
import image9 from "../assets/1 1 (9).png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
 const images = [
   { name: "olive", url: image1 },
   { name: "Vitamin oil", url: image2 },
   { name: "Lavender Oil", url: image3 },
   { name: "Tea oil", url: image4 },
   { name: "Cedarwood Oil", url: image5 },
   { name: "Lemon Oil", url: image6 },
   { name: "Orange Oil", url: image7 },
   { name: "Jasmine Oil", url: image8 },
   { name: "Jasmine Oil", url: image9 },
   { name: "Cedarwood Oil", url: image1 },
   { name: "Orange Oil", url: image5 },
   { name: "Ylang Oil", url: image3 },
 ];


  
  return (
    <div className="container mx-auto p-4">
      <div className=" w-4/5 mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div className=" py-10 px-5 bg-white rounded-lg shadow-md relative">
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.url}
                alt={image.name}
                className="w-[50%] h-auto rounded-md"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="mt-2 text-sm ">{image.name}</p>
              <p className="text-sm">$30</p>
            </div>
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-1">
                <FaStar color="yellow" /> <FaStar color="yellow" />{" "}
                <FaStar color="yellow" /> <FaStar color="yellow" />{" "}
                <FaStar color="yellow" />
              </div>
              <div className="flex flex-row justify-between items-center ">
                <p>+</p> <p>-</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center ">
              <p className="text-sm text-green-300 mb-2">inStock: 14</p>
              <p className="h-3 w-3 rounded-lg bg-gray-600 text-white items-center justify-center text-sm">
                {" "}
              </p>
            </div>
            <Link to="/orders">
              <button className="absolute bottom-0 left-0 right-0 w-full h-10 bg-[#A3D9A5] text-white text-center">
                Add to Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

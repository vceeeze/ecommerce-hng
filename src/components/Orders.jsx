import React from "react";
import image1 from "../assets/1 1 (1).png"



const Orders = () => {
  return (
    <div className="container mx-auto p-4 w-[80%]   sm:w-3/5 my-20">
      <div className="flex flex-row justify-between border-b border-gray-300 py-10">
        <div className="flex flex-row justify-evenly">
          <img src={image1} alt="" className="w-[20%] h-auto" />
          <div>
            <p className="text-bold">Coconut</p>
            <p className="text-green-200">1 pcs</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <p>$500</p>
          <p className="text-orange-400">Processing</p>
        </div>
      </div>
      <div className="flex flex-row justify-between border-b border-gray-300 py-10">
        <div className="flex flex-row justify-evenly">
          <img src={image1} alt="" className="w-[20%] h-auto" />
          <div>
            <p className="text-bold">Virgin oil</p>
            <p className="text-green-200">1 pcs</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <p>$500</p>
          <p className="text-orange-400">Processing</p>
        </div>
      </div>
      <div className="flex flex-row justify-between border-b border-gray-300 py-10">
        <div className="flex flex-row justify-evenly">
          <img src={image1} alt="" className="w-[20%] h-auto" />
          <div>
            <p className="text-bold">Snake Oil</p>
            <p className="text-green-200">1 pcs</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <p>$500</p>
          <p className="text-orange-400">Processing</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;

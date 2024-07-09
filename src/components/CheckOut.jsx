import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="flex flex-col px-[300px] min-h-[100vh] pt-5">
      <Link to="/carts" className="rounded-full border border-[#D4A373] w-8 h-8 flex justify-center items-center mb-5 cursor-pointer">
        <div className="text-[#D4A373]">&lt;</div>
      </Link>
      <h3 className="text-center text-[#3F3730] text-lg font-bold">Checkout</h3>

      <div className="flex gap-[80px] mt-[50px] w-full">
        <div className="w-[50%]">
          <h3 className="font-semibold">Contact Information</h3>

          <div className="flex gap-3 mt-3 w-full">
            <input
              className="rounded h-[40px] border-2 w-full pl-2"
              placeholder="Email Address"
            />
            <input
              className="rounded h-[40px] border-2 w-full pl-2"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex gap-3 mt-4 w-full">
            <input
              className="rounded h-[40px] border-2 w-full pl-2"
              placeholder="First Name"
            />
            <input
              className="rounded h-[40px] border-2 w-full pl-2"
              placeholder="Last Name"
            />
          </div>

          <div className="mt-8 flex justify-between">
            <h3 className="font-semibold">Shipping Information</h3>

            <span className="text-[#D4A373] font-bold">Clear</span>
          </div>

          <div className="flex gap-3 mt-3 w-full">
            <input
              className="rounded h-[40px] border-2 w-full pl-2"
              placeholder="Address"
            />
          </div>

          <div className="flex gap-3 mt-3 w-full">
            <select className="rounded h-[40px] border-2 w-full pl-2">
              <option>State</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
            <select className="rounded h-[40px] border-2 w-full pl-2">
              <option>City</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>

          <div className="flex gap-3 mt-3 w-full">
            <input
              className="rounded h-[40px] border-2 w-1/2 pl-2"
              placeholder="Postal Code/ Zip"
            />
          </div>

          <div className="mt-8">
            <div className="gap-3 flex">
              <input type="checkbox" />
              <span className="font-semibold">Ship to another address</span>
            </div>

            <div className="gap-3 flex mt-4">
              <input type="checkbox" />
              <span className="font-semibold">
                Save this information for next time
              </span>
            </div>
          </div>

          <button className=" h-[40px] bg-[#D4A373] mx-auto text-white mt-10 rounded-md w-full">
            Check out
          </button>
        </div>

        <div className="bg-[#fffefb] min-w-[35%] h-fit py-4 px-8">
          <div className="flex justify-between border-b-2 pb-2">
            <span className="font-semibold">Sum Total</span>
            <span className="font-semibold">$1,234.56</span>
          </div>
          <div className="flex justify-between border-b-2 pb-2 mt-2">
            <span className="font-semibold">Delivery Fee</span>
            <span className="font-semibold">$12.00</span>
          </div>
          <div className="flex justify-between border-b-2 pb-2 mt-2">
            <span className="font-semibold">Grand Total</span>
            <span className="font-semibold">$12.00</span>
          </div>

          <div className="mt-5 text-center">
            <h3 className="font-bold">Select Payment Method</h3>
            <div className="flex gap-2 justify-center mt-2">
              <div className="gap-2 flex">
                <input type="radio" />
                <span className="font-semibold">Pay with Card</span>
              </div>

              <div className="gap-2 flex">
                <input type="radio" />
                <span className="font-semibold">Pay on Spot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

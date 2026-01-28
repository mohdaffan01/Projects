import React from "react";
import Sidbar from "./Sidbar";
import Navbar from "./Navbar";
import { BsSearch } from "react-icons/bs";

export default function Product(props) {
  return (
    <div className="ml-64 mt-16  h-full">
      <div className="flex items-center ">
        <h1 className="text-4xl p-4 font-semibold text-cyan-900">Products</h1>
        <input type="text" placeholder="Search product" className="border border-gray-300 w-full rounded px-3 py-1 focus:outline-none" />
        <button className="cursor-pointer m-4 text-gray-900 text-xl">
          <BsSearch />
        </button>
      </div>

      {/**All Products */}
      <div className="bg-gray-800 rounded-xl m-3 ml-4 mt-2 h-full p-2">
        <div className="bg-white rounded-xl shadow-md p-6 h-full grid grid-cols-4 gap-4 ">
          {/**add map funtion and fetch data from database */}
          <div className="border rounded-md p-2 ">
            <h2 className="text-2xl font-semibold text-gray-800">{props.name}</h2>
            <p className="text-gray-600 mt-2">Type : {props.type}</p>
            <p className="text-gray-600 mt-2">Category : {props.category}</p>
            <p className="text-gray-600 mt-2">Price : {props.price}</p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

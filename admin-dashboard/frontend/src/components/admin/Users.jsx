import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Users(props) {
  return (
    <div className="ml-64 mt-16  h-full">
      <div className="flex items-center ">
        <h1 className="text-4xl p-4 font-semibold text-cyan-900">Users</h1>
        <input type="text" placeholder="Search User" className="border border-gray-300 w-full rounded px-3 py-1 focus:outline-none" />
        <button className="cursor-pointer m-4 text-gray-900 text-xl">
          <BsSearch />
        </button>
      </div>

      {/**All users */}
      <div className="bg-gray-800 rounded-xl m-3 ml-4 mt-2 h-full p-2">
        <div className="bg-white rounded-xl shadow-md p-6 h-full ">
          {/**add map funtion and fetch data from database */}
          <div className="border rounded-md p-2">
            <h2 className="text-2xl font-semibold text-gray-800">{props.name} </h2>
            <p className="text-gray-600 mt-2">Phone number: {props.phoneNo}</p>
            <p className="text-gray-600 mt-2">Address: {props.address}</p>
            <p className="text-gray-600 mt-2">Product: {props.product}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

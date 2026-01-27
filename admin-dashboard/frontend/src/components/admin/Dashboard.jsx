import React from "react";
import SalesChart from "./SalesChart";
import Calendar from "./Calendar";
import Todo from "./Todo";

export default function Dashboard() {
  return (
    <div className="ml-64 mt-16 bg-cyan-100 h-screen">
      <div className=" text-cyan-900 p-6 rounded">
        <h1 className="text-4xl font-semibold">Dashboard</h1>

        {/**card for item */}
        <div className="flex gap-13 w-full">
          <div className="relative bg-blue-500 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-300">120</h1>
            <p className="text-2xl m-4 font-sans text-gray-300">New Orders</p>

            {/* bottom bar */}
            <div className="absolute bottom-0 left-0 w-full bg-blue-900 text-center py-2 cursor-pointer hover:bg-blue-800 transition">
              <span className="flex text-white items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
          </div>

          <div className="relative bg-purple-400 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-200">120</h1>
            <p className="text-2xl m-4 font-sans text-gray-100">Bounce rate</p>
            <div className="absolute bottom-0 left-0 w-full bg-purple-700 text-center text-white py-2 cursor-pointer hover:bg-black/20 transition">
              <span className="flex items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
          </div>

          <div className="relative bg-cyan-600 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-300">120</h1>
            <p className="text-2xl m-4 font-sans text-gray-300">
              User Registration
            </p>
            <div className="absolute bottom-0 left-0 w-full bg-cyan-900 text-white text-center py-2 cursor-pointer hover:bg-black/20 transition">
              <span className="flex items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
          </div>
          <div className="relative bg-slate-400 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-300">120</h1>
            <p className="text-2xl m-4 font-sans text-gray-200">
              Unique visitors
            </p>
            <div className="absolute bottom-0 left-0 w-full bg-slate-700 text-white text-center py-2 cursor-pointer hover:bg-black/20 transition">
              <span className="flex items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/**add component of sale */}
      <SalesChart />
      <div className="flex bg-cyan-100">
        <Calendar />
        <Todo />
      </div>
    </div>
  );
}

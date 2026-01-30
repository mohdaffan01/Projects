import React, { useEffect, useState } from "react";
import Sidbar from "./Sidbar";
import Navbar from "./Navbar";
import { BsSearch } from "react-icons/bs";
import axios from "../../api/axios";

export default function Order() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/getOrders");
        setOrders(response.data.data);
      } catch (error) {
        alert("Something went wrong");
      }
    };
    fetchOrders();
  }, []);
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
          {orders.map((order) => (
            <div key={order._id} className="border rounded-md p-2 ">
              <p className="text-gray-600 font-bold mt-2">Byer : {order.user.name}</p>
              <p className="text-gray-600 font-bold mt-2">Product : {order.product.name}</p>
              <p className="text-gray-600 mt-2">No of Items : {order.noOfItem}</p>
              <p className="text-gray-600 mt-2">Total Amount : {order.totalAmount}</p>
              <p className="text-gray-600 mt-2">Order Status : {order.orderStatus}</p>
              <p className="text-gray-600 mt-2">Payment Status : {order.paymentStatus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

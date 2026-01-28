import React from "react";
import Navbar from "./Navbar";
import Sidbar from "./Sidbar";
import Dashboard from "./Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Users from "./Users";

export default function AdminDashboard() {
  return (
    <div>
      <Sidbar />
      <Navbar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Product name={"keyboard"} category={"Electronics"} type={"computer"} price={"1000"}/>} />
        <Route path="users" element={<Users name={"Affan"} phoneNo={"9898989"} address={"Sahaspur"} product={"electronics"}/>} />

        <Route path="" element={<Navigate to={"dashboard"} />} />
        
      </Routes>
    </div>
  );
}

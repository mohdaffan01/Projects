import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [loginData, setLoginData] = useState({
    username : "",
    password : ""
  })

  const handleOnChange = (e) => {
    setLoginData({
      ...loginData, 
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method : "POST",
        headers :{
          "content-type" : "application/json"
        },
        body : JSON.stringify(loginData)
      });

      console.log(res)

      const data = await res.json()
      alert(data.message)
    } catch (error) {
      console.log(error)
      alert("login failed")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="p-4 bg-white w-2xl h-125 border-2 border-green-600 rounded-lg text-center">

        {/* Title */}
        <h1 className="text-3xl font-bold mt-8 ">Login</h1>

        {/* Inputs */}
        <div className="flex flex-col items-center mt-20 gap-6">
          <input
            type="text"
            name="username"
            className="w-84 h-12 p-2 border-2 rounded-lg"
            placeholder="Enter username"
            value={loginData.username}
            onChange={handleOnChange}
          />

          <input
            type="password"
            name="password"
            className="w-84 h-12 p-2 border-2 rounded-lg"
            placeholder="Enter password"
            value={loginData.password}
            onChange={handleOnChange}
          />
        </div>

        {/* Forgot password */}
        <div className="mt-2">
          <Link to="/forgotPassword">
            <p className="text-green-700 cursor-pointer hover:text-green-500">
              Forgot Password?
            </p>
          </Link>
        </div>

        {/* Login button */}
        <button
        onClick={handleLogin}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Login
        </button>

        {/* Go to Sign Up */}
        <p className="mt-4">
          Don't have any account?
          <Link to="/signup">
            <span className="text-green-700 cursor-pointer hover:text-green-500 ml-1">
              Sign Up
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;

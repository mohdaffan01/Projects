import React, { useState} from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [formData , setFormData] = useState({email : "", username : "", password : ""}); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    }) 
    
  }
  
  const handleSignUp = async () => {
    try {
      console.log(formData);

      const res = await fetch("http://localhost:3000/user",{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
      
    } catch (error) {
      console.log(error);
      alert("signup failed")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="p-4 bg-white w-2xl h-125 border-2 border-green-600 rounded-lg text-center">

        {/* Title */}
        <div className="text-center mb-6">
          <p className="text-2xl font-bold">Sign Up</p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col items-center gap-6">
          <input
            type="email"
            name="email"
            className="w-84 h-12 p-2 border-2 rounded-lg"
            placeholder="Enter your Email ID"
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            className="w-84 h-12 p-2 border-2 rounded-lg"
            placeholder="Enter username"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="w-84 h-12 p-2 border-2 rounded-lg"
            placeholder="Enter password"
            onChange={handleChange}
          />

        </div>
        

        {/* Button  */}
        <div className="flex flex-col mx-36 p-2  w-88 justify-center mt-4">
          <button 
          onClick={handleSignUp}
          className="px-6 py-2 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition">
            Sign Up
          </button>
        </div>

        <Link to="/">
        <p className="">Already have an Account, {" "}
          <span className="text-green-800 hover:text-green-500 cursor-pointer ">Login</span>
        </p>
        </Link>



      </div>
    </div>

  );
};

export default SignUp;
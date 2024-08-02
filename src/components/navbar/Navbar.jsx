import React, { useEffect, useRef, useState } from "react";
import { json, NavLink, useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'))
 
  const logout = () => {
    localStorage.clear('user');
    window.location.href = "/";
} 

const cartItems = useSelector((state) => state.cart)
  
  return (
    <>
      <nav  className=" w-full h-[60px]  shadow-xl  shadow-gray-500 ">
        <div className=" px-[50px] flex justify-between mt-3">
          <div className=" flex items-center  gap-x-10">
            <NavLink to="/" >
              <h1 className="text-4xl font-extrabold " >
                Logo
              </h1>
            </NavLink>
            <NavLink to="/shop">
              <h1 className=" font-semibold text-[20px] text-[#1a1a1a] transition-all hover:text-[#088178] ">
                Shop
              </h1>
            </NavLink >
            <NavLink to="/productinfo/:id">
              <h1 className="font-semibold text-[20px] text-[#1a1a1a] transition-all hover:text-[#088178] ">
                Blog
              </h1>
            </NavLink>
            
          </div>
         
          <div className="flex items-center gap-x-10 ">

        {user?.user?.email === "apoorvverma73@gmail.com" ?<NavLink to="/dashboard">
              <h1 className="font-semibold text-[20px] text-[#1a1a1a] transition-all hover:text-[#088178] ">
                Admin
              </h1>
            </NavLink> : "" }

             {user ? <NavLink>
              <h1 onClick={logout} className="font-semibold text-[20px] text-[#1a1a1a] transition-all  hover:text-[#088178] ">
                Logout
              </h1>
            </NavLink> : <NavLink to = "/login">
              <h1 className="font-semibold text-[20px] text-[#1a1a1a] transition-all hover:text-[#088178] " >
                LogIn
              </h1>
            </NavLink> }
            <NavLink to = "/order">
              <h1 className="font-semibold text-[20px] text-[#1a1a1a] transition-all hover:text-[#088178] " >
                Order
              </h1>
            </NavLink>
           
            <NavLink to="/cart">
              <span className="flex  font-semibold text-[30px] text-[#1a1a1a] transition-all hover:text-[#088178] ">
                <TiShoppingCart /> <span className="ml-[2px] pt-[4px] text-sm font-bold text-gray-700 group-" >{cartItems.length}</span>                
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

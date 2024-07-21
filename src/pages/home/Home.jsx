import React from "react";
import Layout from "../../components/layout/Layout";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import HomeProduct from "../../components/homeProduct/HomeProduct";

function Home() {
  return (
    <Layout>
      <div className="w-full h-[600px] ">
        <div className=" w-full  ">
          <div className="sm:col-span-8  px-[50px] pt-[100px] ">
            <h2 className="text-[60px] font-bold">Let's Buy</h2>
            <h1 className="text-[80px] font-extrabold text-[#088178] ">
              Your Fashion
            </h1>
            <p className="line-clamp-3 w-[400px] text-[#465b52]">
              Welcome to Shop with Apoorv! Discover amazing deals and products for
              a delightful shopping experience. Start exploring now!
            </p>

            <NavLink to="/shop">
              <button className="flex items-center text-[25px] mt-5 border-black px-7 py-2 rounded-xl border-4">
                Let's Shop{" "}
                <span className="ms-4 mt-3 text-6xl">
                  <FaLongArrowAltRight />
                </span>
              </button>
            </NavLink>
          </div>
        
        </div>
      </div>
      <div>
          
        </div>
      <HomeProduct />
    </Layout>
  );
}

export default Home;

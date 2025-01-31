import React, { useContext, useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./style.css";
import Banner from "../Banner/Banner";
import MyContext from "../../context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/CartSlice";
import { useNavigate } from "react-router-dom";


function HomeProduct() {

  const navigate = useNavigate()
  const context = useContext(MyContext);
 const {getProduct} = context;
 
 const dispatch = useDispatch();
 const cartItems = useSelector((state) => state.cart)
// console.log(cartItems);
 const addCart = (getProduct) => {
  dispatch(addToCart(getProduct))
  toast.success('add to cart',
    {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
}

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems])
  return (
    <>
      <div className="w-full px-10 mt-0 py-8 ">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-extrabold text-5xl mb-5 ">Featured Products</h1>
          <p className="line-clamp-3 w-[400px] text-[#465b52] ml-28 ">
            Our Collection with Modern Design
          </p>
        </div>
        <div className="sm:col-span-1 flex flex-wrap justify-between ">
          {getProduct.map((item,index)=>{
               const { title, price, description, imageUrl,id } = item;
            return (
              <div key={index} className="pro">
            <img className="w-[100px] h-[280px]" src={imageUrl} alt="" />
            <div className="des">
              <span>{title}</span>
              <h5>{description}</h5>
              <h4>₹{price}</h4>
            </div>
            <div onClick={()=>addCart(item)} className="cart">
              
              <MdOutlineAddShoppingCart className="m-[10px] text-xl" />{" "}
            </div>
            <div>
              {" "}
              <button  onClick={()=> navigate (`/productinfo/${id}`)} className="w-[100px] h-[30px] bg-[#088178] active:scale-105 text-white px-3 pb-1 hover:bg-[#1a5a56ee]  rounded-2xl ">
                More
              </button>
            </div>
          </div>
            )
          })}
        </div>
      </div>
      <Banner />
    </>
  );
}

export default HomeProduct;

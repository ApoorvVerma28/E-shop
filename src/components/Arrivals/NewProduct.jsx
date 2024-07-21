import React from "react";
import "./NewPro.css";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import EmailRes from "../Email/EmailRes";

const NewProduct = () => {
  const newProduct = [
    {
      "title": "Vintage Denim Jacket",
      "price": "799",
      "description": "Men Vintage Tailored Fit Checked Denim Jacket",
      "category": "Outerwear",
      "imageUrl": "https://assets.ajio.com/medias/sys_master/root/20220802/hUPh/62e940a6aeb26921afbdd74e/-473Wx593H-441537918-denim-MODEL.jpg"
    },
    {
      "title": "Cotton Shirt",
      "price": "499",
      "description": "Soft and warm knit sweater perfect for chilly days.",
      "category": "Sweaters",
      "imageUrl": "https://assets.ajio.com/medias/sys_master/root/20240610/DAED/666659cd05ac7d77bbb2318f/-473Wx593H-700061216-beige-MODEL.jpg"
    },
    {
      "title": "Tailored Slim Fit Trousers",
      "price": "699",
      "description": "Modern slim fit trousers crafted from stretch cotton .",
      "category": "Pants",
      "imageUrl": "https://assets.ajio.com/medias/sys_master/root/20230928/a9zn/65148b0cafa4cf41f514176a/-473Wx593H-466645294-grey-MODEL.jpg"
    },
    {
      "title": "Floral Dress",
      "price": "899",
      "description": "Elegant  dress adorned with a vibrant floral print.",
      "category": "Dresses",
      "imageUrl": "https://assets.ajio.com/medias/sys_master/root/20240507/hyM0/6639312d05ac7d77bb442ea7/-473Wx593H-466530877-blue-MODEL.jpg"
    },
    {
      "title": "Leather Pant",
      "price": "1299",
      "description": "Luxurious leather pant with sleek design for everyday use.",
      "category": "Pant",
      "imageUrl": "https://assets.ajio.com/medias/sys_master/root/20240528/OThv/6655db4f16fd2c6e6a32172e/-473Wx593H-700020145-black-MODEL.jpg"
    },
    
      {
        title: "Men's Casual Shirt",
        imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg",
        category: "Shirts",
        description: "Comfortable and stylish casual shirt for men.",
        price: "299"
      },
      {
        title: "Women's Summer Dress",
        imageUrl: "https://assets.ajio.com/medias/sys_master/root/20230808/J1WM/64d16f39a9b42d15c995b2e0/-473Wx593H-466429240-black-MODEL.jpg",
        category: "Dresses",
        description: "Lightweight and elegant dress for summer wear.",
        price: "399"
      },
      {
        title: "Unisex Hoodie",
        imageUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0c51216aebe747d8bf44c4293b5b6c41_9366/Y-3_Graphic_Logo_Hoodie_White_IT7524_21_model.jpg",
        category: "Outerwear",
        description: "Warm and cozy hoodie suitable for all seasons.",
        price: "499"
      },
    
    ];
    
 
  

  return (
    <>
      <div className="w-full px-10 py-8 mt-10">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-extrabold text-5xl mb-5 ">New Arriable</h1>
          <p className="line-clamp-3 w-[400px] text-[#465b52] ml-28 ">
            Summer Collection New Modern Design
          </p>
        </div>
        <div className="sm:col-span-1 flex flex-wrap justify-between ">
         {newProduct.map((item,index)=>{
          return( <div key={index} className="pro">
            <img className="w-[100px] h-[280px]" src={item.imageUrl} alt="" />
            <div className="des">
              <span>{item.title}</span>
              <h5>{item.description}</h5>
              <h4>${item.price}</h4>
            </div>
            <Link to="/cart" className="cart">
              {" "}
              <MdOutlineAddShoppingCart className="m-[10px] text-xl" />{" "}
            </Link>
            <button className="w-[100px] h-[30px] bg-[#088178] hover:bg-[#1a5a56ee]  active:scale-105 text-white px-3 pb-1 rounded-2xl ">
              More
            </button>
          </div>)
         })}
        </div>
      </div>
      <EmailRes />
    </>
  );
};

export default NewProduct;

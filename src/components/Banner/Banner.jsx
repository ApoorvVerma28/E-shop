import React from 'react'
import "./Banner.css"
import NewProduct from '../Arrivals/NewProduct'
import { Link } from 'react-router-dom'

const NewPro = () => {
  return (
    <>
     <div id="sm-banner" className="section-p1 flex items-center gap-2 mb-10 px-[50px]">
      <div className="banner-box">
        <h4>Crazy Deals</h4>
        <h2>Buy 1 get 1 free</h2>
        <span>The best classic dress is on sale at Cara</span>
        <Link to="/blog"><button className="text-white px-5 border-[1px] border-white py-2">Leran More</button></Link> 
      </div>
      <div className="banner-box banner-box2">
        <h4>spring/Summer</h4>
        <h2>Upcoming season</h2>
        <span>The best classic dress is on sale at Cara</span>
       <Link to="/shop"><button className="text-white px-5 border-[1px] border-white py-2">Collection</button></Link> 
      </div>
    </div>
    <section id="banner3">
      <div className="banner-box">
        <h2>Jwellery</h2>
        <h3>Drop UPTO 50%</h3>
      </div>
      <div className="banner-box banner-box2">
        <h2>Seasonal Sale</h2>
        <h3>Winter Collection -50% OFF</h3>
      </div>
      <div className="banner-box banner-box3">
        <h2>T-Shirts</h2>
        <h3>New Trendy Prints</h3>
      </div>
    </section>
    <NewProduct/>
     </>
  )
}

export default NewPro
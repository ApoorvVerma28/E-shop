import React from 'react'
import '../Email/EmailRes.css'

const EmailRes = () => {
  return (
    <> 
    <section id="newsletter" className="section-p1 h-40  px-[50px]">
      <div className="newstext">
        <h4>Updated via Email</h4>
        <p>
          Get E-mail updates about our latest shop and
          <span> Special Offer.</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your Email" />
        <button className="normal px-5">Get Updates</button>
      </div>
    </section>
    </>
  )
}

export default EmailRes
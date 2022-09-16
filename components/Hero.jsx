import React from 'react';
import NavBar from "./NavBar";
import Image from "next/image";
import cover from "../public/cover.jpg"
function Hero() {
  return (

    <div>
      
      <div className="d-flex flex-column justify-content-center align-items-center text-white hero px-5">
        <h2 className="">We Are Ready To Make Your Car Health Again</h2>
        <p className="display-2 py-2 ">ZAMBIAN BEST CAR DOCTORS</p>
        <p className="h4">
          We are the best auto mechanic repair company. we offer hight quality services at an affordable price
        </p>
      </div> 
    </div>
    
  )
}
export default Hero
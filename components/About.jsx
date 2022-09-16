import React from 'react'
import Image from "next/image"
import bmw from "../public/bmw.jpg"
function About() {
  return (
    <div className="container my-5" id="about">
      <div className="row">
        <div className="col-sm-12 col-md-4">
            <Image  src={bmw} className="img-hover" />
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="text-center">
            <h3 className="fw-bold img-hover">About Us</h3>
            <h5 className="mt-5">Professional Car Repairs</h5>
            
            <p className="text-secondary">
              We are a small company specialized in automobile car repair.
              We are specialized in Yoyota, Nissan, Ford and Mitsubshi Car brand.
              
             </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
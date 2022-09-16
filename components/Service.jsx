import React from 'react'
import Image from "next/image"
import cover from "../public/cover.jpg"
import SimpleCard from "./SimpleCard"
import { carDiagnosis, engineRepair, suspensionRepair } from "../data/services"
function Service() {
  return (
    <div className="mt-5" id="service">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="text-center fw-bold">Services</h3>
                    <h5 className="text-center fw-bold pt-5">We Are Focused In Providing High Quality Services</h5>
                    <p className="text-secondary">
                        Since 2004 we have repaired more than 40 000 vehicles for different companies.
                        Our main focus is to provide focus satisfaction to our customers

                    </p>
                    <div className="row mt-5 gy-5">
                        <div className="col-sm-12 col-md-4 " id="diagnosis">
                            <SimpleCard data={carDiagnosis} />
                        </div>
                        <div className="col-sm-12 col-md-4" id="engine">
                            <SimpleCard data={engineRepair}/>
                        </div>
                        <div className="col-sm-12 col-md-4" id="suspension">
                            <SimpleCard data={suspensionRepair} />
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Service
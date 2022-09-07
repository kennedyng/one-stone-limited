import React from 'react'
import StaffCard from './StaffCard'
import { carDiagnosis } from "../data/services"




const Kennedy = {
    title: "Software Engineer",
    description: "Hi, my name is kennedy. am a web developer. i love designing and developing web systems"
}


const Lloyd = {
    title: "Electro Mecahnical Engineer",
    description: "my name is Lloyd m. am exprienced in auto mobile systems"
}


const John = {
    title: "Auto Mechanical Technician",
    description: "am a well skilled technician in auto car repair"
}

const Meston = {
    title: "Electrical Engineer",
    description: "Hi, my name is meston."
}


const Nathan = {
    title: "Sales Manager",
    description: "Hi, my "
}
function Staff() {
  return (
    <div className="container pt-5 text-center" id="staff">
        <h3 className="pb-5">Our Staff</h3>
        <div className="row justify-content-center gy-5">
            <div className="col-sm-2">
                <StaffCard data={Kennedy}  />    
            </div>
            <div className="col-sm-2">
                <StaffCard data={Lloyd} />    
            </div>
            <div className="col-sm-2">
                <StaffCard data={John} />    
            </div>
            <div className="col-sm-2">
                <StaffCard data={Meston} />    
            </div>
            <div className="col-sm-2">
                <StaffCard data={Nathan} />    
            </div>
           
        </div>
    </div>
  )
}

export default Staff
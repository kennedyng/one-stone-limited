import React from 'react'
import Image from "next/image"
import cover from "../public/cover.jpg"


function StaffCard({data}) {
  return (
    <div class="card"  >
            <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text text-secondary">{data.description}</p>
            </div>
            
    </div>
  )
}

export default StaffCard
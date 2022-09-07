import React from 'react'
import Image from "next/image"
import cover from "../public/cover.jpg"

function SimpleCard({data}) {
  return (
    <div class="card" >
        <Image height={400} src={data.img} />
        <div class="card-body">
            <h5 class="card-title text-center">{data.title}</h5>
            <p class="card-text text-secondary">{data.description}</p>
        </div>
    </div>
  )
}

export default SimpleCard
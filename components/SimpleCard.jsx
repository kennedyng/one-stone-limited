import React from 'react'
import Image from "next/image"

function SimpleCard({data}) {
  return (
    <div className="card" >
        <Image height={400} src={data.img} />
        <div className="card-body">
            <h5 className="card-title text-center">{data.title}</h5>
            <p className="card-text text-secondary">{data.description}</p>
        </div>
    </div>
  )
}

export default SimpleCard
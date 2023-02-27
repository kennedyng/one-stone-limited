import React from "react";
import Image from "next/image";
import cover from "../public/cover.jpg";

function StaffCard({ data }) {
  return (
    <div className="card " style={{ height: "150px" }}>
      <div className="card-body ">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text text-secondary">{data.description}</p>
      </div>
    </div>
  );
}

export default StaffCard;

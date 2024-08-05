import axios from "axios";
import React from "react";

const Product = ({ title, price,  image }) => {
  return (
   

    <div className="card bg-base-100 ">
      <figure className="">
        <img src={image} alt="image" className=""  />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <button className="btn btn-outline-primary ">Buy Now</button>
      </div>
    </div>
  );
};

export default Product;

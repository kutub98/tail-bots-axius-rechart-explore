import React from "react";
import Featurs from "../Featurs/Featurs";
import "./SinglePrice.css";

const SinglePrice = ({ priceOption }) => {
  const { name, price, features, durations } = priceOption;
  console.log(features);
  return (
    <div>
      <div className="singlePrice">
        <h1 className="text-2xl">{name}</h1>
        <h1 className=" my-4">
          <span className=" text-6xl text-blue-700 "> ${price}</span> <span>/month</span>
        </h1>

        <div className="justify-between">
           {
            features.map((feature, idx) => <Featurs key= {idx} feature ={feature} ></Featurs>)
           }
        </div>
        <button >Buy now</button>
      </div>
    </div>
  );
};

export default SinglePrice;

import React from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { TbDimensions } from "react-icons/tb";

function Card({ data }) {
  return (
    <div className="card-container">
      <img className="card-img" src={data.image} alt="property" />
      <div className="card-content">
        <div className="card-price-container">
          <h4>
            ${data.cost}
            <span>/month</span>
          </h4>
          <div>
            <FaRegHeart />
          </div>
        </div>
        <div className="card-name-container">
          <h4>{data.title}</h4>
          <p>{data.address}</p>
        </div>
        <div className="card-footer-container">
          <span>
            <IoBedOutline color="#6e66ec" /> {data.beds} bed
          </span>
          <span>
            <BiBath color="#6e66ec" /> {data.bathrooms} bathrooms
          </span>
          <span>
            <TbDimensions color="#6e66ec" />
            {data.area} m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;

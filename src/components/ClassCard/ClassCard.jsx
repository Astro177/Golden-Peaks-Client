/* eslint-disable react/prop-types */
import React from "react";

const ClassCard = ({ singleClass }) => {
  const {
    _id,
    class_name,
    class_image,
    instructor_name,
    available_seats,
    price,
    number_of_students,
  } = singleClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={class_image} alt="Shoes" className="rounded-xl w-72 h-48"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl font-bold">{class_name}</h2>
    <p className="text-md font-semibold">Instructor: {instructor_name}</p>
    <p>Available Seats: {available_seats}</p>
    <p>Price: {price}$</p>
    <div className="card-actions">
      <button className="btn-outlined">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default ClassCard;

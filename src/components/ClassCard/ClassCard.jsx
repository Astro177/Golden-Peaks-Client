/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../../provider/Authprovider";
import { toast } from "react-hot-toast";

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
  const { user } = useContext(AuthContext);

  const handleSelected=()=>{
    if(!user){
      toast.error("Please log in first");
    }
  }
  
  return (
    <div className="card items-center w-96 bg-base-100 shadow-xl mb-6">
      <figure className="px-10 pt-10">
        <img src={class_image} alt="Shoes" className="rounded-xl w-72 h-48 relative" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold">{class_name}</h2>
        <p className="text-md font-semibold">Instructor: {instructor_name}</p>
        <p className="absolute top-10 right-6 bg-teal-200 font-semibold rounded-xl p-1 text-black text-sm">Students: {number_of_students}</p>
        <p className="font-semibold">Available Seats: {available_seats}</p>
        <p className="font-semibold">Price: {price}$</p>
        <div>
          <button onClick={handleSelected} className="btn-outlined">Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

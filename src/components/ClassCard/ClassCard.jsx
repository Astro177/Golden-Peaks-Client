/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useNavigation } from "react-router-dom";
import Loader from "../../shared/Loader";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import useClass from "../../hooks/useClass";
import useEnroll from "../../hooks/useEnroll";

const ClassCard = ({ singleClass }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  const {
    _id,
    class_name,
    class_image,
    instructor_name,
    available_seats,
    price,
    number_of_students,
  } = singleClass;
  const { user } = useAuth();
  const token = localStorage.getItem("access-token");
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [addedClass , refetch] = useClass();
  const [enrollClasses] = useEnroll();
  console.log(enrollClasses);

  const handleSelected = () => {
    if (user) {
      const classDetails = {
        classId: _id,
        class_name,
        instructor_name,
        available_seats,
        price,
        class_image,
        number_of_students,
        email: user?.email,
      };
      fetch(`${import.meta.env.VITE_API_URL}/selected-classes-cart`, {
        method: "POST",
        headers: {
          authorization: `bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(classDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Class added successfully");
          }
        });
    } else {
      toast.error("Please log in first");
      Navigate("/login");
    }
  };

  return (
    <div className={`card items-center w-96 ${available_seats <= 0 ? "bg-red-900" : "bg-base-100"} shadow-xl mb-6`}>
      <figure className="px-10 pt-10">
        <img
          src={class_image}
          alt="Shoes"
          className="rounded-xl w-72 h-48 relative hover:scale-110 transition-all"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold">{class_name}</h2>
        <p className="text-md font-semibold">Instructor: {instructor_name}</p>
        <p className="absolute top-10 right-6 bg-teal-200 font-semibold rounded-xl p-1 text-black text-sm">
          Students: {number_of_students}
        </p>
        <p className="font-semibold">Available Seats: {available_seats}</p>
        <p className="font-semibold">Price: {price}$</p>
        <div>
          <button
            disabled={
              available_seats <= 0 ||
              isAdmin ||
              isInstructor
                ? true
                : false
            }
            onClick={handleSelected}
            className={isAdmin||isInstructor?"btn":"btn-outlined"}
          >
            Select Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

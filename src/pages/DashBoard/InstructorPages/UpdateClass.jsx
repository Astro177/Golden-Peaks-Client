import React from "react";

import Swal from "sweetalert2";

import { useNavigation, useParams } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllClasses from "../../../hooks/useAllClasses";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const UpdateClass = () => {
  const paramsId = useParams();
  const id = paramsId.id;
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [classes, , refetch] = useAllClasses();
  const data = classes.find((item) => item._id === id);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const instructorName = form.name.value;
    const instructorEmail = form.email.value;
    const className = form.className.value;
    const classPrice = form.price.value;
    const price = parseInt(classPrice);
    const image = form.photo.value;
    const availableSeats = form.seat.value;
    const numberOfStudents = 0;
    const status = "pending";
    const updateClass = {
      className,
      image,
      instructorName,
      instructorEmail,
      numberOfStudents,
      availableSeats,
      price,
      status,
    };

    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/popular-classes/${id}`,
      updateClass
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        title: "Success!",
        text: "Class updated successfully, waiting for admin approval!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <section>
      <Helmet>
        <title>String | Dashboard-Update Class</title>
      </Helmet>
      <SectionTitle
        subHeading="Wanna update your classes?"
        heading="Update now!"
      />
      <div className="lg:mx-14">
        <form className="w-full space-y-7 mt-16" onSubmit={handleUpdate}>
          {/* Name and email */}
          <div className="md:flex gap-4 space-y-3">
            <div className="md:w-1/2">
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                placeholder="Your Name"
                className="w-full inputField"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                name="email"
                defaultValue={user.email}
                placeholder="Your email"
                className="w-full inputField"
              />
            </div>
          </div>
          {/* name & photo */}
          <div className="md:flex gap-4 mt-2 space-y-3">
            <div className="md:w-1/2">
              <input
                type="text"
                defaultValue={data?.className}
                name="className"
                placeholder="Class Name"
                className="w-full inputField"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="url"
                defaultValue={data?.image}
                placeholder="Class Image"
                name="photo"
                className="w-full inputField"
              />
            </div>
          </div>

          {/* sit & price */}
          <div className="md:flex gap-4 mt-2 space-y-3">
            <div className="md:w-1/2">
              <input
                type="text"
                defaultValue={data?.availableSeats}
                name="seat"
                placeholder="Available Seat"
                className="w-full inputField"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="number"
                defaultValue={data?.price}
                placeholder="Class Price"
                name="price"
                className="w-full inputField"
              />
            </div>
          </div>

          <div className="w-full text-center">
            <input
              className="btn-outlined w-1/2 my-5 mx-auto"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateClass;

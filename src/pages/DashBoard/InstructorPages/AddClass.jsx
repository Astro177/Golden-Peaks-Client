import React from "react";

import useAuth from "../../../hooks/useAuth";

import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllClasses from "../../../hooks/useAllClasses";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [, , refetch] = useAllClasses();

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const instructor_name = form.name.value;
    const instructor_email = form.email.value;
    const class_name = form.className.value;
    const classPrice = form.price.value;
    const price = parseInt(classPrice);
    const image = form.photo.value;
    const available_seats = form.seat.value;
    const number_of_students = 0;
    const status = "pending";
    const newClass = {
      class_name,
      image,
      instructor_name,
      instructor_email,
      number_of_students,
      available_seats,
      price,
      status,
    };

    console.log(newClass);
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/popular-classes`, newClass);
    if (res.data.insertedId) {
      refetch();
      form.reset()
      toast.success("Class added successfully");
    }
  };

  return (
    <section>
      <Helmet>
        <title>Golden Peaks | Dashboard Add Class</title>
      </Helmet>
      <SectionTitle subHeading="Wanna add a class?" heading="Add Now"/>
      <div className="lg:mx-14">
        <form className="w-full space-y-7 mt-16" onSubmit={handleAdd}>
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
          {/* name and photo */}
          <div className="md:flex gap-4 mt-2 space-y-3">
            <div className="md:w-1/2">
              <input
                type="text"
                name="className"
                placeholder="Class Name"
                className="w-full inputField"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Class Image"
                name="photo"
                className="w-full inputField"
              />
            </div>
          </div>

          {/* sit and  price*/}
          <div className="md:flex gap-4 mt-2 space-y-3">
            <div className="md:w-1/2">
              <input
                type="text"
                name="seat"
                placeholder="Available Seat"
                className="w-full inputField"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="number"
                placeholder="Class Price"
                name="price"
                className="w-full inputField"
              />
            </div>
          </div>

          <div className="w-full text-center">
            <input
              className="btn-outlined cursor-pointer w-1/2 my-5 mx-auto"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddClass;

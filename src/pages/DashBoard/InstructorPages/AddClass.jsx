import React from "react";

import useAuth from "../../../hooks/useAuth";

import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllClasses from "../../../hooks/useAllClasses";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [, , refetch] = useAllClasses();

  const handleAdd = async (e) => {
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
    const newClass = {
      className,
      image,
      instructorName,
      instructorEmail,
      numberOfStudents,
      availableSeats,
      price,
      status,
    };

    console.log(newClass);
    const res = await axiosSecure.post("/class", newClass);
    if (res.data.insertedId) {
      refetch();
      form.reset()
      toast.success("Class added successfully");
    }
  };

  return (
    <section>
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

          {/* sit and  */}
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

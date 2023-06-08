/* eslint-disable react/prop-types */
import React from "react";

const InstructorView = ({ teacher }) => {
  return (
    <div className="avatar flex flex-col text-center justify-center items-center shadow-md rounded-2xl">
      <div className="w-48 mask mask-squircle relative">
        <img src={teacher?.image} />
      </div>
      <>
        <p className="font-bold text-color text-3xl mt-8">{teacher.name}</p>
        <p className="text-md font-semibold">Class: {teacher.class_name}</p>
        <p className="text-sm">Email: {teacher.email}</p>
        <p className="text-sm font-semibold">
          Classes: {teacher.classes_taken}
        </p>
        <p className="text-sm mb-10 font-semibold absolute top-0 right-20 p-1 bg-teal-200 rounded-xl text-black">
          Students: {teacher.number_of_students}
        </p>
        <div>
          <button className="btn-outlined">See Classes</button>
        </div>
      </>
    </div>
  );
};

export default InstructorView;

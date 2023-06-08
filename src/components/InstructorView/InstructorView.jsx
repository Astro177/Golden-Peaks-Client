/* eslint-disable react/prop-types */
import React from "react";

const InstructorView = ({ teacher }) => {
  return (
    <div className="avatar flex flex-col text-center justify-center items-center">
      <div className="w-48 mask mask-squircle">
        <img src={teacher?.image} />
      </div>
      <>
        <p className="font-bold text-color text-3xl mt-8">{teacher.name}</p>
        <p className="text-md font-semibold">Class: {teacher.class_name}</p>
        <p className="text-sm mb-10">Email: {teacher.email}</p>
      </>
    </div>
  );
};

export default InstructorView;

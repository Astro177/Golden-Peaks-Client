import React from "react";

import { HiOutlinePlay } from "react-icons/hi2";
import useEnroll from "../../hooks/useEnroll";


const EnrolledClasses = () => {
  const [enrollClasses] = useEnroll();

  return (
    <section>
     
      <div className="flex items-center justify-center lg:mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {enrollClasses.map((enrollClass) => (
            <div
              key={enrollClass._id}
              className="card card-compact w-84 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={enrollClass?.image}
                  alt="Image"
                  className="h-40 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{enrollClass?.className}</h2>
                <div className="space-y-3 mb-3">
                  <p className="font-semibold">
                    Instructor Name: {enrollClass?.instructorName}
                  </p>
                  <p className="font-semibold">
                    Instructor Email: {enrollClass?.instructorEmail}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button className="bg-primary px-2 py-2 rounded-full">
                    <HiOutlinePlay className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrolledClasses;

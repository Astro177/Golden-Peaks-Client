import React from "react";

import { HiOutlinePlay } from "react-icons/hi2";
import useEnroll from "../../hooks/useEnroll";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const EnrolledClasses = () => {
  const [enrollClasses] = useEnroll();
  console.log(enrollClasses);
  return (
    <section>
      <Helmet>
        <title>Golden Peaks | Dashboard-Enroll Classes</title>
      </Helmet>
      <SectionTitle heading="All your enrolled classes"/>
      <div className="flex items-center justify-center lg:mx-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {enrollClasses.map((enrollClass) => (
            <div
              key={enrollClass._id}
              className="card card-compact w-84 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={enrollClass?.class_image}
                  alt="Image"
                  className="h-40 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Enrolled Class: <span className="text-color">{enrollClass?.class_name}</span></h2>
                <div className="space-y-3 mb-3">
                <h2 className="text-lg">Instructor Name: <span className="text-color">{enrollClass?.instructor_name}</span></h2>
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

import React, { useEffect, useState } from "react";
import InstructorView from "../../components/InstructorView/InstructorView.Jsx";
import useAllInstructors from "../../hooks/useAllInstructors";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors] = useAllInstructors();
  return (
    <div className="my-container">
      <Helmet>
        <title>Golden Peaks | All Instructors</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((teacher) => (
          <InstructorView key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;

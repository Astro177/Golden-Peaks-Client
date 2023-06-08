import React, { useEffect, useState } from "react";
import InstructorView from "../../components/InstructorView/InstructorView.Jsx";

const Instructors = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  });
  return (
    <div className="my-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <InstructorView key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;

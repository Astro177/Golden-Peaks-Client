import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import InstructorView from "../../components/InstructorView/InstructorView.Jsx";


const Bestinstructors = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  });
  return (
    <div>
      <SectionTitle
        subHeading="Teachers"
        heading="Meet Our Best Instructors"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.slice(0,6).map((teacher) => (
          <InstructorView key={teacher._id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Bestinstructors;

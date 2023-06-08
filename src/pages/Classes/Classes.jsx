import React, { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard/ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/class`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-container">
        {classes?.map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;

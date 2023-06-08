import React, { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard/ClassCard";

const PopularClass = () => {
    const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/class`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  });
  return (
    <div>
      <p className="text-color text-5xl font-bold text-center mt-12">
        Our most popular classes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes?.slice(0,6).map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass}/>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;

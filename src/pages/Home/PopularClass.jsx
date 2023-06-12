import React, { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard/ClassCard";

import useAllClasses from "../../hooks/useAllClasses";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const PopularClass = () => {
  const [classes] = useAllClasses();
  return (
    <div>
      <SectionTitle subHeading="Classes" heading="Our most popular classes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-container">
        {classes?.slice(0, 6).map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;

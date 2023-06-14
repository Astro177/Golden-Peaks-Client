import React, { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard/ClassCard";
import useAllClasses from "../../hooks/useAllClasses";
import { Helmet } from "react-helmet-async";
import { useNavigation } from "react-router-dom";
import Loader from "../../shared/Loader";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";

const Classes = () => {
  const [classes] = useAllClasses();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <Helmet>
        <title>Golden Peaks | All Classes</title>
      </Helmet>
      <SectionTitle subHeading="We Have" heading="The Best Classes" />
      <Fade cascade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-container">
          {classes?.map((singleClass) => (
            <ClassCard key={singleClass._id} singleClass={singleClass} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Classes;

/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <Slide triggerOnce delay={3}>
      <div className="text-center mt-20 mb-10 md:w-4/12 mx-auto">
        <p className="text-color"> ---{subHeading}--- </p>
        <p className="text-3xl text-black font-semibold text-color py-4">
          {heading}
        </p>
      </div>
    </Slide>
  );
};

export default SectionTitle;

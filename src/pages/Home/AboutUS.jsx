import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const AboutUS = () => {
  return (
    <div>
      <SectionTitle
        subHeading="About us"
        heading="Our Details and Facilities"
      />
      <div className="md:flex gap-10 justify-center items-center">
        <div className="w-1/2">
          <p className="font-bold underline text-4xl mb-8">
            We Are The Best Summer Camp
          </p>
          <p>
            <span className="text-color">Golden Peaks</span> Camp is for Boys
            and Girls. Nestled on the sandy beaches of beautiful Lake Ossipee
            amidst the White Mountains of New Hampshire, Camp offers a summer
            experience rich in fun, friendship, learning and adventure. Campers
            range in age from seven to fifteen.
          </p>
          <button className="btn-outlined">Explore</button>
        </div>
        <div>
          <p className="font-bold underline text-4xl mb-8 mt-8">Facilities</p>
          <div className="flex gap-2">
            <AiFillCheckCircle className="text-teal-400" />
            <p className="mb-4"> BOYS & GIRLS</p>
          </div>
          <div className="flex gap-2">
            <AiFillCheckCircle className="text-teal-400" />
            <p className="mb-4">AGES 7-15</p>
          </div>
          <div className="flex gap-2">
            <AiFillCheckCircle className="text-teal-400" />
            <p className="mb-4">TEAM & INDIVIDUAL SPORTS</p>
          </div>
          <div className="flex gap-2">
            <AiFillCheckCircle className="text-teal-400" />
            <p className="mb-4">PERFORMING & CREATIVE ARTS</p>
          </div>
          <div className="flex gap-2">
            <AiFillCheckCircle className="text-teal-400" />
            <p className="mb-4">WATERFRONT ACTIVITIES</p>
          </div>
          <div className="flex gap-2">
            <AiFillCheckCircle className="text-teal-400" />
            <p className="mb-4">SPECIAL EVENTS & TRIPS</p>
          </div>
          <div className="flex gap-2">
            <AiFillCheckCircle className="text-teal-400" />
            <p>PROFESSIONAL STAFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;

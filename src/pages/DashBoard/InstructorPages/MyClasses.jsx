/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useQuery } from "@tanstack/react-query";

import { FaEdit } from "react-icons/fa";

import { useNavigation } from "react-router-dom";

import Loader from "../../../shared/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: classes = [] } = useQuery({
    queryKey: ["instructor-classes"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/instructor-classes?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <section>
      <div className="lg:mx-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Total Enrolled Students</th>
                <th>Feedback</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {classes.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                          <img
                            src={singleClass?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-base">
                          {singleClass?.className}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold text-base text-center">
                    {singleClass?.availableSeats}
                  </td>
                  <td className="font-bold text-base">${singleClass?.price}</td>
                  <td className="font-bold text-base text-secondary">
                    {singleClass?.status}
                  </td>
                  <td className="font-bold text-base text-center">
                    {singleClass?.numberOfStudents}
                  </td>
                  <td>
                    <label
                      htmlFor={`my_modal_${singleClass._id}`}
                      className="myBtn"
                    >
                      See
                    </label>
                  </td>
                  <td>
                    <button className="btn">
                      <FaEdit className="h-5 w-5" />
                    </button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      id={`my_modal_${singleClass._id}`}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">What Admin Say?</h3>
                        <p className="py-4 font-medium">
                          {singleClass?.feedback}
                        </p>
                        <div className="modal-action">
                          <label
                            htmlFor={`my_modal_${singleClass._id}`}
                            className="btn"
                          >
                            Ok
                          </label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyClasses;

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigation } from "react-router-dom";
import Loader from "../../../shared/Loader";
import useAllClasses from "../../../hooks/useAllClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GrCheckboxSelected } from "react-icons/gr";

const ManageClass = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  const [classes, refetch] = useAllClasses();
  const [axiosSecure] = useAxiosSecure();
  const [message, setMessage] = useState("");

  console.log(classes);
  const handleApproved = async (item) => {
    // console.log(item);
    const updateData = {
      status: "approved",
    };
    // console.log(updateData);

    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/popular-classes/${item?._id}`,
      updateData
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success("Class Approved");
    }
  };

  const handleDeny = async (item) => {
    // console.log(item);
    const updateData = {
      status: "deny",
    };
    // console.log(updateData);

    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/popular-classes/${item?._id}`,
      updateData
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success("Class Denied");
    }
  };

  const handleText = (e) => {
    const text = e.target.value;
    setMessage(text);
  };

  const handleFeedback = async (id) => {
    // console.log(id)
    const item = classes.find((cI) => cI._id === id);
    console.log(item);

    const updateData = {
      status: item?.status,
      feedback: message,
    };
    console.log(updateData);

    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/popular-classes/${id}`,
      updateData
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success("Feedback Sent");
    }
  };
  console.log(classes);
  return (
    <section>
      <Helmet>
        <title>Golden Peaks | Dashboard Manage Classes</title>
      </Helmet>
      <SectionTitle heading="Manage all classes" />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Class Image</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((singleClass) => (
                <tr key={singleClass._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img
                            src={singleClass?.class_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{singleClass?.class_name}</td>
                  <td className="font-semibold">
                    {singleClass?.instructor_name}
                  </td>

                  <td className="font-semibold text-center">
                    {singleClass?.available_seats}
                  </td>
                  <td className="font-semibold text-center">
                    ${singleClass?.price}
                  </td>
                  <td className="font-semibold text-center">
                    {singleClass?.status}
                  </td>
                  <th className="flex flex-col items-start justify-start">
                    <button
                      onClick={() => handleApproved(singleClass)}
                      className={
                        singleClass?.status === "approved" ||
                        singleClass?.status === "deny"
                          ? "btn"
                          : "btn-outlined"
                      }
                      disabled={
                        singleClass?.status === "approved" ||
                        singleClass?.status === "deny"
                          ? true
                          : false
                      }
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleDeny(singleClass)}
                      className={
                        singleClass?.status === "approved" ||
                        singleClass?.status === "deny"
                          ? "btn"
                          : "btn-delete"
                      }
                      disabled={
                        singleClass?.status === "approved" ||
                        singleClass?.status === "deny"
                          ? true
                          : false
                      }
                    >
                      Deny
                    </button>
                    {/* <button className='myBtnThr' >Feedback</button> */}
                    <label
                      htmlFor={`my_modal_${singleClass._id}`}
                      className="btn-feedback"
                    >
                      Feedback
                    </label>
                    <input
                      type="checkbox"
                      id={`my_modal_${singleClass._id}`}
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Write Feedback</h3>
                        <textarea
                          className="inputField mt-4"
                          name="message"
                          cols="10"
                          rows="10"
                          placeholder="Feedback"
                          onChange={handleText}
                        ></textarea>
                        <div className="modal-action">
                          <label
                            htmlFor={`my_modal_${singleClass._id}`}
                            className="myBtnSec"
                            onClick={() => handleFeedback(singleClass?._id)}
                          >
                            Send
                          </label>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageClass;

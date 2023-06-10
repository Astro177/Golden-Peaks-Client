/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import Swal from "sweetalert2";
import useClass from "../../hooks/useClass";

const SelectedClass = ({ classDetails, index, refetch }) => {
  const { class_name, instructor_name, price } = classDetails;

  const handleDelete = (classDetails) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d9488",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClass/${classDetails?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <tr className="text-xl font-bold">
        <td>{index + 1}</td>
        <td>{class_name}</td>
        <td>{instructor_name}</td>
        <td>$ {price}</td>
        <th>
          <button
            onClick={() => handleDelete(classDetails)}
            className="flex items-center btn-delete"
          >
            <RiDeleteBinFill />
            Delete
          </button>
        </th>
        <th>
          <button className="flex items-center btn-outlined">
            <MdAttachMoney />
            Pay
          </button>
        </th>
      </tr>
    </>
  );
};

export default SelectedClass;

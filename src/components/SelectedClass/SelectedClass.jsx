/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import {RiDeleteBinFill} from "react-icons/ri"

const SelectedClass = ({ classDetails, index }) => {
  const { class_name, instructor_name, price } = classDetails;

  return (
    <>
      <tr className="text-xl font-bold">
        <td>{index + 1}</td>
        <td>{class_name}</td>
        <td>{instructor_name}</td>
        <td>$ {price}</td>
        <th>
          <button className="flex items-center btn-outlined"><RiDeleteBinFill/>Delete</button>
        </th>
      </tr>
    </>
  );
};

export default SelectedClass;

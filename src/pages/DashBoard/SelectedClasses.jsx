import React from "react";
import useClass from "../../hooks/useClass";
import SelectedClass from "../../components/SelectedClass/SelectedClass";

const SelectedClasses = () => {
  const [addedClass] = useClass();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addedClass?.map((classDetails, index) => (
              <SelectedClass
                key={classDetails?._id}
                classDetails={classDetails}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;

/* eslint-disable react-hooks/rules-of-hooks */

import { useQuery } from "@tanstack/react-query";

import { useNavigation } from "react-router-dom";
import Loader from "../../../shared/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { GrUserAdmin } from "react-icons/gr";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageUsers = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return res.data;
    },
  });

  const handleAdmin = async (user) => {
    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/users/admin/${user?._id}`
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success(`${user?.name} is an Admin Now!`);
    }
  };
  const handleInstructor = async (user) => {
    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/users/instructor/${user?._id}`
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      toast.success(`${user?.name} is an Instructor Now!`);
    }
  };

  return (
    <section>
      <Helmet>
        <title>Golden Peaks | Dashboard Manage Classes</title>
      </Helmet>
      <SectionTitle heading="Manage all users" />

      <div className="lg:mx-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user?.photo} alt="User" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{user?.email}</td>
                  <td className="font-bold px-2 py-1 text-green-500">
                    {user?.role == "admin"
                      ? "Admin"
                      : user?.role == "instructor"
                      ? "Instructor"
                      : "Student"}
                  </td>
                  <th>
                    <button
                      className={
                        user?.role === "admin" || user?.role === "instructor"
                          ? "btn"
                          : "btn-outlined"
                      }
                      onClick={() => handleAdmin(user)}
                      disabled={
                        user?.role === "admin" || user?.role === "instructor"
                          ? true
                          : false
                      }
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => handleInstructor(user)}
                      className={
                        user?.role === "admin" || user?.role === "instructor"
                          ? "btn mt-2"
                          : "btn-feedback"
                      }
                      disabled={
                        user?.role === "admin" || user?.role === "instructor"
                          ? true
                          : false
                      }
                    >
                      Make Instructor
                    </button>
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

export default ManageUsers;

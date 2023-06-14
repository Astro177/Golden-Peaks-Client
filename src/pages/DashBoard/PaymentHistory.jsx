/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import moment from "moment";

import { useNavigation } from "react-router-dom";
import Loader from "../../shared/Loader";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader/>;
  }
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/payment?email=${user?.email}`).then((res) => {
      setHistories(res.data);
    });
  }, []);

  return (
    <section>
      <Helmet>
        <title>Golden Peaks | Dashboard-Payment History</title>
      </Helmet>
      <SectionTitle heading="All your payments"/>
      
      <div className="lg:mx-10 my-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Transaction Id</th>
                <th>Price</th>
                <th>Email</th>
                <th>date</th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((history, index) => (
                <tr key={history._id}>
                  <th className="font-semibold">{index + 1}</th>
                  <td className="font-semibold">{history.transactionId}</td>
                  <td className="font-semibold">$ {history.price}</td>
                  <td className="font-semibold">{history.email}</td>
                  <td className="font-semibold">
                    {moment(history.date).format("MMM Do YY")}
                  </td>
                  <td className="font-semibold text-green-500">
                    {history.orderStatus}
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

export default PaymentHistory;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: addedClass = [], refetch } = useQuery({
    queryKey: ["class", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/selected-classes-cart?email=${user?.email}`);
      return res.data;
    },
  });
  return [addedClass, refetch];
};

export default useClass;

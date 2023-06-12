import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: addedClass = [], refetch } = useQuery({
    queryKey: ["class", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClass?email=${user?.email}`);
      return res.data;
    },
  });
  return [addedClass, refetch];
};

export default useClass;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClass = () => {
  const { user } = useAuth();
  const { data: addedClass = [], refetch } = useQuery({
    queryKey: ["class", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/selectedClass?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [addedClass, refetch];
};

export default useClass;

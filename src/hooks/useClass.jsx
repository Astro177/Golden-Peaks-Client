import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const { user } = useContext(AuthContext);
  const {
    data: addedClass = [],
    refetch,
  } = useQuery({
    queryKey: ["class", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/selectedClass?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [addedClass, refetch];
};

export default useClass;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";


const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';



const useEnroll = () => {

    const {user , loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const{data: enrollClasses = [] , refetch}=useQuery({
        queryKey:['enroll' , user?.email],
        enabled: !loading && !!user?.email,
        queryFn:async()=>{
            const res = await axiosSecure.get(`/enrollDetails?email=${user?.email}`);
            
            return res.data;
        }
    })
    return[enrollClasses,refetch]
};

export default useEnroll;
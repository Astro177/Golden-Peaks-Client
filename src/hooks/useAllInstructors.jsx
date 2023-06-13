import { useQuery } from '@tanstack/react-query';


const useAllInstructors = () => {
    const{data: instructors=[] , isLoading: loading , refetch}=useQuery({
        queryKey:["instructors"],
        queryFn: async()=>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/popular-instructors`);
            return res.json();
        }
    })
    return [instructors , loading , refetch]
};

export default useAllInstructors;
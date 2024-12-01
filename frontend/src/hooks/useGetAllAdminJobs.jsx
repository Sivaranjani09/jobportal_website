import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllAdminJobs } from '../redux/jobSlice';
import { JOB_API_END_POINT } from '../utils/constant';

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();

  useEffect(()=>{
    const fetchAllJAdminJobs= async()=>{
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials:true});
            if(res.data.success){
                dispatch(setAllAdminJobs(res.data.jobs));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchAllJAdminJobs();
  },[])
}

export default  useGetAllAdminJobs
import React,{useEffect,useState} from 'react';
import axios from 'axios';
const useReview = () => {

   
    const [reviewData,setReviewData] = useState([]);

    const [reviewloading, setLoading] = useState(true);
   

    useEffect(() => {

    
        axios.get('reviews').then(res=>{
            console.log(res.data);
            setReviewData(res.data);
            setLoading(false);
        })

},[])

return [reviewData,reviewloading];

}   

export default useReview;
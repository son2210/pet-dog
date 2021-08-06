import React, {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CategoryApi from '../../../api/categoryapi';
const CategoryDetails = () => {
    const {id} = useParams();
    const {cate , setList} = useState({});
    useEffect(()=>{
        
    },[])
    return (
        <div>
            đây là chi tiết 
        </div>
    )
}

export default CategoryDetails

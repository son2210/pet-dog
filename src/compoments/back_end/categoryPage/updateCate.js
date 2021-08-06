import React, { useState, useEffect } from 'react'
import { useParams , useHistory } from 'react-router-dom'
import CategoryApi from '../../../api/categoryapi';
import { yupResolver } from '@hookform/resolvers/yup';
import {schemaCate} from './checkCate'
import {useForm} from "react-hook-form"
import trademarksApi from '../../../api/trademark';
const UpdateCate = () => {
    const history =  useHistory()
    const { id } = useParams();
    const [cate, setList] = useState({});
    const {register, handleSubmit , formState:{errors}} = useForm({
        resolver:  yupResolver(schemaCate)
    })
    useEffect(() => {
        const abc = async () => {
            const { data: list } = await CategoryApi.get(id)
            setList(list)
        }
        abc();
    }, []);
    const [trademark, settrademark] = useState([])
    useEffect(() =>{
        const listTra = async () => {
            const {data:tra} = await trademarksApi.getAll();
            settrademark(tra)
        }
        listTra();
    },[])
    const updateCate = async (data) =>{
            const res = await CategoryApi.update(id,data)
            if(res){
              setTimeout(()=>{
                history.push('/admin/category/list')
              },2000)
            }
    }
    return (
        <div className="tw-flex tw-h-full tw-bg-gray-200  tw-justify-center">
            <div className="tw-grid tw-rounded-lg  tw-w-11/12 md:tw-w-10/12 lg:w-2/2">
                <div className="tw-flex tw-justify-center">
                    <div className="tw-flex tw-pt-6">
                        <h1 className="tw-text-gray-600 tw-font-bold md:tw-text-2xl tw-text-xl">Cập nhật   </h1>
                    </div>
                </div>
                <form onSubmit={handleSubmit(updateCate)}>
                    <div className="tw-grid tw-grid-cols-1 tw-mt-3 tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">
                            LOẠI HÀNG  </label>
                        <input {...register("name")} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-green-600" type="text" defaultValue= {cate.name} />
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center  md:tw-gap-8 tw-gap-4 tw-pt-5 tw-pb-5">
                        <button className="tw-w-auto tw-bg-green-500 hover:tw-bg-purple-700 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCate

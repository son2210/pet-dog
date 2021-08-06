import React ,{ useState , useEffect} from 'react'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import {schemaCate} from './checkCate';
import {useHistory } from 'react-router-dom'
import CategoryApi from '../../../api/categoryapi';
const AddCategory = () => {
    document.title= "Thêm danh mục "
    let history = useHistory();
    const {register, handleSubmit ,formState:{errors} } = useForm({
        resolver :  yupResolver(schemaCate)
    })
    const addCate = async (data)=>{
        const newCate = new FormData();
        newCate.append('name',data.name)
        newCate.append('trademarkId',data.trademarkId)
        const {data:pro} = await CategoryApi.add(data)

        if(pro){
            setTimeout(()=>{
                history.push('/admin/category/list')
            },1000)   
        }       
           
    }
    return (
        <div className="tw-flex tw-h-screen tw-bg-gray-200 tw-justify-center tw-pt-12">
            <div className="tw-rounded-lg  tw-w-11/12 md:tw-w-10/12 lg:w-2/2">
                <div className="tw-flex tw-justify-center">
                    <div className="tw-flex">
                        <h1 className="tw-text-gray-600 tw-font-bold md:tw-text-2xl tw-text-xl">Thêm Thương Hiệu </h1>
                    </div>
                </div>
                <form  onSubmit={handleSubmit(addCate)}>
                    <div className="tw-grid tw-grid-cols-1  tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">
                            Tên Sản Phẩm </label>
                        <input {...register('name')} className={`py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-red-500`} type="text" placeholder="Name producst" />
                        {errors.name && <span className="text-danger tw-mt-1">Không được để trống</span>}
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center  md:tw-gap-8 tw-gap-4 tw-pt-5 tw-pb-5">
                        <button className="tw-w-auto tw-bg-green-500 hover:tw-bg-purple-700 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2">Thêm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCategory

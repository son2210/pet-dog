import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver}  from '@hookform/resolvers/yup'
import schemaTrademark from './checkTrademark'
import trademarksApi from '../../../api/trademark'
import  {useHistory} from 'react-router-dom'
const Addtrademark = () => {
    const history = useHistory();
    const {register , handleSubmit, formState:{errors}} = useForm({
        resolver  :  yupResolver(schemaTrademark)
    })
    const newTrademarks = async (data)=>{
        let newtrade = new FormData();
        newtrade.append('name',data.name)
        newtrade.append('photo',data.photo[0])
        const {data:newTra} = await trademarksApi.add(newtrade)
        if(newTra.message){
           history.goBack()
        }
        console.log("thất bại ")
    }
    return (
        <div className="tw-flex tw-h-screen tw-bg-gray-200 tw-justify-center tw-pt-12">
            <div className="tw-rounded-lg  tw-w-11/12 md:tw-w-10/12 lg:w-2/2">
                <div className="tw-flex tw-justify-center">
                    <div className="tw-flex">
                        <h1 className="tw-text-black tw-font-bold md:tw-text-2xl tw-text-xl">Thêm Thương Hiệu </h1>
                    </div>
                </div>
                <form  onSubmit={handleSubmit(newTrademarks)}>
                    <div className="tw-grid tw-grid-cols-1  tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-black  tw-font-semibold">
                            Tên Thương hiệu </label>
                        <input {...register('name')} className={`${errors.name? "tw-border-red-500" :""} tw-py-2 tw-px-3 tw-rounded-lg border-3 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1`} type="text" placeholder="Name trademarks" />
                        {errors.name && <span className="text-danger tw-mt-1">Không được để trống</span>}
                    </div>
                    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-black  tw-font-semibold tw-mb-1">Upload</label>
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-bg-white">
                            <label className="tw-flex tw-flex-col tw-border-4  tw-w-full tw-h-32 hover:tw-bg-gray-300 tw-rounded-lg group">
                                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-7">
                                    <p>  <input type="file" {...register('photo')} className="tw-p-5" /></p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center  md:tw-gap-8 tw-gap-4 tw-pt-5 tw-pb-5">
                        <button className="tw-w-auto tw-bg-green-500 hover:tw-bg-purple-700 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2">Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addtrademark
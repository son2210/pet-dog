import React , {useState, useEffect}from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver}  from '@hookform/resolvers/yup'
import schemaTrademark from './checkTrademark'
import trademarksApi from '../../../api/trademark'
import {useParams, useHistory} from  "react-router-dom"
const UpdateTrademark = () => {
    const history = useHistory();
        const {id} = useParams();
    const [trad, setTra] = useState({});
    useEffect(()=>{
        const trademark =  async () => {
          try {
            const {data:trad} = await trademarksApi.get(id);
            setTra(trad);
          } catch (error) {
                console.log(error)
          }
        }
        trademark();
    },[])
    const {register , handleSubmit, formState:{errors}} = useForm({
        resolver  :  yupResolver(schemaTrademark)
    })
    const newTrademarks = async (data)=>{
        const image = data.photo[0];
        let newtrade = new FormData();   
        newtrade.append('name',data.name)
        if(image){
            newtrade.append('photo',image)
        }
        const {data:newTra} = await trademarksApi.update(id,newtrade)
        if(newTra){
           history.goBack();
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
                <form  onSubmit={handleSubmit(newTrademarks)}>
                    <div className="tw-grid tw-grid-cols-1  tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">
                            Tên Sản Phẩm </label>
                        <input {...register('name')}
                         className={`py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-red-500`}
                        ype="text" placeholder="Name producst"  defaultValue={trad.name}/>
                        {errors.name && <span className="text-danger tw-mt-1">Không được để trống</span>}
                    </div>
                    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold tw-mb-1">Upload</label>
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

export default UpdateTrademark
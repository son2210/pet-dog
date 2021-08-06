import React from 'react'
import { schemaPro } from './checkPro'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import SelectAllCate from '../categoryPage/selectAllCate'
import SelectAllTra from '../trademarkpage/selecTredamark'
import ProductApi from '../../../api/productapi'
import { useHistory } from 'react-router-dom'
// / conver texrt
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const AddproductPage = () => {
    const history = useHistory();
    document.title = "Thêm Sản Phẩm "
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaPro)
    })
    const addProduct = async (data) => {
        const newPro = new FormData();
        newPro.append('name', data.name);
        newPro.append('photo', data.image[0]);
        newPro.append('description', data.description);
        newPro.append('price', data.price);
        newPro.append('quantity', data.quantity);
        newPro.append('categoryId', data.categoryId);
        newPro.append('trademarkId', data.trademarkId)
        const { data: response } = await ProductApi.add(newPro)
        console.log(data);
        if (response.message) {
            setTimeout(() => {
                history.push('/admin/products/list')
            }, 500)
        }
        console.log(response)
    }
   
    return (
        <div className="tw-flex tw-h-screen tw-bg-gray-200 tw-justify-center">
            <div className="tw-grid tw-rounded-lg  tw-w-11/12 md:tw-w-10/12 lg:w-2/2">
                <div className="tw-flex tw-justify-center">
                    <div className="tw-flex tw-mt-5">
                        <h1 className="tw-text-gray-600 tw-font-bold md:tw-text-2xl tw-text-xl">Thêm Sản Phẩm </h1>
                    </div>
                </div>
                {/* enctype="multipart/form-data"*/}
                <form onSubmit={handleSubmit(addProduct)}  >
                    <div className="tw-grid tw-grid-cols-1  tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">
                            Tên Sản Phẩm </label>
                        <input {...register('name')} className={`py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-red-500`} type="text" placeholder="Name producst" />
                        {/* {errors.name && <span className="text-danger tw-mt-1">Không được để trống</span>} */}
                    </div>
                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5 md:tw-gap-8 tw-mt-5 tw-mx-7">
                        <div className="tw-grid tw-grid-cols-1">
                            <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">Giá</label>
                            <input {...register('price')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-green-600" type="text" placeholder="Price" />
                            {/* {errors.price && <span className="text-danger">Yêu cầu nhập vào</span>} */}
                        </div>
                        <div className="tw-grid tw-grid-cols-1">
                            <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold"> Số lượng
                  </label>
                            <input {...register('quantity')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-green-600" type="text" placeholder="Quantity" />
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">Hàng Hóa</label>
                        <select {...register('categoryId')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-purple-600 focus:tw-border-green-600">
                            <option tw-hidden value="">Danh mục  </option>
                            <SelectAllCate />
                        </select>
                    </div>
                    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">Thương hiệu</label>
                        <select {...register('trademarkId')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-purple-600 focus:tw-border-green-600">
                            <option tw-hidden value=""> Thương hiệu  </option>
                            <SelectAllTra />
                        </select>
                    </div>

                    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-mx-7">
                        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-7">
                            <p>  <input type="file" {...register('image')} className="tw-p-5" /></p>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">
                            Mô Tả </label>
                        <textarea {...register('description')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-purple-600 focus:tw-border-transparent" type="text" placeholder="Another Input" />
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center  md:tw-gap-8 tw-gap-4 tw-pt-5 tw-pb-5">
                        <button className="tw-w-auto tw-bg-green-500 hover:tw-bg-purple-700 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2">Thêm Sản Phẩm </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddproductPage

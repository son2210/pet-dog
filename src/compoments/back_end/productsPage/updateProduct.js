import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import ProductApi from '../../../api/productapi';
import *  as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import SelectAllCate from '../categoryPage/selectAllCate';
import SelectAllTra from '../trademarkpage/selecTredamark';
import { updatepro } from './checkPro'
const UpdateProduct = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(updatepro)
    })
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const detail = async () => {
            const { data: prod } = await ProductApi.get(id)
            setProduct(prod)
        }
        detail();
    }, [])

    const updatePro = async (data) => {
        console.log(data)
        const newForm = new FormData()
        if (data.quantity) {
            newForm.append('quantity', data.quantity)
        }

        if (data.price) {
            newForm.append('price', data.price)
        }
        if (data.name) {
            newForm.append('name', data.name)
        }
        newForm.append('description', data.description)
        if (data.categoryId) {
            newForm.append('categoryId', data.categoryId)
        }
        if (data.trademarkId) {
            newForm.append('trademarkId', data.trademarkId)
        }
        if (data.image) {
            newForm.append('photo',data.image[0])
        } 
        try {
            const { data: newpro } = await ProductApi.update(id,newForm)
            if (newpro) {

                history.push("/admin/products/list")
            }
        } catch (error) {
            console.log(error.response.data)
        }

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
                <form onSubmit={handleSubmit(updatePro)}  >
                    <div className="tw-grid tw-grid-cols-1  tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">
                            Tên Sản Phẩm </label>
                        <input {...register('name')} className={`py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-red-500`}
                            type="text" placeholder="Name producst" defaultValue={product.name} />
                        {/* {errors.name && <span className="text-danger tw-mt-1">Không được để trống</span>} */}
                    </div>
                    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5 md:tw-gap-8 tw-mt-5 tw-mx-7">
                        <div className="tw-grid tw-grid-cols-1">
                            <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">Giá</label>
                            <input {...register('price')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-green-600"
                                type="text" placeholder="Price" defaultValue={product.price} />
                            {/* {errors.price && <span className="text-danger">Yêu cầu nhập vào</span>} */}
                        </div>
                        <div className="tw-grid tw-grid-cols-1">
                            <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold"> Số lượng
                      </label>
                            <input {...register('quantity')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-border-green-600"
                                type="text" placeholder="Quantity" defaultValue={product.quantity} />
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
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold">
                            Mô Tả </label>
                        <textarea {...register('description')} className="tw-py-2 tw-px-3 tw-rounded-lg tw-border-2 tw-border-purple-300 tw-mt-1 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-purple-600 focus:tw-border-transparent"
                            type="text" placeholder="Another Input" defaultValue={product.description} />
                    </div>
                    <div className="tw-grid tw-grid-cols-1 tw-mt-5 tw-mx-7">
                        <label className="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 text-light tw-font-semibold tw-mb-1">Upload</label>
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-bg-white">
                            <label className="tw-flex tw-flex-col tw-border-4  tw-w-full tw-h-32 hover:tw-bg-gray-300 tw-rounded-lg group">
                                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-7">
                                    <p>  <input type="file" {...register('image')} className="tw-p-5" /></p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center  md:tw-gap-8 tw-gap-4 tw-pt-5 tw-pb-5">
                        <button className="tw-w-auto tw-bg-green-500 hover:tw-bg-purple-700 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2">Thêm Sản Phẩm </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct

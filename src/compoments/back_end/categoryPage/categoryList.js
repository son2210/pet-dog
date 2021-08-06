import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CategoryApi from '../../../api/categoryapi'
import trademarksApi from '../../../api/trademark'
import CategoryItems from './categoryItems'
const CategoryList = () => {
    document.title = 'Danh sách cate'
    const [list, setList] = useState([])
    useEffect(() => {
        const listCate = async () => {
            const { data: cate } = await CategoryApi.getAll();
            setList(cate)
        }
        listCate()
    }, [])
    // *****************************///
    const remove = async (id) => {
        try {
            const remo = await CategoryApi.remove(id)
            if(remo){
                const {data:cate} = await CategoryApi.getAll()
                setTimeout(() => {
                    setList(cate)
                }, 1000);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="tw-pt-3">
        <h3 className="tw-text-center tw-text-2xl tw-font-bold"> DANH SÁCH HÀNG HÓA  </h3>
            <div className="tw-text-right tw--mt-8 tw-mr-2 tw-text-sm" ><Link className="tw-p-1 tw-bg-blue-600 tw-text-white tw-rounded"  to="/admin/category/add"> Thêm </Link> </div>
        <table className="tw-w-full tw-text-center  text-1xl tw-mt-8">
            <tbody className="tw-w-full tw-items-center">
                <tr className="tw-bg-gray-200 tw-uppercase tw-text-sm tw-leading-normal tw-ml-2">
                    <th className="tw-w-6 tw-pl-3"> STT</th>
                    <th className="tw-py-3 tw-px-6 tw-text-center">NAME</th>
                    <th className="tw-py-3 tw-px-6 tw-text-center">ACTIONS</th>
                </tr>
                <CategoryItems cate={list} onRemove={remove} />
            </tbody>
        </table>
        
        </main> 
        
    )
}

export default CategoryList

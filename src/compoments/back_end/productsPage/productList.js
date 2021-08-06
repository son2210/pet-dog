import React, { useState, useEffect } from 'react'
import ProductApi from '../../../api/productapi'
import ProductItem from './productItems'
import { Link } from 'react-router-dom'
import SelectAllCate from '../categoryPage/selectAllCate'
import SelectAllTra from '../trademarkpage/selecTredamark'
import CategoryApi from '../../../api/categoryapi'

const ProductList = () => {
    document.title = "Danh Sách Sản Phẩm "
    const [list, setList] = useState([])
    const [cate, setCate] = useState([])
    useEffect(() => {
        const listpr = async () => {
            const { data: listPro } = await ProductApi.getAll();
            setList(listPro)
        }
        listpr();
    }, [])
    useEffect(() => {
        const getCate = async () =>{
            const {data:CateDeatil} = await CategoryApi.getAll();
            setCate(CateDeatil)
        }
        getCate()
    },[])
    const remove = async (id) => {
      const { data:dele} = await ProductApi.remove(id)
        if(dele.message){
            const { data: listPro } = await ProductApi.getAll();
            setList(listPro)
        }
    }
    const allProduct = async ()=>{
        const { data: listPro } = await ProductApi.getAll();
        setList(listPro)
    }
    // lọc cate 
   const onChangeCate =  async (id)=>{
        const {data:productCate} = await ProductApi.getCate(id)
        setList(productCate)
   }
//    lọc tho thương hiệu 
const onChangeTrademark = async (id)=>{
    const {data:trademark} = await ProductApi.getTrademark(id)
    setList(trademark)
}
    return (
        <main className="pt-3">
            <h3 className="tw-text-center tw-text-2xl tw-font-bold"> DANH SÁCH SẢN PHẨM</h3>
                <select className=""onChange={(e)=>onChangeCate(e.target.value)}>
                        <option value="" hidden> Danh mục </option>
                        <SelectAllCate/>
                 </select>
                 <select onChange={(e)=>onChangeTrademark(e.target.value)} >
                        <option value="" hidden> Thương Hiệu  </option>
                        <SelectAllTra/>
                 </select>
                 <button class="btn btn-primary" onClick={allProduct}>Tất cả sản phẩm  </button>
                <div className="tw-text-right tw--mt-8 tw-mr-2 tw-text-sm" ><Link className="tw-p-1 tw-bg-blue-600 tw-text-white tw-rounded"  to="/admin/products/add"> Thêm Sản Phẩm </Link> </div>
            <table className="tw-w-full tw-text-center text-1xl tw-mt-8">
            <h3 className="tw-text-xl tw-my-2">  </h3>
                <tbody>
                    <tr className="tw-bg-gray-200 tw-uppercase tw-text-sm tw-leading-normal tw-ml-2">
                        <th className="tw-w-6"> STT</th>
                        <th className="tw-py-3 tw-px-6 tw-text-center">NAME</th>
                        <th className="tw-justify-center tw-text-center">ẢNH </th>
                        <th className="tw-py-3 tw-px-6 tw-text-center">GIÁ</th>
                        <th className="tw-py-3 tw-px-6 tw-text-center">SÔ LƯỢNG</th>
                        <th className="tw-py-3 tw-px-4 tw-text-center">DANH MỤC </th>
                        <th className="tw-py-3 tw-px-6 tw-text-center">ACTIONS</th>
                    </tr>
                  
                    <ProductItem products={list} ondelete={remove}   cate ={cate}/>
                </tbody>
            </table>

        </main>
    )
}

export default ProductList

import React, { useState, useEffect } from 'react'
// import CategoryApi from '../../../api/categoryapi'
import ProductApi from '../../../api/productapi'
import SaibarWeb from '../sarbarweb'
import { Link } from "react-router-dom"
import addGiohang from '../../localStorage/cart'
const ListProducts = () => {
    const [product, setProducts] = useState([])

    useEffect(() => {
        const list = async () => {
            const { data: prod } = await ProductApi.getAll(); // tất cả sản phẩm 
            setProducts(prod)
        }
        list();
    }, [])
    const ChangeTra = async (e) => {
        if (e.target.checked) {
            if(e.target.value){
                  const { data: trademark } = await ProductApi.getTrademark(e.target.value)
                 setProducts(trademark)
            }else{
                const { data: prod } = await ProductApi.getAll(); // tất cả sản phẩm 
            setProducts(prod)
            }
        }else{
            const { data: prod } = await ProductApi.getAll(); // tất cả sản phẩm 
            setProducts(prod)
        }
    }
    const [thaydoi, setThaydoi] = useState(true)
    const ChangeCate = async (id) => {
        setThaydoi(!thaydoi)
        // if(thaydoi == true){
        //     const {data:cate} = await ProductApi.getCate(id)
        //     setProducts(cate)
        // } 
        const { data: cate } = await ProductApi.getCate(id)
        setProducts(cate)
    }
  
    const changePrice = async (value) => {
        console.log("gia owr đâ", value);
        const { data: pro } = await ProductApi.getAll(value)
        setProducts(pro)
    }
const muaHang = (idProduct)=>{
    addGiohang.add(idProduct)
}
    return (
        <div className="tw-flex container tw-pt-2">
            <SaibarWeb onChangeTra={ChangeTra} onChangeCate={ChangeCate} changePrice={changePrice} />
            <div className="list-product tw-pl-3 tw-flex-wrap tw-h-auto  tw-pb-1 tw-w-5/6  tw-flex tw-text-center">
                {product ? product.map((item, index) =>
                    <div key={index} className="tw-w-1/4 tw-shadow-md tw-mb-4 tw-h-[19em] tw-rounded-xl ">
                        <div className="tw-flext tw-items-center tw-justify-center tw-pl-10">
                            <Link to={`/product/${item._id}`}><img className="tw-w-[12em] tw-h-[13em] tw-text-center  tw-bg-cover tw-bg-center tw-transform tw-scale-75 hover:tw-scale-90 tw-duration-700 tw-mb-1"
                                src={`http://localhost:2210/api/products/readPhoto/${item._id}`} alt={item.name} /></Link>
                        </div>
                        <Link to={`/product/${item._id}`} className="tw-pr-3 tw-capitalize hover:tw-text-yellow-500 text-decoration-none tw-text-black tw-text-base">  {item.name}  </Link>
                        <div className="tw-mt-2 tw-pt-1">
                            <i> <Link className="text-decoration-none tw-text-black hover:tw-text-black" href>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Đ</Link> </i>
                            <button onClick={()=>muaHang(item._id)} className="tw-uppercase tw-ml-2 tw-bg-red-500 tw-py-0.5 tw-px-2 tw-text-base  tw-rounded-xl tw-text-white"> 
                             mua hàng </button>
                        </div>
                    </div>
                ) : ""} 
            </div>
        </div>
    )
}

export default ListProducts

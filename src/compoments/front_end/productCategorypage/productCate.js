import React, { useState, useEffect } from 'react'
import NavCate from './navCate'
import ProductApi from '../../../api/productapi';
import { useParams, Link } from 'react-router-dom'
const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        async function getProducts(){
            try {
                const {data} = await ProductApi.getAll()
                const result  = data.filter(product => product.categoryId == id);                
                setProduct(result)
            } catch (error) {
            }
        }
        getProducts()
    }, [id])
    return (
        <div className="container">
            <div className="tw-w-full tw-h-80  tw-flex tw-mt-1">
                <NavCate />
                <div className="tw-w-[78%] tw-w-full   tw-flex tw-text-center">
                    {product ? product.map((item, index) =>
                        <div key={index} className="tw-w-1/4 tw-shadow-md tw-mb-4 tw-h-[19em] tw-rounded-xl ">
                            <div className="tw-flext tw-items-center tw-justify-center tw-pl-10">
                                <Link to={`/product/${item._id}`}><img className="tw-w-[12em] tw-h-[13em] tw-text-center  tw-bg-cover tw-bg-center tw-transform tw-scale-75 hover:tw-scale-90 tw-duration-700 tw-mb-1"
                                    src={`http://localhost:2210/api/products/readPhoto/${item._id}`} alt /></Link>
                            </div>
                            <Link to={`/product/${item._id}`} className="tw-pr-3 tw-capitalize hover:tw-text-yellow-500 text-decoration-none tw-text-black tw-text-base">  {item.name}  </Link>
                            <div className="tw-mt-2 tw-pt-1">
                                <i> <Link className="text-decoration-none tw-text-black hover:tw-text-black" href>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Đ</Link> </i>
                                <button className="tw-uppercase tw-ml-2 tw-bg-red-500 tw-py-0.5 tw-px-2 tw-text-base  tw-rounded-xl tw-text-white">  mua hàng </button>
                            </div>
                        </div>
                    ) : ""}
                </div>
            </div>

        </div>
    )
}

export default ProductPage

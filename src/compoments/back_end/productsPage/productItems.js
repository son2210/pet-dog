import React from 'react'
import {Link}  from "react-router-dom"
const ProductItem = ({products,cate,ondelete}) => {
    const remove = (id)=>{
        ondelete(id)
    }

    // {cate.find(element => element._id == item.categoryId)}
    return (
        <>
            {products.length >0 ? products.map((item, index) =>
                <tr key={index} className="tw-border-b-4 tw-border-t-2 tw-py-10">
                    <td className="tw-text-center">{index+1}</td>
                    <td className="tw-py-3 tw-px-6 tw-text-center">{item.name}</td>
                    <td className="tw-pl-16">
                        <div className="tw-mr-2">
                            <img className="tw-w-14 tw-my-1 tw-h-14 tw-rounded-full"
                                src={`http://localhost:2210/api/products/readPhoto/${item._id}`} />
                        </div>
                    </td>
                    <td className="tw-py-3 tw-px-6 tw-text-center">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}</td>
                    <td className="tw-py-3 tw-px-6 tw-text-center">{item.quantity}</td>
                    <td className="tw-py-3 tw-px-6 tw-text-center tw-text-base"> { cate ?  cate.map((element,index)=>{
                        if(element._id=== item.categoryId){
                            return <span className="tw-uppercase tw-font-semibold">  {element.name} </span>
                        }
                    }) : ""} </td>
                    <td className="tw-py-3 tw-px-6 tw-text-center">
                        <div className="tw-flex item-center tw-justify-center">

                            <button className="tw-w-8 tw-mr-2 tw-transform  hover:tw-scale-110 tw-text-green-600">
                                <Link  to={`/admin/products/${item._id}/edit`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </Link>
                            </button>
                            <button onClick={()=>remove(item._id)}
                                className="tw-w-8 tw-mr-2 tw-transform  hover:tw-scale-110 tw-text-red-600 tw-outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            )  :""}
        </>
    )
}

export default ProductItem

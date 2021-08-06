import React, { useState, useEffect } from 'react'
// import Carousel  from "react-elastic-carousel"
import trademarksApi from '../../../api/trademark'
import  {Link}  from "react-router-dom"

const SlideTrademark = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        const listTra = async () => {
            const { data: trademarks } = await trademarksApi.getAll()
            setList(trademarks)
        }
        listTra();
    }, [])
    return (
        <>
            <div className="tw--pl-0 tw-pb-5 tw-bg-white">
                <div className="bestselling__heading-wrap   ">
                    <div className="bestselling__heading ">Thương Hiệu </div>
                </div>
                <div className="tw-flex tw-items-center tw-mt-5 ">

                    {list.map((item, index) =>
                        <div key={index} className=" tw-h-20  ">
                           <Link>  <img src={`http://localhost:2210/api/trademarks/readPhoto/${item._id}`}
                                className="img-fluid tw-w-40 tw-h-20 tw-leading-4 tw-mr-3 tw-p-1" /></Link>
                        </div>
                    )}


                </div>


            </div>
        </>
    )
}

export default SlideTrademark

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CategoryApi from '../../../api/categoryapi'
import slideApi from '../../../api/slideShow'
const SlideHeader = () => {
    const [list, setList] = useState([])
    const [listCate, setListCate] = useState([])
    useEffect(() => {
        const listSlide = async () => {
            const { data: slide } = await slideApi.getAll()
            setList(slide)
        }
        listSlide();
    }, [])
    useEffect(() => {
        const lisC = async () => {
            const { data: cate } = await CategoryApi.getAll()
            setListCate(cate)
        }
        lisC();
    }, [])
    return (
        <div className="tw-w-full tw-h-80  tw-flex tw-mt-1">
            <nav className="tw-w-[20%] tw-pr-5">

                <ul>
                    {listCate.map((item, index) =>
                        <>
                            <li key={index} className="tw-px-2 tw-text-xl tw-py-[1px] hover:tw-bg-red-600">
                                <Link to={`/category/${item._id}`} className="tw-text-decoration-none  tw-uppercase tw-text-gray-600 hover:tw-text-white tw-block"> {item.name} </Link>
                            </li>
                        </>
                    )}

                </ul>

            </nav>
            <div className="tw-w-[56%] tw-relative tw-mr-2 banner">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://file.hstatic.net/1000217316/file/phu-kien-chay-bo-2_527804341ea945138d54bfeea5914244_grande.jpg"
                             className="d-block w-100 tw-w-[50em] tw-h-[20em]" alt="..." />
                        </div>
                        {list.map((item, index)=>
                         <div key={index} className={`carousel-item  `}>
                         <img src={`http://localhost:2210/api/slides/readPhoto/${item._id}`}
                             className="tw-w-[50em] tw-h-[20em] d-block w-100"
                         />
                           </div>
                        )}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
            {/*  bên phải  */}
            <div className="tw-w-[22%]">
                <div className="tw-h-[20em]">
                    <img src="https://file.hstatic.net/1000217316/file/ultraspire_ultra_flask_blue_0771746_print_2e80356f55484bc58db208703217359c_grande.jpg"
                        className="tw-h-[20em]"
                    />
                </div>
            </div>
        </div>
    )
}

export default SlideHeader

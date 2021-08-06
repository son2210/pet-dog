import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductApi from '../../../api/productapi'
import trademarksApi from '../../../api/trademark'
import SlideTrademark from './slideTrademark'
import SlideHeader from './slide_top'
const HomePage = () => {
    window.scroll(0, 0)
    document.title = "Fpoly shop"
    const [product, setPproduct] = useState([])
    useEffect(() => {
        const listPro = async () => {
            const { data: pro } = await ProductApi.getAll()
            setPproduct(pro)
        }
        listPro()
    }, [])
    const [trademark, setTrademark] = useState([])
    useEffect(() => {
        const listTra = async () => {
            const { data: trademarks } = await trademarksApi.getAll()
            setTrademark(trademarks)
        }
        listTra();
    }, [])
    const addtoCart =(id)=>{
        // console.log("thêm vào",id);
    }
    return (
        <>
            <section className="menu-slide">
                <div className="container">
                    <SlideHeader />
                </div>
            </section>
            {/* besteling */}
            <div className=" container-fuild tw-bg-gray-100 tw-mt-[2em]">
                <section className="bestselling">
                    <div className="container">
                        <div className="bestselling__heading-wrap tw-mb-2">
                            <div className="bestselling__heading">Sản Phẩm Mới nhất </div>
                        </div>
                        {/* products bán chạy nhất  */}
                        <section className="row">
                            {product ? product.map((item, index) => {
                                if (index < 6) {
                                    return (<div key={index} className="bestselling__product col-lg-4 col-md-6 col-sm-12 tw-p-2 tw-my-2 ">
                                        <div className="bestselling__product-img-box tw-w-6/12">
                                            <Link to={`/product/${item._id}`}>
                                                <img src={`http://localhost:2210/api/products/readPhoto/${item._id}`} alt={item.name}
                                                    className="bestselling__product-img tw-w-48 " />

                                            </Link>
                                        </div>
                                        <div className="bestselling__product-text">
                                            <h5 className="bestselling__product-title tw-text-xl">
                                                <Link to={`/product/${item._id}`} className="bestselling__product-link tw-font-medium">{item.name}</Link>
                                            </h5>
                                            <h5 className="tw-text-base tw-mb-2 tw-font-medium tw-capitalize"> Thương hiệu: 
                                                {trademark?  trademark.map((element, index) => {
                                                    if(element._id == item.trademarkId){
                                                        return  <span key={index}  className="tw-pl-2">{element.name}</span> 
                                                    }
                                                }): ""}
                                              </h5>
                                            <span className="bestselling__product-price tw-text-xl ">
                                                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                                            </span>
                                            <div className="bestselling__product-btn-wrap">
                                                <button className="bestselling__product-btn tw-text-xl tw-p-2" onClick={()=>addtoCart(item._id)}>Thêm Vào Giỏ</button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            }) : ""}

                        </section>

                        {/* baner duoiws */}
                        <div className="row bestselling__banner tw-mt-10">
                            <div className="bestselling__banner-left col-lg-6  ">
                                <img src="https://file.hstatic.net/1000217316/file/cam-trai_f9a667eb67ee4dc2b7b2f271ad293c10_grande.jpg"
                                    className="tw-h-80 bestselling__banner-left-img" />
                            </div>
                            <div className="bestselling__banner-right col-lg-6">
                                <img src="https://file.hstatic.net/1000217316/file/phu-kien-chay-bo-1_43c7d097094f4a24aefcd3c95064bc1f_grande.jpg"
                                    className="tw-h-80 bestselling__banner-right-img " />
                            </div>
                        </div>
                    </div>
                </section>
                {/*có thể bạn thích*/}
                <section className="product__love tw-mt-3 tw-pt-5 tw-mb-0 ">
                    <div className="container tw-bg-gray-600">
                        <div className="row bg-white tw-text-center ">
                        
                                <div className="bestselling__heading-wrap  ">
                                    <div className="bestselling__heading  tw-mb-2"> Phụ Kiện  </div>
                                </div>
                        
                        </div>
                        <div className="row bg-white">
                            {product? product.map((item,index)=>{
                                if( index>6 && index <11 && item.categoryId == "60bdae50a854f907ecce44a9"){
                                    return    <div className="product__panel-item col-lg-3 col-md-6 col-sm-6 tw-text-center">
                                    <div className="product__panel-img-wrap tw-flex tw-items-center tw-justify-center ">
                                        <Link to="/">
                                            <img src={`http://localhost:2210/api/products/readPhoto/${item._id}`} alt={item.name}
                                                className="bestselling__product-img tw-w-48 tw-transition tw-duration-300 hover:tw-scale-100 tw-scale-50" />
    
                                        </Link>
                                    </div>
                                    <h3 className="product__panel-heading tw-text-center tw-w-auto">
                                        <Link href="#" className="product__panel-link tw-font-semibold hover:tw-text-black tw-text-lg">{item.name}</Link>
                                    </h3>
                                    <div className="product__panel-price">
    
                                        <span className="product__panel-price-current tw-text-lg  tw-text-red-600  tw-font-medium">
                                           {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")} VND
                                        </span>
                                        <button type="button"
                                            class=" tw-ml-5 btn btn-default tw-p-1 tw-bg-red-600 tw-text-base tw-mt tw-text-white hover:tw-text-white ">Thêm Vào Giỏ</button>
    
                                    </div>
                                </div>
                                }
                            }) : ""}
                         
                        </div>
                    </div>
                </section>

                {/* slide thương hiệu  */}
                <section className="section-margin tw--mt-10 container tw-p-0">
                    <SlideTrademark />
                </section>

            </div>

        </>

    )
}

export default HomePage

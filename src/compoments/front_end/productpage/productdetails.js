import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import acctionApi from '../../../api/acctionApi';
import comentApi from '../../../api/commentapi';
import ProductApi from '../../../api/productapi';
import trademarksApi from '../../../api/trademark';
import CommentPage from './conment';
import ListComment from './listcomment';
const ProductDetails = () => {
    const { id } = useParams();
    // console.log(id)
    const length = 4
    const [cusrrent, setCurrent] = useState(0)
    const next = () => {
        setCurrent(cusrrent === length - 1 ? 0 : cusrrent + 1)
    }
    const pew = () => {
        setCurrent(cusrrent === 0 ? length - 1 : cusrrent - 1)
    }
    //  chi tiết san rphaarm 
    const [product, setProduct] = useState({})
    useEffect(() => {
        const listdetail = async () => {
            const { data: pro } = await ProductApi.get(id)
            setProduct(pro)
        }
        listdetail();
    }, [])
    const [trademark, setTrademark] = useState([])
    useEffect(()=>{
        const listTra = async ()=>{
            const {data:trademarks }= await  trademarksApi.getAll()
            setTrademark(trademarks)
        }
        listTra()
    },[])
    // bình luận
    const [user, setUser] = useState([])
    const [coment , setComet] = useState([])
    useEffect(() => {
        const listC = async () => {
                const {data:comment} = await comentApi.getAll();
                setComet(comment)
                const {data:action} = await  acctionApi.getAll()
                setUser(action)
        }
        listC()
        },[])
        
    return (
        <div className="container  ">
            <div className="container tw-flex">
                <div className="image tw-w-3/6 tw-p-2">
                    <label htmlFor="checkLayer" className="tw-flex tw-justify-center tw-items-center">
                        <img className="tw-text-center  tw-w-80 tw-h-auto"
                            src={`http://localhost:2210/api/products/readPhoto/${product._id}`} alt />
                    </label>
                    <input type="checkbox" id="checkLayer" hidden />
                    <label htmlFor="checkLayer" className="layer tw-inset-0 tw-w-full tw-h-full"> </label>
                    <div id="imgede" className="img-detial tw-rounded-xl tw-pt-0  ">
                        <label htmlFor="checkLayer" className="edit tw-w-14 tw-h-14 tw-text-xl tw-float-right tw-absolute tw--right-2 ">
                            <p className="tw-bg-black tw-text-white border-3 tw-px-1 tw-py-0.5 tw-rounded-full  tw-absolute tw--top-4 tw--right-1 fa fa-times">
                            </p>
                        </label>
                        <div className="tw-text-black pewClick "> <i onClick={pew} className="fa fa-arrow-circle-left" /></div>
                        <div className="tw-text-black nextClick"> <i onClick={next} className="fa fa-arrow-circle-right" /></div>
                        <div clas="slider tw-flex tw-justify-around tw-items-center tw-relative  tw-w-full">
                            <div className={2 === cusrrent ? "active" : "nône"}>
                                <img className="tw-absolute w-w-[72em] tw-h-auto abc" src="https://file.hstatic.net/1000217316/file/mu-bao-hiem-ca-dau-bulldog-clasico-2_a2bbff59a15f4115b7d14b518d7724cc_grande.jpg" alt />

                            </div>
                            <div className={2 === cusrrent ? "active" : "nône"}>
                                <img className="tw-absolute tw-w-[72em] tw-h-auto" src="https://product.hstatic.net/1000217316/product/mu-bao-hiem-givi-h300vfibk-9_f74ca533ea444cf6bd994c46649566e2_large.jpg" alt />

                            </div>
                        </div>
                    </div>
                    <div className="tw-mt-3 tw-flex  tw-mb-2   tw-h-20  ">
                        <div className="tw-w-20 tw-mx-2 tw-float-left ">
                            <img src="https://file.hstatic.net/1000217316/file/mu-bao-hiem-ca-dau-bulldog-clasico-2_a2bbff59a15f4115b7d14b518d7724cc_grande.jpg" alt />
                        </div>
                        <div className=" tw-w-20 tw-mx-2   tw-float-left ">
                            <img src="https://file.hstatic.net/1000217316/file/mu-bao-hiem-ca-dau-bulldog-clasico-2_a2bbff59a15f4115b7d14b518d7724cc_grande.jpg" alt />
                        </div>
                    </div>
                </div>
                <div className="tw-w-3/6 tw-pl-3 tw-pt-2">
                    <h5 className="tw-font-medium tw-text-xl tw-capitalize"> {product.name} </h5>
                    <p className="tw-text-lg my-2 ">Thương Hiệu :
                     <span className="tw-font-medium" > {trademark?  trademark.map((elment)=>{
                         if(elment._id ==  product.trademarkId){
                             return elment.name
                         }
                     }) :""} </span> </p>
                    <p className="tw-mb-5"> Giá : <span className="tw-font-medium"> {product.price
                    ? product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".") : ""} VND</span></p>
                    <span className="tw-px-2 tw-text-xl tw-border-gray-600 border-1 tw-leading-4 tw-text-center">
                        <b className="tw-border-r-2 tw-border-gray-600 tw-pl-2 tw-pr-3  ">-</b>
                        <span className="tw-px-3 tw-px-5 ">1</span>
                        <b className="tw-border-l-2 tw-border-gray-600 tw-pl-3 tw-pr-2 tw-text-center ">+</b>
                    </span> <br />
                    <button className="tw-uppercase  tw-p-2 tw-w-40 tw-text-center tw-rounded-xl tw-mt-6  tw-text-white tw-bg-red-600"> Thêm Vào giỏ
      </button>
                </div>
            </div>
            <hr />
            {/* /abshnjlkmclscfyvgubhinjmk */}
            <div className="container tw-mt-10">
                <h4 className="tw-font-bold tw-text-2xl tw-pt-2 tw-border-t-2 tw-border-l-2 tw-border-r-2 tw-w-60 tw-text-center tw-border-black">Chi Tiết Sản phẩm
                     </h4>
                <div className="tw-pl-5 tw-py-3">
                    <p>{product.description}
               </p>
                </div>
              <CommentPage id={id}  />
                {/* <p class="tw-text-center tw-mt-3 tw-text-red-600 tw-text-xl"> sai rooif bạn ơi </p> */}
            </div>
            {/*  nội dung bình luận  */}
          
           <ListComment cmt={coment} id={id} user={user} />
            <hr />
            <div className="container  tw-h-5  tw-mt-2">
                <h4 className="tw-text-xl tw-font-semibold"> Sản Phẩm liên quan </h4>
            </div>
        </div>

    )
}

export default ProductDetails

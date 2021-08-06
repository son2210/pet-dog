import React, { useEffect, useState } from "react";
import cartApi from "../../../api/giohangapi";
import ProductApi from "../../../api/productapi";
import CartItem from './cartItem';
const Cartpage=()=>{
    const [list ,setList] = useState()
    const [product,setProduct] = useState()
    useEffect(async () =>{
        const {data:cart } = await  cartApi.getAll()
        const {data:product} = await ProductApi.getAll()
        setList(cart)
        setProduct(product)
    },[])
    useEffect(async()=>{
        const {data:product} = await ProductApi.getAll()
        setProduct(product)
    },[])
    console.log(product);
    return (
       <div className="container"> 
                <table class="table  tw-mw-full">
                    <thead>
                        <tr>
                            <th className="tw-2[px]"> STT</th>
                            <th> Name</th>
                            <th> Ảnh </th>
                            <th> Số lượng </th>
                            <th> Giá Tiền  </th>
                            <th> Tổng Tiền  </th>

                        </tr>
                    </thead>
                    <tbody>
                            <CartItem list={list}  product={product} />
                    </tbody>
                </table>
                
       </div>
    )
}
export default Cartpage
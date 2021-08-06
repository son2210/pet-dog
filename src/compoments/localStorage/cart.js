// import cart from '../api/cart.js'
import cartApi from '../../api/giohangapi'
import { getUser } from './user'

import {useHistory}  from  "react-router-dom"
let acc = getUser();

const addGiohang = {
    
    async add(idProduct) { // id sản phẩm 
  
        if (!acc) {
            alert(" Bạn Cần đăng nhập ")
            window.location.href="/login"
        } else {
            const { data: prd } = await cartApi.getAll(); // tất cả sản phẩm trong cart 
            if (prd.length < 1) {
                let newCart = {
                    iduser: acc.user._id,
                    idProduct: idProduct,
                    quantity: 1
                }
                    try {
                        let { data } = await cartApi.add(newCart) // them mới tinh 
                        alert(data.message)
                        this.updategiohang(); // sổ nhảy 
                    } catch (error) {
                        alert(error.response.data.err)
                    }


            } else {
                let old_products = prd.find(item => item.idProduct == idProduct && item.iduser == acc.user._id) //lọc tất cả sản phẩm có id là click và id là đăng nhập 
                if (old_products == undefined) { // kiểm tra có hay k 
                    let newCart = {
                        iduser: acc.user._id,
                        idProduct: idProduct,
                        quantity: 1
                    }
                    try {
                        let { data } = await cartApi.add(newCart) // thêm mới vào 
                        alert(data.message)
                        this.updategiohang();
                    } catch (error) {
                        alert(error.response.data.err)
                    }
                    // console.log("chưa có sản phẩm đó và thêm mới vào  ");

                } else {
                    let old_products = prd.find(item => item.idProduct == idProduct && item.iduser == acc.user._id)
                    let cartupdata = {
                        iduser: old_products.iduser,
                        idProduct: old_products.idProduct,
                        quantity: old_products.quantity + 1
                    }
                    try {
                        const { data } = await cartApi.update(old_products._id,cartupdata)
                        console.log(data);
                        alert("thêm thành công ")
                        this.updategiohang();
                    } catch (error) {
                        alert("sai")
                        console.log(error);
                    }
                }
            }
        }
    },
    async updategiohang() {
        let totalProduct = 0
        const { data: toCarDisplay } = await cartApi.getAll();
        let user =  toCarDisplay.filter(item => item.iduser ===  acc.user._id)
        if (user.length > 0) {
            user.forEach(item => {
                    totalProduct += item.quantity
                })
        } else {
            totalProduct = 0
        }
        document.querySelector('#totalProduct').innerHTML = totalProduct
    }
}
export default addGiohang
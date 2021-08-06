import axiosClient from "..";
import { getUser } from "../../compoments/localStorage/user";
const acction = getUser(); // lấy trên localstore
const ProductApi = {
    // tất cả 
    getAll(value){
        const url = `/products?key=${value}`
        return  axiosClient.get(url)
    },
    //  lọc theo cate
    getCate(id){
        const url = `/products/key?cateId=${id}`
        return  axiosClient.get(url)
    },
    // lọc tram
    getTrademark(id){
        const url = `/products/keys?trademarkId=${id}`
        return  axiosClient.get(url)
    },
    getCate(id){
        const url = `/products/key?cateId=${id}`
        return  axiosClient.get(url)
    },
    get(id){
        const url = `/products/${id}`
        return  axiosClient.get(url)
    },
    remove(id){
        const url = `/products/${acction.user._id}/${id}` // trùng link vs back_end 
        return  axiosClient.delete(url ,{headers: {"Authorization" : `Bearer ${acction.token}`} }) 
    },
    add(data){
        const url = `/products/${acction.user._id}`
        return  axiosClient.post(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    update(id, data){
        const url =`/products/${acction.user._id}/${id}`
        return axiosClient.put(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    }
}
export  default ProductApi;
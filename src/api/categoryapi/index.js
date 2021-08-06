import axiosClient from ".."
import { getUser } from "../../compoments/localStorage/user"
const acction = getUser();
const CategoryApi = {
    getAll(){
        const url = "/categorys"
        return  axiosClient.get(url)
    },
    getCate(){
        const url = "/categorys"
        return  axiosClient.get(url)
    },
    get(id){
        const url = `/categorys/${id}`
        return  axiosClient.get(url)
    },
    remove(id){
        const url =`/categorys/${acction.user._id}/${id}`
        return  axiosClient.delete(url,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    add(data){
        const url = `/categorys/${acction.user._id}`
        return axiosClient.post(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    update(id,data){
        console.log(data);
        const url =`/categorys/${acction.user._id}/${id}`
        return axiosClient.put(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    }
}
export default  CategoryApi
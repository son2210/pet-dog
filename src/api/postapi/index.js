import  axiosClient from ".."
import { getUser } from "../../compoments/localStorage/user"
const acction = getUser()
const postApi = {
    getAll(){
        const url="/post"
        return axiosClient.get(url)
    },
    get(id){
        const url = `/post/${id}`
        return axiosClient.get(url)
    },
    add(data){
        const url = `/post/${acction.user._id}`
        return axiosClient.post(url, data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    remove(id){
        const url = `/post/ ${acction.user._id}/${id}`
        return axiosClient.remove(url,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    update(id,data){
        const url = `/post/${acction.user._id}/${id}`
        return axiosClient.put(url, data , {headers: {"Authorization" : `Bearer ${acction.token}`} })
    }
}
export default  postApi
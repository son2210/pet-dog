import  axiosClient from ".."
import {getUser} from '../../compoments/localStorage/user'
const acction = getUser();
const slideApi = {
    getAll(){
        const url = `/slides`
        return axiosClient.get(url)
    },
    get(id){
        const url = `/slides/${id}`
        return axiosClient.get(url)
    },
    remove(id){
        const url = `/slides/${acction.user._id}/${id}`
        return axiosClient.delete(url,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    add(data){
        const url = `/slides/${acction.user._id}`
        return  axiosClient.post(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    update(id,data){
        const url = `/slides/${acction.user._id}/${id}`
        return axiosClient.put(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    }
}
export default slideApi
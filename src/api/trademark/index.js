import axiosClient from ".."
import { getUser } from "../../compoments/localStorage/user"
const acction = getUser();
const trademarksApi = {
    getAll(){
        const url = '/trademarks'
        return  axiosClient.get(url)
    },
    add(data){
        const url = `/trademarks/${acction.user._id}`
        return  axiosClient.post(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    remove(id){
        const url = `/trademarks/${acction.user._id}/${id}`
        return axiosClient.delete(url,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    },
    get(id){
        const url =`/trademarks/${id}`;
        return  axiosClient.get(url)
    },
    update(id,data){
        const url = `/trademarks/${acction.user._id}/${id}`
        return axiosClient.put(url,data,{headers: {"Authorization" : `Bearer ${acction.token}`} })
    }
}
export default  trademarksApi
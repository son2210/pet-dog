import axiosClient from ".."

const cartApi = {
    getAll(){
        const url ="/cart"
        return  axiosClient.get(url)
    },
    get(id){
        const url =`/cart${id}`
        return  axiosClient.get(url)
    },
    add(data){
        const url = `/cart`
        return  axiosClient.post(url,data)
    },
    remove(id){
        const url = `/cart/${id}`
        return axiosClient.delete(url)
    },
    update(id,data){
        const url = `/cart/${id}`
        return  axiosClient.put(url,data)
    }
}
export default cartApi
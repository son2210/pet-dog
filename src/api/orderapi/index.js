import axiosClient from ".."

const orderApi = {
        getAll(){
            const  url = '/orders'
            return  axiosClient.get(url)
        },
        get(id){
            const url=`/orders/${id}`
            return axiosClient.get(url)
        },
        add(data){
            const url = `/orders`
            return axiosClient.post(url, data)
        },
        remove(id){
            const url = `/orders/${id}`
            return axiosClient.delete(url)
        }
}
export default orderApi
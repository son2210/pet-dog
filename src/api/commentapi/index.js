import axiosClient from ".."

const comentApi={
    getAll(){
        const url = '/coment'
        return axiosClient.get(url)
    },
    add(data){
        const url = '/coment'
        return axiosClient.post(url,data)
    },
    remove(id){
        const url = `/coment/${id}`
        return  axiosClient.delete(url)
    },
    get(id){
        const url = `/coment/${id}`
        return axiosClient.get(url)
    }
}
export default comentApi
import axiosClient from ".."

const acctionApi ={
    getAll(){
        const url =  "/users"
        return axiosClient.get(url);
    },
    get(id){
        const url =`/users/${id}`
        return axiosClient.get(url);
    },
  
    remove(id){
        const url =`/users/${id}`
        return axiosClient.delete(url);
    },
    add(user){ // thêm tài khoản 
        const url = `/signup`
        return axiosClient.post(url,user)
    },
    update(id,data){
        const url = `/user/${id}`;
        return axiosClient.put(url,data)
    },
    signin(user){ // đăng nhập
        const  url = '/signin'
        return axiosClient.post(url, user)
    },
    signout(){
        const url = '/signout'
        return axiosClient.get(url)
    }
}
export default acctionApi
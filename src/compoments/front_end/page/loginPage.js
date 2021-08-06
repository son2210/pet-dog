import React, { useState  } from 'react'
import { Link, Redirect, useHistory } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import acctionApi from '../../../api/acctionApi'
import { actionLocal,getUser } from '../../localStorage/user'
const LoginPage = () => {
    const check = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })
    const [status,setStatus]  = useState(false)
    
    const action = getUser();
    const redirectAdmin = ()=>{
        if(status){
            if(action.user.role==1){
                 return  <Redirect   to="/admin" />
               }else{
                return  <Redirect   to="/" />
              }
        }      
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(check)
    })
   
    const dangNhap = async (data) => { 
        try {
            const { data: user } = await acctionApi.signin(data)
            if (user) {
                actionLocal(user,()=>{
                    setStatus(true) 
                })
        
            }else{
                console.log("đăng nhập thất bại !")
            }
        } catch (error) {
            console.log(error.response.data.err);
        }
    }
   
    return (
        < div className="container tw-mx-auto tw-h-full tw-flex tw-flex-1 tw-justify-center tw-items-center">
            {redirectAdmin()}
            <div className="tw-w-full tw-max-w-lg">
                <div className="tw-leading-loose">
                    <form onSubmit={handleSubmit(dangNhap)} className="tw-max-w-sm tw-m-4 tw-p-10 tw-bg-white tw-bg-opacity-25 tw-rounded tw-shadow-xl">
                        <p className="tw-font-medium tw-text-center tw-text-lg tw-font-bold">LOGIN</p>
                        <div className>
                            <label className="tw-block tw-text-sm tw-py-2 tw-font-medium" htmlFor="email">Email</label>
                            <input {...register('email')} className={`${errors.email ? "focus:tw-border-red-600" : ""} tw-w-full tw-px-5 tw-py-1 tw-text-gray-700 tw-border-2 tw-border-gray-400 tw-rounded-lg focus:tw-outline-none focus:tw-bg-white`}
                                type="email" id="email" placeholder="Email" />
                            {errors.email && <span className="tw-text-danger tw-mt-1">Không được để trống</span>}
                        </div>
                        <div className="tw-mt-2">
                            <label className="tw-block  tw-text-sm tw-pb-2">Mật Khẩu </label>
                            <input {...register("password")} className={`${errors.password ? "focus:tw-border-red-600" : ""} tw-w-full tw-px-5 tw-py-1 tw-text-gray-700 tw-border-2 tw-border-gray-400 tw-rounded-lg focus:tw-outline-none focus:tw-bg-white`}
                                type="password" id="password" placeholder="Password" />
                            {errors.password && <span className="tw-text-danger tw-mt-1">Tối thiểu 6 ký tự </span>}
                        </div>
                        <div className="tw-mt-4 tw-items-center tw-flex tw-justify-center">
                            <button className="tw-px-4 tw-py-1 tw-text-white tw-font-light tw-text-center tw-tracking-wider tw-bg-gray-900 hover:tw-bg-gray-800 tw-rounded"> 
                            Đăng nhập </button>
                            <a className="tw-inline-block tw-right-0 tw-align-baseline tw-font-bold tw-text-sm text-500 tw-text-white hover:tw-text-red-400" href="#"></a>
                        </div>
                        <div className="tw-text-center">
                            <Link to="/registration" className="tw-inline-block tw-right-0 tw-align-baseline tw-font-light tw-text-sm text-500 hover:tw-text-red-400">
                                Đăng ký
                            </Link>
                        </div>

                    </form>
                  
                </div>
            </div>
        </div>

    )
    // }
}

export default LoginPage

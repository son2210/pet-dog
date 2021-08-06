import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import acctionApi from '../../../api/acctionApi'
import { actionLocal } from '../../localStorage/user'
import { getUser } from '../../localStorage/user'
import { Redirect } from 'react-router-dom'
const RegistrationPage = () => {
    const history = useHistory();
    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ phone: yup.string().matches(phoneRegExp),
    const check = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        confimPassword: yup.string().oneOf([yup.ref('password'), null]).required()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(check)
    })
    const action = getUser();
    const [status,setTatus] = useState(false)
    const addAction = async (data) => {
        // new user mới 
        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: 0
        }
        try {
            const { data: user } = await acctionApi.add(newUser)
            if (user) {
                console.log("đã đăng ký thành công ", user)
                const action = {
                    email: data.email,
                    password: data.password
                }
                const { data: login } = await acctionApi.signin(action)
                if(login) {
                    console.log(login)
                    actionLocal(login,()=>{
                        setTatus(true)
                    })
                }else{
                    console.log("đăng nhập thất bại !")
                }
            }
        } catch (error) {
            console.log(error)
        }

    }
    const redirectAdmin = ()=>{
        if(status){
            if(action.user.role==1){
                 return  <Redirect   to="/admin" />
               }else{
                return  <Redirect   to="/" />
              }
        }      
    }
    return (
        <div className="container tw-mx-auto tw-h-full tw-flex tw-flex-1 tw-justify-center tw-items-center">
            <div className="tw-w-full tw-max-w-lg">
                <div className="tw-leading-loose">
                {redirectAdmin()}
                    <form onSubmit={handleSubmit(addAction)} className="tw-max-w-sm tw-m-4 tw-p-10 tw-bg-white tw-bg-opacity-25 tw-rounded tw-shadow-xl">
                        <p className="tw-font-medium tw-text-center tw-text-lg tw-font-bold">Đăng ký</p>
                        <div className>
                            <label className="tw-block tw-text-sm tw-pb-2 tw-font-medium" htmlFor="email">Name</label>
                            <input {...register('name')} className={`${errors.name ? "focus:tw-border-red-600" : ""} tw-w-full tw-px-5 tw-py-1 tw-text-gray-700 tw-border-2 tw-border-gray-400 tw-rounded-lg focus:tw-outline-none`}
                                type="text" id="email" placeholder="Name" />
                            {errors.name && <span className="tw-text-danger tw-mt-1">Không được để trống</span>}
                        </div>
                        <div className>
                            <label className="tw-block tw-text-sm tw-py-2 tw-font-medium" htmlFor="email">Email</label>
                            <input {...register('email')} className={`${errors.email ? "focus:tw-border-red-600" : ""} tw-w-full tw-px-5 tw-py-1 tw-text-gray-700 tw-border-2 tw-border-gray-400 tw-rounded-lg focus:tw-outline-none focus:tw-bg-white`}
                                type="email" id="email" placeholder="Email" />
                            {errors.email && <span className="tw-text-danger tw-mt-1">Không được để trống</span>}
                        </div>
                        <div className="tw-mt-2">
                            <label className="tw-block  tw-text-sm tw-pb-2 tw-font-medium"> Mật Khẩu </label>
                            <input {...register('password')} className={` ${errors.password ? "focus:tw-border-red-600" : ""} tw-w-full tw-px-5 tw-py-1 tw-text-gray-700 tw-border-2 tw-border-gray-400 tw-rounded-lg focus:tw-outline-none focus:tw-bg-white`}
                                type="password" id="password" placeholder="Password" />
                            {errors.password && <span className="tw-text-danger tw-mt-1">Tối thiểu 6 ký tự</span>}
                        </div>
                        <div className="tw-mt-2">
                            <label className="tw-block  tw-text-sm tw-pb-2 tw-font-medium"> Nhập lại mật khẩu </label>
                            <input {...register('confimPassword')} className={` ${errors.confimPassword ? "focus:tw-border-red-600" : ""} tw-w-full tw-px-5 tw-py-1 tw-text-gray-700 tw-border-2 tw-border-gray-400 tw-rounded-lg focus:tw-outline-none focus:tw-bg-white`}
                                type="password" id="password" placeholder="Password" />
                            {errors.confimPassword && <span className="tw-text-danger tw-mt-1">Không chính xác </span>}
                        </div>
                        <div className="tw-mt-4 tw-items-center tw-flex tw-justify-center">
                            <button className="tw-px-4 tw-py-1 tw-text-white tw-font-light tw-text-center tw-tracking-wider tw-bg-gray-900 hover:tw-bg-gray-800 tw-rounded"> Đăng ký </button>
                        </div>
                        <div className="tw-text-center">
                            <Link to="/login" className="tw-inline-block tw-right-0 tw-align-baseline tw-font-light tw-text-sm text-500 hover:tw-text-red-400">
                                Đăng nhập
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default RegistrationPage

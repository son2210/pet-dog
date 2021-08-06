import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../localStorage/user'
import { Redirect } from 'react-router'
const NavAdmin = () => {
    const action = getUser();
    if(action){
        if(action.user.role==1){
            return (
                <div className="nav-header-amdin tw-fixed tw-h-screen tw-bg-black tw-w-1/5">
                    <div className="header-admin tw-text-center tw-pt-2">
                        <h2 className="tw-text-3xl tw-font-bold tw-text-gray-200 fa "> 
                         <span><Link to='/' className="fa fa-home hover:tw-text-white"> </Link> </span>DASHBOARD </h2>
                        <div className="logo-admin tw-pl-10 tw-mt-2 tw-py-2">
                            <img className="tw-w-8 tw-h-8 tw-rounded-full tw-float-left" src="https://scr.vn/wp-content/uploads/2020/08/H%C3%ACnh-m%E1%BA%B7t-c%C6%B0%E1%BB%9Di-%C4%91%E1%BB%83u-nguy-hi%E1%BB%83m.jpg" alt />
                            <b className="tw-float-left tw-text-2xl tw-ml-4 tw-text-gray-300">Amdin</b>
                        </div>
                    </div>
                    <main className="saibar-admin-menu tw-mt-8">
                        <ul className="menu-admin tw-pl-0 ">
                            <li className="tw-pl-20 tw-py-2 hover:tw-bg-gray-600 hover:tw-text-white tw-text-gray-300 tw-text-2xl ">
                                <Link to="/admin/products/list" className="tw-block tw-text-2xl tw-text-gray-300 text-decoration-none hover:tw-text-white"> Sản Phẩm  </Link> </li>
                            <li className="tw-pl-20 tw-py-2 hover:tw-bg-gray-600 hover:tw-text-white tw-text-gray-300 tw-text-2xl ">
                                <Link to="/admin/category/list" className="tw-block tw-text-2xl tw-text-gray-300 text-decoration-none hover:tw-text-white">
                             
                             Danh mục </Link> </li>
                            <li className="tw-pl-20 tw-py-2 hover:tw-bg-gray-600 hover:tw-text-white tw-text-gray-300 tw-text-2xl">
                                <Link className="tw-block tw-text-2xl tw-text-gray-300 text-decoration-none hover:tw-text-white" to="/admin/trademarks/list">
                                     Thương Hiệu </Link>
                            </li>
                            <li className="tw-pl-20 tw-py-2 hover:tw-bg-gray-600 hover:tw-text-white tw-text-gray-300 tw-text-2xl">
                                <Link to="/admin/list/coment" className="tw-block tw-text-2xl tw-text-gray-300 text-decoration-none hover:tw-text-white">   
                                <span className="fa fa-commenting"></span> Bình luận </Link> 
                                </li>
                            <li className="tw-pl-20 tw-py-2 hover:tw-bg-gray-600 hover:tw-text-white tw-text-gray-300 tw-text-2xl"><Link className="tw-block tw-text-2xl tw-text-gray-300 text-decoration-none hover:tw-text-white"> Phản Hồi </Link> </li>
                            <li className="tw-pl-20 tw-py-2 hover:tw-bg-gray-600 hover:tw-text-white tw-text-gray-300 tw-text-2xl">
                                <Link to="/admin/postnew/list" className="tw-block tw-text-2xl tw-text-gray-300 text-decoration-none hover:tw-text-white">Blog </Link>
                                 </li>
                            <li className="tw-pl-20 tw-py-2 hover:tw-bg-gray-600 hover:tw-text-white tw-text-gray-300 tw-text-2xl">
                                <Link to="/admin/slide/list" className="tw-block tw-text-2xl tw-text-gray-300 text-decoration-none hover:tw-text-white">Slide </Link>
                                 </li>
                        </ul>
                    </main>
                </div>
            )
        }else{
            return <Redirect to="/login"/>
        }
    }else{
        return <Redirect to="/login"/>
    }
  

}

export default NavAdmin

import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import acctionApi from '../../api/acctionApi';
import { getUser } from '../localStorage/user'
const Navheader = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const acction = getUser();
  // console.log("tài khaorn ", acction.user.role)
  const [login, setLogin] = useState(false)
  useEffect(() => {
    getUser() && setLogin(true)
  }, [pathname,login])
  const signOut = async () => { // đăng xuất 
  await acctionApi.signout()
    history.push('/')
    localStorage.removeItem('user');
    console.log("dăng xuất ")
    setLogin(false)
  }
 
  return (
    <>
      <header id="header tw-bg-red-600">
        {/* header top */}
        <div className="header__top  tw-bg-red- ">
          <div className="container">
            <section className=" tw-flex">
              <div className="col-lg-5 col-md-0 col-sm-0 heade__top-left">
                <span><Link to='/'> Đồ Phượt 365 - Cung cấp đồ phượt chất lượng</Link></span>
              </div>
              <nav className="col-lg-7 col-md-0 col-sm-0 header__top-right">
                <ul className="header__top-list  tw-flex tw-float-right">
                  <li className="header__top-item">
                    <a href="#" className="header__top-link">
                      Hỏi đáp</a>
                  </li>
                  <li className="header__top-item">
                    <a href="#" className="header__top-link">Hướng dẫn</a>
                  </li>

                  {!login && (
                    <>
                      <li className="header__top-item">
                        <Link to="/registration" href="#" className="header__top-link">Đăng ký</Link>
                      </li>
                      <li className="header__top-item">
                        <Link to="/login" href="#" className="header__top-link">Đăng nhập</Link>
                      </li>
                    </>
                  )}
                  {login && (
                    <>
                      <li className="header__top-item">
                        <Link to="/" href="#" className="header__top-link">{ acction ? acction.user.name : ""}</Link>
                        <ul className="sub-menu-nav tw-p-2 tw-text-white">
                          <li onClick={signOut} > Đăng xuất </li>
                          {acction.user.role == 1 && (
                            <li><Link to="/admin"> quản trị</Link></li>
                          )}
                          {acction.user.role != 1 && (
                            <li>lịch sử </li>
                          )}

                        </ul>
                      </li>

                    </>
                  )}



                </ul>
              </nav>
            </section>
          </div>
        </div>
        {/*end header top */}
        {/* header bottom */}
        <div className="header__bottom tw-bg-red-500 tw-pb-5 ">
          <div className="container ">7
            <section className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 header__logo">
                <h1 className="header__heading">
                  <a href="#" className="header__logo-link">
                    <img src="images/logo.png" alt="Logo" className="header__logo-img" />
                  </a>
                </h1>
              </div>
              <div className="col-lg-6 col-md-7 col-sm-0 header__search">
                <form className="tw-w-full">
                  <input type="text" className="header__search-input" placeholder="Tìm kiếm tại đây..." />
                  <button className="header__search-btn">
                    <div className="header__search-icon-wrap">
                      <i className="fa fa-search header__search-icon" />
                    </div>
                  </button>
                </form>
              </div>
              <div className="col-lg-2 col-md-0 col-sm-0 header__call">
                <div className="header__call-icon-wrap tw-pl-2">
                  <i className="fa fa-phone header__call-icon" />
                </div>
                <div className="header__call-info tw-pl-3">
                  <div className="header__call-text ">
                    Gọi điện tư vấn
                  </div>
                  <div className="header__call-number ">
                    0352.860.701
                  </div>
                </div>
              </div>
              <Link to="/cart/list" className="col-lg-1 col-sm-0 header__cart">
                <div className="header__cart-icon-wrap">
                  <span className="header__notice" id="totalProduct">0</span>
                  <i className="fa fa-shopping-cart header__nav-cart-icon" />
                </div>
              </Link>
            </section>
          </div>
        </div>
        {/*end header bottom */}
        {/* header nav */}
        <div className="header__nav tw-bg-red-600">
          <div className="container">
            <section className="row ">
              <div className="header__nav-menu-wrap col-lg-3 col-md-0 col-sm-0">
                <i className="fa fa-bars  tw-pr header__nav-menu-icon" />
                <div className="header__nav-menu-title tw-text-xl">Danh mục sản phẩm</div>
              </div>
              <div className="header__nav col-lg-9 col-md-0 col-sm-0   ">
                <ul className="header__nav-list">
                  <li className=" tw-px-5 tw-hover:tw-text-white">
                    <Link to="/" href="#" className="header__nav-link tw-text-white tw-font-semibold tw-hover:tw-text-red-400 tw-text-xl "> Trang chủ</Link>
                  </li>
                  <li className=" tw-px-5">
                    <Link href="#" className=" header__nav-link tw-text-white tw-font-semibold tw-text-xl">Giới thiệu</Link>
                  </li>
                  <li className=" tw-px-5">
                    <Link to="/all/products/list" className="header__nav-link tw-text-white tw-font-semibold tw-text-xl">Sản phẩm</Link>
                  </li>
                  <li className=" tw-px-5">
                    <Link href="post.html" className="header__nav-link tw-text-white tw-font-semibold tw-text-xl">Bài viết</Link>
                  </li>
                  <li className=" tw-px-5">
                    <Link to='/concact' className="header__nav-link tw-text-white tw-font-semibold tw-text-xl">Liên hệ</Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navheader

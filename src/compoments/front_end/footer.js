import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="container-fulid tw-font-bold footer tw-mt-5 tw-bg-black tw-mt-10 tw-py-3">
                <div className="container tw-flex grid-gap">
                    <div className="tw-w-full tw-text-gray-300 tw-pr-3">
                        <h5 className="tw-text-white">Liên Hệ</h5>
                        <li className="fa fa-map-marker tw-text-base hover:tw-text-white">&nbsp; DC: Trịnh Văn Bô- Nam Từ Liêm-Hà nội </li>
                        <li className="fa fa-phone tw-text-base  hover:tw-text-white"> 098989898 </li>
                        <li className="fa fa-envelope  tw-text-base  hover:tw-text-white">&nbsp; chungmayhoilamgi@gmail.com </li>
                    </div>
                    <div className="tw-w-full tw-pr-3 tw-text-gray-300">
                        <h5 className="tw-text-white">Chính sách hỗ trợ</h5>
                        <li className="fa fa-check-circle tw-text-blue-400 "><a className="tw-text-base text-decoration-none hover:tw-text-white tw-text-gray-300" href> Phương thức thanh toán</a></li>
                        <li className="fa fa-check-circle tw-text-blue-400"><a className="tw-text-base text-decoration-none  hover:tw-text-white tw-text-gray-300" href> Quy định đổi/trả hàng</a> </li>
                        <li className="fa fa-check-circle tw-text-blue-400"><a className="tw-text-base text-decoration-none  hover:tw-text-white tw-text-gray-300" href> Chính sách vận chuyển</a></li>
                        <li className="fa fa-check-circle tw-text-blue-400"><a className="tw-text-base text-decoration-none  hover:tw-text-white  tw-text-gray-300" href> Bảo mật thông tin</a></li>
                    </div>
                    <div className="tw-w-full tw-pr-3 tw-text-gray-300">
                        <h5 className="tw-text-white">Về chúng tôi </h5>
                        <li className="fa fa-check-circle tw-text-blue-400"> <span className="tw-text-base tw-text-gray-300 hover:tw-text-white">Hệ thống phân phối phụ kiện chính hãng trên toàn quốc</span></li>
                        <li className="fa fa-check-circle tw-text-blue-400"> <span className="tw-text-base tw-text-gray-300 hover:tw-text-white">Dịch vụ chăm sóc khách hàng chuyên nghiện 12/7 </span> </li>
                        <li className="fa fa-check-circle tw-text-blue-400"><span className="tw-text-base tw-text-gray-300 hover:tw-text-white">  Không ngừng nâng cao chất lượng sản phẩm và dịch vụ</span> </li>
                    </div>
                    <div className="tw-w-full tw-pl-1">
                        <h5 className="tw-text-white">Kết nối với chúng tôi </h5>
                        <ul className="tw-flex">
                            <li className="tw-px-2 tw-text-center tw-text-3xl"><a className="fa fa-facebook-official tw-text-gray-300 hover:tw-text-white  text-decoration-none href=" /> </li>
                                <li className="tw-px-2 tw-text-center tw-text-3xl"> <a className="fa fa-instagram  tw-text-gray-300 hover:tw-text-white text-decoration-none" href="" /></li>
                                <li className="tw-px-2 tw-text-center tw-text-3xl"><a className="fa fa-youtube-play tw-text-gray-300 hover:tw-text-white  text-decoration-none" href /></li>
                                <li className="tw-px-2 tw-text-center tw-text-3xl"><a className="fa fa-phone-square tw-text-gray-300 hover:tw-text-white  text-decoration-none " href /></li>
                          </ul>
                    </div>
                    </div>
                    <hr className="container tw-text-3xl tw-font-bold  tw-text-gray-100 tw-my-4" />
                    <div className="container">
                        <p className="tw-text-center tw-text-gray-300 hover:tw-text-white">  DoPhuot luôn cung cấp những dịch vụ tốt nhất với khách hàng </p>
                    </div>
            </footer>

        </>
    )
}

export default Footer

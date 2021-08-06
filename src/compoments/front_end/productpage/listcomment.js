import React from 'react'
const ListComment = ({ cmt, id, user }) => {
    const commentPro = cmt.filter(item => item.productId === id)
    return (
        <>
            {commentPro.length> 0 ?commentPro.map((item, index) =>
                <div key={index} className="tw-mt-6 tw-mb-2 tw-pl-5">
                    <span>  {user ? user.map((element, index) => {
                        if (element._id == item.adminId) {
                            return <div key={index}> <span>
                                <span className="tw-text-base tw-font-medium">{element.name}</span>
                                {element.role == 1 ? <span className="tw-ml-1 tw-text-[10px] tw-bg-black tw-px-1 tw-rounded-lg tw-text-yellow-300 ">Quản trị </span> : "" }
                            </span>
                            </div>
                        }

                    }) : ""}
                        <div>
                            <p className="tw-pl-5 tw-text-sm tw-pt-2 ">{item.contenComment} </p>
                        </div>
                    </span></div>
            ): <h2 className="tw-my-5 tw-text-center tw-text-xl tw-font-semibold"> Chưa có phản hồi nào  </h2> }
        </>
    )
}

export default ListComment

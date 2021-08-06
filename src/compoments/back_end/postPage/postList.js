import React ,{ useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PostItem from './postItem'
const ListPost = () => {
    const [list , setList] = useState([])

    return (
        <main className="pt-3">
            <h3 className="tw-text-center tw-text-2xl tw-font-bold">Bài Viết</h3>
            <div className="tw-text-right tw--mt-8 tw-mr-2 tw-text-sm" ><Link className="tw-p-1 tw-bg-blue-600 tw-text-white tw-rounded" to="/admin/postnew/add"> New</Link> </div>
            <table className="tw-w-full tw-text-center text-1xl tw-mt-8">
                <tbody>
                    <tr className="tw-bg-gray-200 tw-uppercase tw-text-sm tw-leading-normal tw-ml-2">
                        <th className="tw-w-6"> STT</th>
                        <th className="tw-py-3 tw-px-6 tw-text-center">Tiêu đề</th>
                        <th className="tw-justify-center tw-text-center">ẢNH </th>
                        <th className="tw-py-3 tw-px-6 tw-text-center">ACTIONS</th>
                    </tr>
                    <PostItem list={list} />
                </tbody>
            </table>

        </main>
    )
}

export default ListPost

import React, { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import CategoryApi from '../../../api/categoryapi'

const NavCate = ({onChangeId}) => {
    const {id} = useParams();
    // console.log("id nè", id)
    const [listCate, setListCate] = useState([])
 
    useEffect(() => {
        const lisC = async () => {
            const { data: cate } = await CategoryApi.getAll()
            setListCate(cate)
        }
        lisC();
    }, [])
    // onClick={()=>onChangeId(item._id)}
    return (
       <>
            <nav className="tw-w-[20%] tw-pr-5">
                <ul>
                    {listCate.map((item, index) =>
                        <>
                            <li key={index} className="tw-px-2 tw-text-xl tw-py-[1px] hover:tw-bg-red-600">
                                <Link to={`/category/${item._id}`}  className="tw-text-decoration-none  tw-uppercase tw-text-gray-600 hover:tw-text-white tw-block"> {item.name} </Link>
                            </li>
                        </>
                    )}

                </ul>

            </nav>
            {/*  sản phẩm  */}
            
      </>
    )
}

export default NavCate

import React, {useState, useEffect} from 'react'
import  {Link} from 'react-router-dom'
import slideApi  from '../../../api/slideShow'
import SlideItem from './slideItem'
const SlideList = () => {
    document.title = "Danh Sách Thương Hiệu "
    const [list , setList] = useState([])
    useEffect(() => {
            const listTra = async ()=>{
                try {
                    const {data:slide} = await slideApi.getAll()
                    setList(slide)
                } catch (error) {
                        console.log(error)
                }  
            }
            listTra();
    },[])
    console.log(list)
    const remove = async (id)=>{
            try {
                const {data} = await slideApi.remove(id)
                  if(data){
                    const {data:slide} = await slideApi.getAll()
                    setList(slide)
                  }
            } catch (error) {
                console.log(error) 
            }
    }
    return (
        <main className="tw-pt-3">
        <h3 className="tw-text-center tw-text-2xl tw-font-bold"> DANH SÁCH BANNER </h3>
            <div className="tw-text-right tw--mt-8 tw-mr-2 tw-text-sm" ><Link className="tw-p-1 tw-bg-blue-600 tw-text-white tw-rounded"  to="/admin/slide/add"> Thêm </Link> </div>
        <table className="tw-w-full tw-text-center  text-1xl tw-mt-8">
            <tbody className="tw-w-full tw-items-center">
                <tr className="tw-bg-gray-200 tw-uppercase tw-text-sm tw-leading-normal tw-ml-2">
                    <th className="tw-w-6 tw-pl-3"> STT</th>
                    <th className="tw-py-3 tw-px-6 tw-text-center">NAME</th>
                    <th className="tw-text-center">ẢNH </th>
                    <th className="tw-py-3 tw-px-6 tw-text-center">ACTIONS</th>
                </tr>
                <SlideItem list={list} onRemove={remove}/>
            </tbody>
        </table>
        
        </main> 
        
    )
}

export default SlideList


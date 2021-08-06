import React ,{useState , useEffect} from 'react'
import CategoryApi from '../../../api/categoryapi'

const SelectAllCate = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const listCate = async () => {
            const { data: cate } = await CategoryApi.getAll();
            setList(cate)
        }
        listCate()
    }, [])
    return (
        <>
            {list.map((item, index) =>
                     <option className="font-bold" key={index} value={item._id}>{item.name.toUpperCase()}</option>
            )}
              
        </>
    )
}

export default SelectAllCate

import React ,{ useState, useEffect} from 'react'
import trademarksApi from '../../../api/trademark'

const SelectAllTra = () => {
    const [list , setList] = useState([])
    useEffect(() => {
            const listTra = async ()=>{
                try {
                    const {data:trademarks} = await trademarksApi.getAll()
                    setList(trademarks)
                } catch (error) {
                        console.log(error)
                }
                
            }
            listTra();
    },[])
    return (
        <>
            {list.map((item, index) =>
                 <option className="font-bold" key={index} value={item._id}>{item.name.toUpperCase()}</option>
            )}          
        </>

    )
}

export default SelectAllTra

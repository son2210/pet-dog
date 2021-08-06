import React,{ useState, useEffect} from 'react'
import CategoryApi from '../../api/categoryapi';
import trademarksApi from '../../api/trademark';
const SaibarWeb = ({onChangeTra,onChangeCate,changePrice }) => {
    const [cate, setCate] = useState([])
    useEffect(() => {
        const listCate = async () => {
            const { data: category } = await CategoryApi.getAll();
            setCate(category)
        }
        listCate();
    }, [])
    const [trademark, setTrademark] = useState([])
    useEffect(() => {
        const list = async () => {
            const { data: tra } = await trademarksApi.getAll();
            setTrademark(tra)
        }
        list();
    }, [])
    return (
        <div className="saibar-web tw-w-1/6 ">
            <h5 className="tw-mb-2 tw-uppercase tw-font-bold tw-text-lg ">Thương hiệu </h5>
            <div className="border-1 tw-border-gray-400 tw-py-2 tw-mb-5 tw-pl-3 tw-rounded-xl">
                <ul className="tw-p-0">
                <li className="tw-uppercase tw-text-gray-700 tw-font-semibold tw-leading-8 tw-text-sm hover:tw-text-black">
                        <input type="checkbox" name="checkbox"  onChange={(e)=>onChangeTra(e)} value="" id="0" />
                        <label className="tw-pl-2" htmlFor="0">Tất cả </label>
                  </li>
                 {trademark.map((item, index)=>
                    <li key={index} className="tw-uppercase tw-text-gray-700 tw-font-semibold tw-leading-8 tw-text-sm hover:tw-text-black">
                        <input type="checkbox" name="checkbox"  onChange={(e)=>onChangeTra(e)} value={item._id} id={`thuonghieu${index+1}`} />
                        <label className="tw-pl-2" htmlFor={`thuonghieu${index+1}`}> {item.name}</label>
                  </li>
                )}
                </ul>
            </div>
            <hr/>
            <h5 className="tw-mb-2 tw-uppercase tw-font-bold tw-text-lg tw-mt-2">danh mục </h5>
            <div className="border-1 tw-border-gray-400 tw-py-2 tw-mb-5 tw-pl-3 tw-rounded-xl">
                <ul className="tw-p-0">
                 {cate.map((item, index)=>
                    <li key={index} className="tw-uppercase tw-text-gray-700 tw-font-semibold tw-leading-8 tw-text-sm hover:tw-text-black">
                        <input type="checkbox" name="checked" id={`category${index+1}`} />
                        <label className="tw-pl-2" onClick={()=>  onChangeCate(item._id)} htmlFor={`category${index+1}`}> {item.name}</label>
                  </li>
                )}
                </ul>
            </div>
            <hr/>
            <h5 className="tw-my-2 tw-uppercase tw-font-bold tw-text-lg"> Giá sản phẩm</h5>
            <div className="border-1 tw-border-gray-400 tw-pt-2 tw-pl-3 tw-rounded-xl">
                <span className="tw-font-semibold">Giá</span>
                <ul className="tw-pl-0">
                    <li className="tw-font-semibold tw-text-sm hover:tw-text-yellow-600 tw-leading-8 ">
                        <input type="checkbox" name id="th0" value="end=200000" onChange={(e)=>changePrice(e.target.value)}/>
                        <label className="tw-pl-2" htmlFor="th0"> Dưới 200.000 Đ</label>
                    </li>
                    <li className="tw-uppercase tw-font-semibold tw-text-sm hover:tw-text-yellow-600 tw-leading-8 ">
                        <input type="checkbox" name id="th1" value="start=200000&end=500000" onChange={(e)=>changePrice(e.target.value)}/>
                        <label className="tw-pl-2" htmlFor="th1"> 200.000 Đ ~ 500.000 Đ</label>
                    </li>
                    <li className="tw-uppercase tw-font-semibold tw-text-sm hover:tw-text-yellow-600 tw-leading-8 ">
                        <input type="checkbox" name id="th2" value="start=500000&end=1000000" onChange={(e)=>changePrice(e.target.value)} />
                        <label className="tw-pl-2" htmlFor="th2"> 500.000 Đ ~ 1.000.000 Đ</label>
                    </li>
                    <li className="tw-uppercase tw-font-semibold tw-text-sm hover:tw-text-yellow-600 tw-leading-8 ">
                        <input type="checkbox" name id="th3" value="start=1000000&end=2000000" onChange={(e)=>changePrice(e.target.value)} />
                        <label className="tw-pl-2" htmlFor="th3"> 1000.000 Đ ~ 2.000.000 Đ</label>
                    </li>
                    <li className="tw-uppercase tw-font-semibold tw-text-sm hover:tw-text-yellow-600 tw-leading-8 ">
                        <input type="checkbox" name id="th4" value="start=2000000&end=5000000" onChange={(e)=>changePrice(e.target.value)} />
                        <label className="tw-pl-2" htmlFor="th4"> 2.000.000 Đ ~ 5.000.000 Đ</label>
                    </li>
                    <li className="tw-uppercase tw-font-semibold tw-text-sm hover:tw-text-yellow-600 tw-leading-8 ">
                        <input type="checkbox" name id="th5" value="start=5000000&end=20000000"onChange={(e)=>changePrice(e.target.value)} />
                        <label className="tw-pl-2" htmlFor="th5"> 5.000.000 Đ ~ 20.000.000 Đ</label>
                    </li>
                    <li className="tw-font-semibold tw-text-sm hover:tw-text-yellow-600 tw-leading-8 ">
                        <input type="checkbox" name id="th6" value="start=20000000&end="onChange={(e)=>changePrice(e.target.value)} />
                        <label className="tw-pl-2" htmlFor="th6"> trên  20.000.000 Đ</label>
                    </li>
                  
                </ul>
            </div>
        </div>

    )
}

export default SaibarWeb

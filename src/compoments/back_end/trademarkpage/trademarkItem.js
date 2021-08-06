import React from 'react'
import {Link} from "react-router-dom"
const TrademarkItem = (props) => {
       const trademarks = props.data
       const remove = (id) =>{
        props.onRemove(id)
       }
    return (
        <>
            {trademarks.length >0 ?  trademarks.map((item, index) =>
                  <tr key={index} className="tw-border-b-4 tw-border-t-2 tw-py-10">
                           <th className="tw-py-3 tw-px-6 tw-text-center tw-pl-3">{index+1}</th>
                            <td className="tw-py-3 tw-px-6 tw-text-center  tw-font-bold"> {item.name.toUpperCase()}</td>
                            <td className="tw-flex tw-items-center tw-flex-row tw-justify-center">
                                 <img className="tw-w-14 tw-my-1 tw-h-14 tw-rounded-full" src={`http://localhost:2210/api/trademarks/readPhoto/${item._id}`} /></td>
                            <td className="tw-py-3 tw-px-6 tw-text-center">
                        <div className="tw-flex item-center tw-justify-center">
                            <button className="tw-w-8 tw-mr-2 tw-transform  hover:tw-scale-110 tw-text-green-600">
                                <Link to={`/admin/trademarks/${item._id}/edit`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>

                                </Link>
                            </button>
                            <button onClick={()=> remove(item._id)} className="tw-w-8 tw-mr-2 tw-transform  hover:tw-scale-110 tw-text-red-600 tw-outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </td>
                    </tr>
            ): ""}
        </>
    )
}

export default TrademarkItem

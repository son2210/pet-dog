import React, { useState } from "react"
import { getUser } from "../../localStorage/user";
const CartItem = ({ list, product }) => {
    const action = getUser();
    const [tien, setTien] = useState(0)
    let tongtien = 0
    return (
        <>
            {list ? list.map((item, index) => {
                if (item.idUser == action._id) {
                   
                    return (
                        <tr>
                            <td>{index + 1} </td>
                            <td>{product.map(element => {
                                if (element._id === item.idProduct) {
                                    return element.name
                                }
                            })} </td>
                            <td> <img className="tw-w-20 tw-my-1 tw-h-20 "
                                src={`http://localhost:2210/api/products/readPhoto/${item.idProduct}`} /></td>
                            <td> {item.quantity}</td>
                            <td>{product.map(element => {
                                if (element._id === item.idProduct) {
                                    return element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                }
                            })} </td>
                            <td>{product.map(element => {
                                if (element._id === item.idProduct) {
                                    tongtien +=(item.quantity*element.price)
                                    return (element.price * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                                }
                            })} </td>
                        </tr>
                    )
                }

            }) : ""}
            <tr><td> Tổng Tiền </td>
                  {(tongtien).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </tr>

        </>
    )
}
export default CartItem
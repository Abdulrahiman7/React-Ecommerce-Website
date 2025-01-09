import React from 'react'

const CartItem = (props) => {
    console.log(props.item);
  return (
    <tr>
        <td>{props.item.title}</td>
        <td>{props.item.price}</td>
        <td>{props.item.quantity}</td>
    </tr>
  )
}

export default CartItem
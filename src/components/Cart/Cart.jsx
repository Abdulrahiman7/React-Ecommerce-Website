import React, { useContext, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import CartItem from "./CartItem";
import "./Cart.css";
import CartContext from "../../store/Cart-context";

const Cart = (props) => {
    
  const {items}=useContext(CartContext);
    const totalPrice=items.reduce((acc, item)=> acc += (item.price * item.quantity),0);
  return (
    <Modal show={props.showModal} onHide={props.closeModal} dialogClassName="custom-modal">
      <Modal.Header closeButton />
      <Modal.Title className="text-center">Cart</Modal.Title>
      <Modal.Body>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            {
                items.map((item,index)=>{
                    return <CartItem key={index} item={item} />
                })
            }
          </thead>
        </Table>
      </Modal.Body>
      <Modal.Footer className="me-2">Total Price : {totalPrice}</Modal.Footer>
    </Modal>
  );
};

export default Cart;

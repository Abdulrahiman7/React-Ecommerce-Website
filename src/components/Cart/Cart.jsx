import React from "react";
import { Modal, Table } from "react-bootstrap";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

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
                cartElements.map((item,index)=>{
                    return <CartItem key={index} item={item} />
                })
            }
          </thead>
        </Table>
      </Modal.Body>
      <Modal.Footer className="me-2">Total Price</Modal.Footer>
    </Modal>
  );
};

export default Cart;


import React, { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import CartContext from "../../store/Cart-context";
import { Link } from "react-router-dom";


const Item = (props) => {
    const {addToCart}=useContext(CartContext);
    const addToCartHandler=()=>{
        addToCart({...props.item, quantity:1});
    }
  return (
    <Col xs={12} md={6} lg={6} sm>
      <Card className="mb-4">
      <Link to={`/store/${props.item.title}`}>
        <Card.Header>
          <h2>{props.item.title}</h2>
        </Card.Header>
        <Card.Body>
          <img src={props.item.imageUrl}></img>
        </Card.Body>
        </Link>
        <Card.Footer className="d-flex justify-content-between">
          <span>{props.item.price}</span>
          <Button className="btn btn-danger" onClick={addToCartHandler}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;

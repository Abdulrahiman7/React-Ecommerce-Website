import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductsContext from '../../store/Products-context';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../../store/Cart-context';
import AuthContext from '../../store/Auth-context';
import { useHistory } from 'react-router-dom';

const ItemPage = () => {
    const items=useContext(ProductsContext);
    const {productId}=useParams();
    
  
   const item= items.find((item)=>{
  // Log the title of each item
    return item.title === productId;
  });
   const {addToCart}=useContext(CartContext);
    const addToCartHandler=()=>{
        addToCart({...item, quantity:1});
    }
  return (
    <Card className="mb-4">
      <Card.Header>
        <h2>{item.title}</h2>
      </Card.Header>
      <Card.Body>
        <img src={item.imageUrl}></img>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <span>{item.price}</span>
        <Button className="btn btn-danger" onClick={addToCartHandler}>Add to Cart</Button>
      </Card.Footer>
    </Card>
  )
}

export default ItemPage
import React, { useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";
import ProductsContext from "../../store/Products-context";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/Auth-context";
const ItemsList = () => {
  const items=useContext(ProductsContext);
  const {isLoggedIn}=useContext(AuthContext);
    const history=useHistory();
    useEffect(()=>{
        if(!isLoggedIn) history.replace('/login');
    },[isLoggedIn])
  return (
    <Container>
      <Row>
        {
            items.map((product)=><Item key={product.title} item={product} />)
        }
        </Row>
    </Container>
  );
};

export default ItemsList;

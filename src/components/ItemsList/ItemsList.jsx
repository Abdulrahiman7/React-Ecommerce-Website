import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";
import ProductsContext from "../../store/Products-context";

const ItemsList = () => {
  const items=useContext(ProductsContext);
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

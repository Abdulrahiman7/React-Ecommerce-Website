
import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Item = (props) => {
  return (
    <Col xs={12} md={6} lg={6} sm>
      <Card className="mb-4">
        <Card.Header>
          <h2>{props.item.title}</h2>
        </Card.Header>
        <Card.Body>
          <img src={props.item.imageUrl}></img>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <span>{props.item.price}</span>
          <Button className="btn btn-danger">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;

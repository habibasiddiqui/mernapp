import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(user);

  return (
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item variant="primary" className="col-headers">
            Selected Product information
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Row>
              <Col className="col-headers">ID</Col>
              <Col>{product?._id}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Name</Col>
              <Col>{product?.name}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Description</Col>
              <Col>{product?.description}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Image</Col>
              <Col><img width={100} src={product?.image} /></Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
};

export default SingleProduct;

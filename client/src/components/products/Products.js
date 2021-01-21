import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';

function Products() {
  const [state, setstate] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
      axios.get('http://localhost:4000/api/products')
      .then((res) => {
        console.log(res.data.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(state)

  const handleDelete = (id) => {
    axios.delete('http://localhost:4000/api/products/'+ id)
    .then(
        (res) => {
          // res.json();
          setMsg('Product was deleted');
          console.log(msg)
      })
      .catch((err) => console.log(err));
    // window.location='/posts';
  }

  return (

    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item variant="primary">
            <Row className="col-headers">
              <Col>Name</Col>
              <Col>Description</Col>
              <Col>Image</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.name}</Col>
                <Col>{item.description}</Col>
                <Col><img width={100} src={item.image} /></Col>
                <Col>
                  <Button 
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/single-product/" + item._id}
                  >
                    View
                  </Button>
                </Col>
                <Col>
                  <Button 
                    variant="info"
                    size="sm"
                    onClick={()=>handleDelete(item._id)}
                    // as={Link}
                    // to={"/single-product/" + item._id}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))} 
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
}

export default Products;

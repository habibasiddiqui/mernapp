import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from 'axios';
import DeletePost from "./DeletePost";
import { useParams } from "react-router-dom";


function Posts() {
  const [state, setstate] = useState([]);
  // to show post was deleted
  const [deleted, setDeleted] = useState(false);
  const [msg, setMsg] = useState('');
  useEffect(() => {
      axios.get('http://localhost:4000/api/posts')
      .then((res) => {
        console.log(res.data.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  // console.log(state)

  const DelPost = (item_id) => {
  // // const { id } = useParams();

  axios.delete("http://localhost:4000/api/posts/" + item_id)
    .then(
      (res) => {
        res.json();
        setMsg('Post was deleted');
        // setDeleted(true);
        console.log(deleted)
        // setMsg('Post Deleted');
    })
    .catch((err) => console.log(err));
  window.location='/posts';

  //     useEffect(() => {
  //   axios.delete("http://localhost:4000/api/posts/" + item_id )
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  // }, [item_id]);

  }





  return (

    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          {/* {deleted ? <span>Post Deleted</span> : <span></span>} */}
          <span>{msg}</span>
          <ListGroup.Item variant="primary">
            <Row className="col-headers">
              <Col>Title</Col>
              <Col>Body</Col>
              <Col>Actions</Col>
            </Row>
          </ListGroup.Item>

          {state.map((item, ind) => (
            <ListGroup.Item key={ind} variant="light">
              <Row>
                <Col>{item.title}</Col>
                <Col>{item.body}</Col>
                <Col>
                  <Button 
                    variant="info"
                    size="sm"
                    as={Link}
                    to={"/single-post/" + item._id}
                  >
                    View
                  </Button>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <Button 
                    variant="info"
                    size="sm"
                    // as={Link}
                    // to={"/delete-post/" + item._id}
                    onClick={()=>DelPost(item._id)}
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

export default Posts;

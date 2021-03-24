import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button, Alert, Container } from "react-bootstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import PostHome from "./posts/PostHome";

const Home = () => {
  const [state, setstate] = useState([]);

  // to change for useefffect whenever deletes
  const [reload, setReload] = useState(false);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/api/posts")
      .then((res) => {
        console.log(res.data.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
    setMsg("");
  }, [reload]);

  const [show, setShow] = useState(true);

  // /////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {/* <PostHome /> */}

      <Grid container spacing={1}>
        <Grid className="post-div" item sm={12} md={8} lg={8}>
          {state.map((item, ind) => (
            <Card key={ind} className="text-left single-post-div">
              <Card.Header className="title">
                <Card.Title>{item.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Grid container spacing={3}>
                  <Grid item xs={4} lg={4} className="post-img-div">
                    <img className="post-img" src={item.image} />
                  </Grid>
                  <Grid item xs={8} lg={8}>
                    <Card.Text>{item.body.slice(0, 100)}</Card.Text>
                  </Grid>
                </Grid>

                <Button
                  className="submit"
                  as={Link}
                  to={"/single-post-home/" + item._id}
                >
                  Continue reading
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Posted date: dd-mm-yy
              </Card.Footer>
            </Card>
          ))}
        </Grid>

        <Grid className="other-div" item sm={12} md={4} lg={4}>
          Other section
        </Grid>
      </Grid>
 </div>
  );
};

export default Home;

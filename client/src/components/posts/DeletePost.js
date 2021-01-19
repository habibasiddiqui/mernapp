import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DeletePost = () => {
  const { id } = useParams();

//   const [post, setPost] = useState(null);
  

    // axios.delete("http://localhost:4000/api/posts/" + id, { params: {id: id} })
    //   .then((res) => res.json())
    //   // .then(res => console.log(res))
    //   .catch((err) => console.log(err));
  
  
    useEffect(() => {
      axios.delete("http://localhost:4000/api/posts/" + id, { params: {id: id} } )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }, [id]);

    window.location='/posts';
  
  



  return (
      <div>
        Post deleted
      </div>
   
  );
};

export default DeletePost;

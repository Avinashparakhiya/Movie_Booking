import React from "react";
import { Spinner } from "react-bootstrap";
import './Loader.css'

const Loader = () => {
  return (
    <center>
      <Spinner animation="grow" variant="grow" style={{width:'250px',height:'250px',marginTop:'100px'}} />
  </center>
  )
};

export default Loader;
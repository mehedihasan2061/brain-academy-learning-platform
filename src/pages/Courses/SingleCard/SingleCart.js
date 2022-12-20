import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCart = ({course}) => {
    const {name,id,thumbnail,regularPrice,mainPrice}= course
    return (
        <Col className='my-2' md="6">
           <Card >
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title className='fw-bold'>{name}</Card.Title>
        <h4 className=''>
            <span className='m-3'>{mainPrice} ৳</span>
            <del className='m-3 text-muted'>{regularPrice} ৳</del>
            </h4>
     
        
       <Link to={`/courses/${id}`}> <button className='mainBtn'>See Details information</button></Link>
      </Card.Body>
    </Card>
        </Col>
    );
};

export default SingleCart;
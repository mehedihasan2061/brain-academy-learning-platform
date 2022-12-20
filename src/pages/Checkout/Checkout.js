import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Assets/Hooks/UseTitle';

const Checkout = () => {
    const detailsData = useLoaderData()
    const {thumbnail,name,details,mainPrice} = detailsData
   UseTitle('checkout')
    return (
        <div>
           <Row>
            <Col md="6">
            <img className='img-fluid' src={thumbnail} alt="" />
            <h3 className='mx-5 p-2'> <strong> {name}</strong></h3>
            <p className='mx-5 p-2'>{details}</p>
            <h3  className='mx-5 p-2'><strong>price : {mainPrice}</strong> ৳</h3>
            </Col>
            <Col md="6">

            <Container
      className="py-5"
      fluid
      style={{
        background:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <Row className=" d-flex justify-content-center">
        <Col md="10"  >
          <Card className="rounded-3">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h3>Settings</h3>
                <h6>Payment</h6>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt='mastercard'
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <Form.Control
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                      value="**** **** **** 3193"
                    />
                  </div>
                </div>
               
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                alt='visa' />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <Form.Control
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      value="**** **** **** 4296"
                    />
                  </div>
                </div>
               
              </div>
              <p className="fw-bold mb-4">Add new card:</p>
              <Form.Control
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value="Anna Doe"
              />
              <Row className="my-4">
                <Col size="7">
                  <Form.Control
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    value="1234 5678 1234 5678"
                  />
                </Col>
                <Col size="3">
                  <Form.Control
                    label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </Col>
                <Col size="2">
                  <Form.Control
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </Col>
              </Row>
              <div className='d-flex flex-column'>
              <button className='mainBtn '>   Pay Now </button>
              </div>
              
              
            
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

            </Col>
           </Row>
        </div>
    );
};

export default Checkout;
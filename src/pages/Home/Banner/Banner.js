import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie'
import banner from './../../../Assets/images/herobanner.json'
import './Banner.css'

const Banner = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: banner,
   
  };


    return (
        <section id='banner' >
         <Container>
         <Row >
            <Col  className="d-flex align-items-center " lg="6">
<div >
<h1>Envesting in Knowlwdge and <span className='title'>Your Future</span></h1>
<p>With the helping of E-learning,Create Your own path and drive your skill in your own achive</p>

<button  className="mainBtn"><Link to='/courses'>Enroll Now  <FaArrowRight/> </Link></button>
</div>

            </Col>
            <Col lg="6" className=''>
              <div  className="d-flex align-items-center">

              <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
           
              </div>
            </Col>
          </Row>
         </Container>
        </section>
    );
};

export default Banner;
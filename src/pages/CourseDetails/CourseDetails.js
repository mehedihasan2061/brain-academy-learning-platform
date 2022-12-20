import React, { useRef } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import UseTitle from '../../Assets/Hooks/UseTitle';
import './CourseDetails.css'




const CourseDetails = () => {

    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content:()=> componentRef.current,
        documentTitle:'emp-data',
        
    })

    

    const courseDetails = useLoaderData()
    const {name,thumbnail,course_description,details,id}= courseDetails
    const {duration,Certificate,topics,instructor,support}= course_description
    const {phone,email}= support

    UseTitle(name)
    return (
        <div ref={componentRef} style={{width:'100%',height:Window.innerHeight}} className='mt-5'>
          <Row>
            <Col md="5">
           
                <img className='img-fluid' src={thumbnail} alt={name} />
                <div className="support my-5">
                <h5> For more Details contact us <a href={`mailto:${email}`}>{email}</a> </h5>
                <h5><strong>Emmergency Support :</strong><a href={`tel:${phone}`}>{phone}</a></h5>
                </div>
               <div className="d-flex flex-column">
              <Link to={`/checkout/${id}`}>
              <button className='mainBtn'>Get Premium Access</button>
              <button onClick={handlePrint} className='mainBtn mx-2'>Print Details</button>
              </Link>
              <div>
   
 
</div>
               </div>
            </Col>
            <Col md="7">
                <h2>{name}</h2>
                <h4 className='my-4'><strong>Instructor</strong>:{instructor}</h4>
                <Card className='py-5 px-2  m-1'>
                    <p>{details}</p>
                    <div className='learning-topic'>
                        <h2 className='fw-semibold'>What you will Learn To This Course?</h2>
                        <ul className='my-3'>
                        {
                            topics.map(topic=> <li
                                key={topic} 
                                className='fw-semibold'>{topic}</li>)
                        }
                        </ul>
                    </div>
                   <h6><span  className="fw-bold">Course duration</span> : {duration}</h6>
                   <h6><span  className="fw-bold">Certificate</span> : {Certificate}</h6>
                </Card>
                
            </Col>
          </Row>
        </div>
    );
};

export default CourseDetails;
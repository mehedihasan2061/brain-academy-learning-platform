import React, { useContext } from "react";
import {  Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { AuthContext } from "../../Assets/Contexts/AuthProvider";
import "./Login.css";


const Login = () => {
  const {loginUserWithEmailAndPass}= useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
 
 

  const handleLogin = (e)=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    
    loginUserWithEmailAndPass(email,password)
    .then(result=>{
      toast.success("login successfull")
      navigate(from, {replace: true});
    })
    .catch(error =>{
     
      toast.error(error.message)
     

    })

  }


 
  return (
    <div className="form-style animation">
       
      <Form onSubmit={handleLogin} className="p-rel form-login">
      <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <span id="animatedSpan"></span>
        <div className="form-content">
          <h2 className="text-center my-3">Login</h2>
          <div className="fields">
            <Form.Group className="m-3 py-2" controlId="formBasicEmail">
              
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group >
            <Form.Group className="m-3 py-2" >
             
              <Form.Control type="password" name="password" placeholder="Enter Password" />
            </Form.Group>
         <div className="d-flex align-items-center justify-content-center pt-3">
         <button className=" mainBtn w-100 mx-3 text-center" type="submit">
        Submit
      </button>
     
         </div >
      <div className="login-form-recovery">
      <Form.Group>
        <p className="text-center pt-3 pb-0 mb-0 ">Forget Password? <Link className="text-main" to="/">Recovery Now</Link></p>
        <p className="text-center ">New user? <Link className="text-main" to="/signup">Register now</Link></p>
       </Form.Group>
      </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;

import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useLocation,Navigate  } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
const PrivetRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <div className='text-center'>
             <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
   
};

export default PrivetRoute;
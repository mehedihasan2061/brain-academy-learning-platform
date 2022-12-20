import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
// Create a context

export const AuthContext = createContext()



const AuthProvider = ({children}) => {
    const [id,setId]= useState('')
    const [loading,setLoading]= useState(true)

    const [user,setUser]= useState(null)
   

    
// create an account with email and password

const createUserWithEmail = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// login with email and 

const loginUserWithEmailAndPass = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// registration with email and password

// signinWithpopup

const signInWithProvider = (provider)=>{
    return signInWithPopup(auth,provider)
}

const logOut = () => {
    
    return signOut(auth);
}






// state observer
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        


            setUser(currentUser);
        
      setLoading(false)
    });

    return () => {
        unsubscribe();
        
    }

}, [])





    const authInfo = {createUserWithEmail,loginUserWithEmailAndPass,signInWithProvider,user,logOut,loading,id,setId}

    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
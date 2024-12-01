import React, { useState } from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/firebaseconfig';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()

  const registerUser = (event) => {
    console.log ('chal raha hai')
    console.log (email)
    console.log (password)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log (user)
    navigate ('/')
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log (errorMessage)
    });

    setEmail('')
    setPassword('')
  }
  
  
  return (
    <>
      <Box className='d-flex flex-column justify-content-center align-items-center py-5 gap-5 mt-5'>
      <Typography variant='h3'>Register Page</Typography>
      <TextField id="outlined-basic-1" label="Email" variant="outlined" className='w-50' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic-2" label="Password" variant="outlined" type='password' className='w-50' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button variant="contained" sx={{width:'150px'}} onClick={registerUser}>Register</Button>
      </Box>
    </>
  )
}

export default Register

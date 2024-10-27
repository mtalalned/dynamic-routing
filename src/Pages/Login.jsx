import React, { useState } from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';  
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/firebaseconfig';


const Login = () => {
  
  const navigate = useNavigate()
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const GoToProducts = () => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    navigate('products')
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    });
    
    setEmail('')
    setPassword('')
  }

  const GoToRegister = ()=>{
    navigate ('register')
  }
  
  return (
    <Box className='d-flex flex-column justify-content-center align-items-center py-5 gap-5'>
      <Typography variant='h3'>Login Page</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" className='w-50' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" className='w-50' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button variant="contained" sx={{width:'150px'}} onClick={GoToProducts}>SIGN IN</Button>
      <Button variant="contained" sx={{width:'150px'}} onClick={GoToRegister}>SIGN UP</Button>
    </Box>
  )
}

export default Login
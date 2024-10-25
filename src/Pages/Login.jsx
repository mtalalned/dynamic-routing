import React from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';  
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const navigate = useNavigate()

  const GoToProducts = () => {
    navigate('products')
  }
  
  return (
    <Box className='d-flex flex-column justify-content-center align-items-center py-5 gap-5'>
      <Typography variant='h3'>Login Page</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" className='w-50'/>
      <TextField id="outlined-basic" label="Password" variant="outlined" className='w-50' type='password'/>
      <Button variant="contained" sx={{width:'150px'}} onClick={GoToProducts}>SIGN IN</Button>
    </Box>
  )
}

export default Login
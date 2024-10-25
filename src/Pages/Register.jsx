import React from 'react'
import { Typography, TextField, Button, Box } from '@mui/material';

const Register = () => {
  return (
    <div>
      <Box className='d-flex flex-column justify-content-center align-items-center py-5 gap-5'>
      <Typography variant='h3'>Register Page</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" className='w-50'/>
      <TextField id="outlined-basic" label="Password" variant="outlined" type='password' className='w-50'/>
      <Button variant="contained" sx={{width:'150px'}}>Register</Button>
      </Box>
    </div>
  )
}

export default Register

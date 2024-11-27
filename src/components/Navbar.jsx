import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const pages = ['login', 'register', 'products'];

function ResponsiveAppBar() {

  const navigate = useNavigate()

  const handleCloseNavMenu = (page) => {
    page === 'login' ? navigate('/') : navigate(page)

  };

  const selector = useSelector(state => state.cart.cart)

  const GoToCartPage = () => {
    if (selector.length > 0){
      navigate ('cart')
    } else {
      navigate ('products')
    }

  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0  , cursor: 'pointer'}} onClick={GoToCartPage}>
            <ShoppingCartIcon />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography className='ms-2' >
              {selector.length}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

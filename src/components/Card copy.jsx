import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addQuantityToItem ,deleteFromCart,lessQuantityToItem} from '../Config/redux/reducers/CartSlice';

export default function MultiActionSingleAreaCard({title , description , src , price, wholeitem}) {

  const dispatch = useDispatch()

  const addQuantity = (items) => {
    dispatch(addQuantityToItem(items))
  }

  const lessQuantity = (items) => {
    dispatch(lessQuantityToItem(items))
  }

  const deleteItem = (items) => {
    dispatch(deleteFromCart(items))
  }

  return (
    <Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rs. {price}
          </Typography>
          <Box className='d-flex justify-content-start align-items-center gap-2'>
              <Button variant="contained" sx={{width:'30px' , height: '30px' , minWidth: '0' }} onClick={()=>addQuantity(wholeitem)}>+</Button>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {wholeitem.quantity}
              </Typography>
              <Button variant="contained" sx={{width:'30px' , height: '30px' , minWidth: '0'}} onClick={()=>lessQuantity(wholeitem)}>-</Button>
          </Box>
          <Box className='fs-5'>
            Price of this Item: {(wholeitem.quantity * price).toFixed(2)}
          </Box>
          <Button variant="contained"  onClick={()=>deleteItem(wholeitem)}>Remove From Cart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

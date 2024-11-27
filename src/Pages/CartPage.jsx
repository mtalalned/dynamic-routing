import React from 'react'
import { useSelector } from 'react-redux'
import MultiActionSingleAreaCard from '../components/Card copy'
import { Box , Typography} from '@mui/material'

const CartPage = () => {
  
  const selector = useSelector(state => state.cart.cart)

    return (
    <>
    <Typography variant='h4' className='text-center mt-4'>
        Total Price: Rs. {(selector.reduce ((acc , CVal)=> {
            return acc + CVal.price * CVal.quantity
        } , 0)).toFixed(2)}
    </Typography>
    <Box className='d-flex justify-content-center gap-4 p-5'>
      {selector.map ((item , index) => {
        return <MultiActionSingleAreaCard title = {item.title} price={item.price} description={item.description} src={item.thumbnail} wholeitem={item}/>
      })}
    </Box>
    </>
  )
}

export default CartPage

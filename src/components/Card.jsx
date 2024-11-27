import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({title , description , src , price , func , func2 , item}) {
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
            {title.length <= 20 ? title : title.slice( 0 , 18)}..
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description.slice(0 , 75)}....
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rs. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" onClick={func}>Show More</Button>
      <Button variant="contained" sx={{width:'150px'}} onClick={()=>func2(item)}>Add to Cart</Button>

      </CardActions>
    </Card>
  );
}

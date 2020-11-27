/* eslint-disable no-unused-vars */

import React from 'react' 

import LoadingCool from './../../Spinner_Cool/SpinnerCool'

import { 

  Card,

  CardActionArea, 

  CardContent, 

  Typography,  
  CardMedia

} from '@material-ui/core';  

import PropTypes from 'prop-types'; 

import './SliderItems.scss' 



const SliderItems=({item})=>{ 

  const {maPhim, tenPhim, hinhAnh} =  item;   
 

  return(

    <Card className='imgCard' >

      <CardActionArea>

       
        <CardContent className='cardBody'>

          {
            hinhAnh ? (
              <CardMedia

                alt='movie_Image'

                className='img'

                image={hinhAnh}

              />
            ) : <LoadingCool/>
          }  
          <Typography
            className='cardTitle'
            component='h2'
            gutterBottom
            variant='h5'
          >

            {tenPhim}

          </Typography>

          <Typography
            className='cardText'
            component='p'
            variant='body2'
          >

            {maPhim}

          </Typography>

        </CardContent>

      </CardActionArea> 
      
    </Card>

  )

} 

SliderItems.propTypes={

  tenPhim: PropTypes.string,

  moTa: PropTypes.string,

  hinhAnh: PropTypes.string,

}

export default SliderItems;  


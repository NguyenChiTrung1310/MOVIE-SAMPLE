/* eslint-disable react/sort-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom'
import './Carousel.scss';
import { MOVIE_DETAIL_PAGE } from '../../../constants/constant';

const CarouselBanner = ({ item }) => {
  const history = useHistory();

  const {
    tenPhim = 'Harry Potter',
    moTa = 'a boy is given the ability to become an adult superhero in times of need with a single magic word',
    ngayKhoiChieu = 'By: david f. sandberg',
    danhGia = 'NOT FOUND',
    hinhAnh = 'NOT FOUND',
    maPhim  = 'NOT FOUND',
  } = item;

  const detailLink=()=>{ 
    history.push(`${MOVIE_DETAIL_PAGE}/${maPhim}`);
  }
  return (
    <Paper
      className='banner'
      elevation={10}
    >
      <div className='titles'>
        <Typography
          className='style name'
          component='h3'
          variant='h3'
        >
          {tenPhim}
        </Typography>
        <Typography
          className='style description'
          component='h6'
          variant='h6'
        >
          {moTa}
        </Typography>
        <Typography
          className='style author'
          component='h4'
          variant='h4'
        >
          {ngayKhoiChieu}
        </Typography>
        <Typography
          className='style author'
          component='h4'
          variant='h4'
        >
          {danhGia}
        </Typography>
        <Button
          className='style detail-btn'
          onClick={detailLink}
        >Detail</Button>
      </div>
      <div className='overload' />
      <img
        alt=''
        className='banner-img'
        src={hinhAnh}
      />
    </Paper>
  )
} 
CarouselBanner.propTypes = {
  tenPhim: PropTypes.string,
  moTa: PropTypes.string,
  ngayKhoiChieu: PropTypes.string,
  danhGia: PropTypes.string,
  hinhAnh: PropTypes.string,
};

export default CarouselBanner;



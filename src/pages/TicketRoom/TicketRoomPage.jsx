import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getTicketRoomsAction } from '../../redux/actions/bookingAction';
import { Button, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { createAction } from '../../redux/actions';
import { CLEAR_DETAIL_MOVIE, SEAT_LIST } from '../../constants/constant';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import SeatList from './SeatList/SeatList';

import './TicketRoomPage.scss'
import OrderTicket from './Order/Order';


const TicketRoomPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketRoomsAction(props.match.params.maLichChieu));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props])

  const ticketRoom = useSelector(state => state.ticketRoom.initialTicketRoom);
  const{thongTinPhim, danhSachGhe} = ticketRoom;

  useEffect(() => {
    dispatch(createAction(SEAT_LIST ,danhSachGhe));
  }, [dispatch, danhSachGhe])


  return (
    <Container className='movie-schedule-page'>
      {
        ticketRoom ? (
          <Grid>
            {
              thongTinPhim ? (
                <Grid>
                  <Grid className='movie-detail'>
                    <Grid className='movie-trailer'>
                      {
                        thongTinPhim.hinhAnh ?  
                          <CardMedia
                            className='movie-img'
                            image={thongTinPhim.hinhAnh}
                          />
                          : <LoadingCool />
                      }         
                    </Grid>
                    {
                      thongTinPhim.tenPhim ? (
                        <Grid className='movie-information'>
                          <Grid>                 
                            <Typography 
                              component={'h1'}
                              style={{fontWeight: '400', color: '#e61a27', textAlign: 'left'}}
                              variant='h3'
                            >
                              {thongTinPhim.tenPhim}
                            </Typography>               
                          </Grid>

                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                  Theater:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px'}}
                                variant='h6'
                              >
                                {thongTinPhim.tenCumRap}
                              </Typography>
                            </Typography>                  
                          </Grid>

                          <Grid>                 
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Address:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px'}}
                                variant='h6'
                              >
                                {thongTinPhim.diaChi}
                              </Typography>
                            </Typography>         
                          </Grid>

                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Screening room:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.tenRap}
                              </Typography>
                            </Typography>                  
                          </Grid>        
                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Date:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.ngayChieu}
                              </Typography>
                            </Typography>                  
                          </Grid>   
                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Time start:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.gioChieu}
                              </Typography>
                            </Typography>                  
                          </Grid>  

                          <Grid className='ticket'>
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600', textAlign: 'center', color: '#e61a27', fontSize: '30px'}}
                              variant='h5'
                            >
                            Your Order
                            </Typography>

                            <OrderTicket />

                            <Button className='style detail-btn'>Checkout</Button>
                          </Grid>                
                        </Grid> 
                      ) : null
                    }   
                  </Grid> 
                  <Grid className='screen'>Screen</Grid>
                  <Grid className='schedule-by-theater'>
                    {
                      danhSachGhe ? <SeatList seatList={danhSachGhe}/>
                        : <LoadingCool />
                    }
              
                  </Grid>
                </Grid>
              ) : <LoadingCool />
            }
                
          </Grid>
        ) : <LoadingCool />
      }
    </Container>
  )
}

TicketRoomPage.propTypes={
  match: PropTypes.object,
  params: PropTypes.object,
}

export default TicketRoomPage

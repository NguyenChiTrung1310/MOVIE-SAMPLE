import React from 'react'
import { Link } from 'react-router-dom';
import { Divider, Grid } from '@material-ui/core'
import PropTypes from 'prop-types';
import { TICKET_ROOM_PAGE } from '../../../../constants/constant';

import './Schedule.scss'

const Schedule = ({schedule}) => {

  return (
    <Grid className='schedule'>
      {
        schedule.map((item, index) => {
          const {tenRap, ngayChieuGioChieu, maLichChieu} = item;
         
          return (
            <Link
              className='schedule-item'
              key={index}
              to={`${TICKET_ROOM_PAGE}/${maLichChieu}`}
            >
              <Grid className='cinema-name'>
                {tenRap}
              </Grid>
              <Divider className='devide'/>
              <Grid
                className='schedule-detail'
              >
                {ngayChieuGioChieu}
              </Grid>
            </Link>
          )
        })
      }
    </Grid>
  )
}

Schedule.propTypes = {
  schedule: PropTypes.array,
};
    

export default Schedule

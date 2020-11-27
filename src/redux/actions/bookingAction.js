import { createAction } from '.';
import { GetTicketRoomService } from '../../services';
import {FETCH_TICKET_ROOM} from '../../constants/constant';

export const getTicketRoomsAction = (id) => {
  return (dispatch) => {
    GetTicketRoomService(id)
      .then(res => {
        const {data} = res;
        dispatch(createAction(FETCH_TICKET_ROOM, data))
      })
      .catch(err => {
        console.log(err);
      })
  }
}
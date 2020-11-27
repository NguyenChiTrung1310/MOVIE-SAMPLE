import request from '../configs/request';
import { 
  GET_TICKET_ROOM_API
} from './api';

export async function GetTicketRoomService (id) {
  return (
    request(
      GET_TICKET_ROOM_API + `${id}`,
      'GET'
    )
  )
}
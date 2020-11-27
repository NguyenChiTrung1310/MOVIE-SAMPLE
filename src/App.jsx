/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {LoginPage, RegisterPage, ErrorPage, HomePage, CinemaPage, ContactPage, ProfilePage, AdminPage, MovieDetailPage} from './pages';
import { Route, Switch} from 'react-router-dom';  
import {
  LOGIN_PAGE, 
  REGISTER_PAGE, 
  HOME_PAGE, 
  NEWS_PAGE, 
  CONTACT_PAGE, 
  ADMIN_PAGE, 
  MOVIE_SCHEDULE_PAGE,
  LOGIN_SUCCESS, 
  LOCAL_STORAGE_CREDENTIALS_KEY, 
  PROFILE_PAGE, 
  USER_PROFILE, 
  LOCAL_STORAGE_PROFILE_KEY, 
  TICKET_ROOM_PAGE,
  MOVIE_DETAIL_PAGE
} from './constants/constant';
import AppBar from './components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { createAction } from './redux/actions';
import { getDataFromLocalStorage } from './utils/LocalStorage/LocalStorage';
import { toast } from 'react-toastify';

import './App.scss';
import MovieSchedulePage from './pages/MovieSchedule/MovieSchedule';
import TicketRoomPage from './pages/TicketRoom/TicketRoomPage';

toast.configure({
  autoClose: 2000,
});
function App() {
  const dispatch = useDispatch();

  const getCredentialsFromLocal = () => {
    const credentialsStr = getDataFromLocalStorage(LOCAL_STORAGE_CREDENTIALS_KEY);
    if(credentialsStr){
      dispatch(createAction(LOGIN_SUCCESS, JSON.parse(credentialsStr)))
    }
  }

  const getProfileFromLocal = () => {
    const profileStr = getDataFromLocalStorage(LOCAL_STORAGE_PROFILE_KEY)
    if(profileStr){
      dispatch(createAction(USER_PROFILE, JSON.parse(profileStr)))
    }
  }

  useEffect(() => {
    getCredentialsFromLocal()
  });

  useEffect(() => {
    getProfileFromLocal()
  });

  return (
    <div className='App'>
      <AppBar />
      <Switch> 
        
        <Route
          component={LoginPage}
          exact
          path={LOGIN_PAGE}
        />
        <Route
          component={RegisterPage}
          exact
          path={REGISTER_PAGE}
        />
        <Route
          component={HomePage}
          exact
          path={HOME_PAGE}
        />
        <Route
          component={CinemaPage}
          exact
          path={NEWS_PAGE}
        />
        <Route
          component={ContactPage}
          exact
          path={CONTACT_PAGE}
        />
        <Route 
          component={ProfilePage}
          exact
          path={PROFILE_PAGE}
        />
        <Route 
          component={AdminPage}
          exact
          path={ADMIN_PAGE}
        />
        <Route 
          component={MovieSchedulePage}
          exact
          path={`${MOVIE_SCHEDULE_PAGE}/:maPhimId`}
        />
        <Route 
          component={TicketRoomPage}
          exact
          path={`${TICKET_ROOM_PAGE}/:maLichChieu`}
        />
        <Route 
          component={MovieDetailPage}
          exact
          path={`${MOVIE_DETAIL_PAGE}/:maPhimId`}
        />
        <Route
          component={ErrorPage}
        />
      </Switch>
    </div>
  );
}

export default App;

import axios from 'axios';
import {getToken} from '../../utils/token';
import {logout, refreshToken} from '../services/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authToken } from '../redux/slice/authSlice';
import store from '../redux/store';

const instance = axios.create({
  baseURL: 'https://devapi.totalrecallsafety.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
  timeoutErrorMessage: 'Request Timed Out',
});

instance.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  error => {
    Promise.reject(error);
  },
);



instance.interceptors.response.use(
  response => {
    return response;
    
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest.url !== 'login/' && originalRequest.url !== "signup/") {
      const userRefreshToken = await AsyncStorage.getItem('RefreshToken');
      try {
        const resp = await refreshToken(userRefreshToken);
      const access_token = resp.data.access;
      await AsyncStorage.setItem('Token', access_token);
      store.dispatch(authToken(access_token));
        instance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${access_token}`;
      } catch (error) {
        await logout();
        await AsyncStorage.clear()
      }
      return instance(error.config);
    }
   

    return Promise.reject(error);
  },
);

export default instance;

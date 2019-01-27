import axios from 'axios';
import { setAuthorizationToken } from '../utils';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser() {
  return {
    type: SET_CURRENT_USER
  };
}

export function LoggedIn(payload) {
  return async dispatch => {
    const result = await axios.post(
      'http://localhost:5000/api/user/login',
      payload
    );
    if (result) {
      const token = result.data.token;
      console.log(token);
      localStorage.setItem('JWToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(token));
    }
  };
}

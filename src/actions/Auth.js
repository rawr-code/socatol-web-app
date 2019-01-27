import API from '../API';
import { setAuthorizationToken } from '../utils';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser() {
  return {
    type: SET_CURRENT_USER
  };
}

export function LoggedIn(payload) {
  return async dispatch => {
    const result = await API.post('user/login', payload);
    if (result) {
      const token = result.data.token;
      console.log(token);
      localStorage.setItem('JWToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(token));
    }
  };
}

import API from '../../API';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export function setCurrentUser(payload) {
  return {
    type: SET_CURRENT_USER,
    payload
  };
}

export function LoggedIn(payload) {
  return async dispatch => {
    const result = await API.post('user/login', payload);
    if (result) {
      const token = result.data.token;
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(token));
    }
  };
}

export function Logout() {
  return {
    type: LOGOUT
  };
}

export const logoutUser = history => dispatch => {
  // localStorage.removeItem('jwtToken');
  // setAuthToken(false);
  // dispatch(setCurrentUser({}));
  // history.push('/login');
};

import { loginAPI } from '../../api/auth';
import { loginStart, loginSuccess, loginFailure } from './authSlice';

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const data = await loginAPI(credentials);
    localStorage.setItem('token', data.token);
    dispatch(loginSuccess({ user: data, token: data.token }));
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
};

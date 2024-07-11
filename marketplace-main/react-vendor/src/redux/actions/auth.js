import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants/actions';

export const { login, refreshToken, logout } = createActions({
  [ActionTypes.LOGIN]: (email, password) => ({ email, password }),
  [ActionTypes.REFRESH_TOKEN]: () => ({}),
  [ActionTypes.LOGOUT]: () => ({})
});

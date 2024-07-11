import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from '../constants/actions';
import { STATUS } from '../constants';
import { parseError } from '../../services/client';

export const userState = {
  isAuthenticated: false,
  status: STATUS.IDLE,
  authParams: {},
  userInfo: {},
  message: '',
  refreshStatus: STATUS.RUNNING,
  logoutStatus: STATUS.IDLE
};

const authActions = {
  auth: handleActions(
    {
      [ActionTypes.LOGIN]: (state, { payload }) =>
        immutable(state, {
          userInfo: { $set: payload },
          status: { $set: STATUS.RUNNING }
        }),
      [ActionTypes.LOGIN_SUCCESS]: (state, { payload }) =>
        immutable(state, {
          isAuthenticated: { $set: true },
          userInfo: { $set: payload },
          status: { $set: STATUS.SUCCESS }
        }),
      [ActionTypes.LOGIN_FAILURE]: (state, { payload }) =>
        immutable(state, {
          isAuthenticated: { $set: false },
          message: { $set: parseError(payload) },
          status: { $set: STATUS.ERROR }
        }),

      [ActionTypes.REFRESH_TOKEN]: (state) =>
        immutable(state, {
          refreshStatus: { $set: STATUS.RUNNING }
        }),
      [ActionTypes.REFRESH_TOKEN_SUCCESS]: (state) =>
        immutable(state, {
          refreshStatus: { $set: STATUS.SUCCESS }
        }),
      [ActionTypes.REFRESH_TOKEN_FAILURE]: (state) =>
        immutable(state, {
          refreshStatus: { $set: STATUS.ERROR }
        }),

      [ActionTypes.LOGOUT]: (state) =>
        immutable(state, {
          logoutStatus: { $set: STATUS.IDLE }
        }),
      [ActionTypes.LOGOUT_SUCCESS]: (state) =>
        immutable(state, {
          logoutStatus: { $set: STATUS.SUCCESS },
          isAuthenticated: { $set: false },
          userInfo: { $set: {} },
        }),
      [ActionTypes.LOGOUT_FAILURE]: (state) =>
        immutable(state, {
          logoutStatus: { $set: STATUS.ERROR }
        })
    },
    userState
  )
};

export default authActions;

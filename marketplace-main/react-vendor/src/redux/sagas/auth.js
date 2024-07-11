import { all, put, call, takeLatest } from 'redux-saga/effects';

import { deleteCookie, getCookie, setCookie } from '../../services/cookie';
import { request } from '../../services/client';
import { ActionTypes } from '../constants/actions';
import { APIEndpoints } from '../constants';

/**
 * Login
 */
export function* login(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(request, APIEndpoints.LOGIN, {
      method: 'POST',
      payload: { email, password }
    });
    yield setCookie('auth_token_admin', response.access_token);
    yield setCookie('access_token_expiry', response.valid_till);
    yield setCookie('user_details', JSON.stringify(response));
    yield put({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: response
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.LOGIN_FAILURE,
      payload: err.message
    });
  }
}

export function* refreshToken() {
  try {
    const accessTokenExpiry = parseInt(getCookie('access_token_expiry'), 10);
    const userDetails = JSON.parse(getCookie('user_details'));
    const now = new Date().getTime();
    if (accessTokenExpiry > now) {
      yield put({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: userDetails
      });
      yield put({
        type: ActionTypes.REFRESH_TOKEN_SUCCESS
      });
    }
  } catch (err) {
    /* istanbul ignore next */
    yield deleteCookie('auth_token_admin');
    yield deleteCookie('access_token_expiry');
    yield deleteCookie('user_details');
    yield put({
      type: ActionTypes.REFRESH_TOKEN_FAILURE
    });
  }
}

export function* logout() {
  try {
    // const accessToken = getCookie('auth_token_admin');
    // if (accessToken) {
    //   yield call(request, APIEndpoints.LOGOUT, {
    //     method: 'POST',
    //     payload: {}
    //   });
    // }
    yield deleteCookie('auth_token_admin');
    yield deleteCookie('access_token_expiry');
    yield deleteCookie('user_details');
    yield put({
      type: ActionTypes.LOGOUT_SUCCESS
    });
  } catch (err) {
    /* istanbul ignore next */
    yield deleteCookie('auth_token_admin');
    yield deleteCookie('access_token_expiry');
    yield put({
      type: ActionTypes.LOGOUT_FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.LOGIN, login),
    takeLatest(ActionTypes.REFRESH_TOKEN, refreshToken),
    takeLatest(ActionTypes.LOGOUT, logout)
  ]);
}

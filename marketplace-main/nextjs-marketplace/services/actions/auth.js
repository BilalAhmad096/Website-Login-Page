import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_LOGGED_IN,
  SIGNUP_FETCHING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  AUTH_LOGOUT,
  REFRESH_TOKEN_SUCCESS
} from '../actionTypes'

export const loginFetch = () => ({ type: LOGIN_FETCHING })
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, data })
export const loginError = data => ({ type: LOGIN_ERROR, data })

export const setLoggedIn = data => ({ type: SET_LOGGED_IN, data })

export const signupFetch = () => ({ type: SIGNUP_FETCHING })
export const signupSuccess = data => ({ type: SIGNUP_SUCCESS, data })
export const signupError = data => ({ type: SIGNUP_ERROR, data })

export const authLogout = () => ({ type: AUTH_LOGOUT })

export const refreshTokenSuccess = data => ({ type: REFRESH_TOKEN_SUCCESS, data })

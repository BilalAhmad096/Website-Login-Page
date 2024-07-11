import { IDLE, FETCHING, SUCCESS, ERROR } from './../constants'
import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_LOGGED_IN,
  SIGNUP_FETCHING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  REFRESH_TOKEN_SUCCESS
} from './../actionTypes'

export const initialAuthState = {
  login: {
    status: IDLE,
    data: {}
  },
  signup: {
    data: {},
    status: IDLE
  }
}

const authReducer = (state = initialAuthState, { type, data } = {}) => {
  switch (type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: data }

    case LOGIN_FETCHING:
      return { ...state, login: { status: FETCHING } }
    case LOGIN_SUCCESS:
      return { ...state, login: { status: SUCCESS, data } }
    case LOGIN_ERROR:
      return { ...state, login: { status: ERROR, data } }

    case SIGNUP_FETCHING:
      return { ...state, signup: { status: FETCHING } }
    case SIGNUP_SUCCESS:
      return { ...state, signup: { status: SUCCESS, data } }
    case SIGNUP_ERROR:
      return { ...state, signup: { status: ERROR, data } }

    case REFRESH_TOKEN_SUCCESS:
      return { ...state, login: { data }, isRefreshed: true }

    default:
      return state
  }
}

export default authReducer

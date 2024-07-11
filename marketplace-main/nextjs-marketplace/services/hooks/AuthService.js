import { useCallback, useContext } from 'react'
import axios from 'axios'
import { endPoints } from '../constants'
import { GlobalContext } from '../context/ContextProvider'
import {
  loginFetch,
  loginSuccess,
  loginError,
  setLoggedIn,
  signupFetch,
  signupSuccess,
  signupError,
  refreshTokenSuccess
} from '../actions'

export const useAuthService = () => {
  const { dispatch } = useContext(GlobalContext)

  const login = useCallback(async (request) => {
    dispatch(loginFetch())
    try {
      const { data } = await axios.post(endPoints.LOGIN, request)
      setSessionData(data)
      dispatch(setLoggedIn(true))
      dispatch(loginSuccess(data))
    } catch (e) {
      dispatch(loginError(e))
    }
  }, [dispatch])

  const signup = useCallback(async (request) => {
    dispatch(signupFetch())
    try {
      const { data } = await axios.post(endPoints.SIGNUP, request)
      // setSessionData(data)
      // dispatch(setLoggedIn(true))
      dispatch(signupSuccess(data))
    } catch (e) {
      dispatch(signupError(e))
    }
  }, [dispatch])

  const refreshToken = useCallback(async (tokenData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${tokenData.refreshToken}`
      }
    }
    const request = {
      user_id: tokenData.userId,
      refresh_token: tokenData.refreshToken
    }
    try {
      const { data } = await axios.post(endPoints.REFRESH_TOKEN, request, config)
      tokenData.accessToken = data.authentication_token
      tokenData.accessTokenExpiry = new Date().getTime() + parseInt(data.access_token_validity) * 60 * 1000 - 1 * 60 * 1000
      // tokenData.accessTokenExpiry = new Date().getTime() + 3 * 60 * 1000 - 1 * 60 * 1000
      tokenData.refreshToken = data.refresh_token
      tokenData.refreshTokenExpiry = new Date().getTime() + parseInt(data.refresh_token_validity) * 60 * 1000 - 1 * 60 * 1000 // I min buffer
      updateSessionData(tokenData)
      dispatch(refreshTokenSuccess(data))
    } catch (e) {
      localStorage.setItem('tokens', JSON.stringify(''))
      dispatch(setLoggedIn(false))
    }
  }, [dispatch])

  return { refreshToken, signup, login }
}

const setSessionData = response => {
  const sessionData = {
    userId: response.id,
    accessToken: response.authentication_token,
    refreshToken: response.refresh_token,
    accessTokenExpiry: new Date().getTime() + parseInt(response.access_token_validity) * 60 * 1000 - 1 * 60 * 1000, // I min buffer
    // accessTokenExpiry: new Date().getTime() + 3 * 60 * 1000 - 1 * 60 * 1000,  // I min buffer
    refreshTokenExpiry: new Date().getTime() + parseInt(response.refresh_token_validity) * 60 * 1000 - 1 * 60 * 1000, // I min buffer
    isGuest: response.is_guest
  }
  localStorage.setItem('tokens', JSON.stringify(sessionData))
}

const updateSessionData = sessionData => {
  localStorage.setItem('tokens', JSON.stringify(sessionData))
}

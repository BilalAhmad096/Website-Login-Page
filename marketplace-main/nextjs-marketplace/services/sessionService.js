import { FETCHING, SUCCESS } from './constants'

export const getAccessToken = () => {
  const tokenData = JSON.parse(localStorage.getItem('tokens'))
  if (!tokenData) {
    return {
      status: SUCCESS,
      accessToken: ''
    }
  } else if (tokenData.accessTokenExpiry > new Date().getTime()) {
    return {
      status: SUCCESS,
      userId: tokenData.accessToken,
      accessToken: tokenData.accessToken,
      isGuest: tokenData.isGuest,
      guest_id: tokenData.isGuest && tokenData.userId
    }
  } else if (tokenData.accessTokenExpiry < new Date().getTime() && tokenData.refreshTokenExpiry > new Date().getTime()) {
    return {
      status: FETCHING,
      accessToken: tokenData.accessToken,
      userId: tokenData.accessToken,
      refreshToken: tokenData.refreshToken,
      tokenData,
      isGuest: tokenData.isGuest,
      guest_id: tokenData.isGuest && tokenData.userId
    }
  } else {
    localStorage.setItem('tokens', JSON.stringify(''))
    return {
      status: SUCCESS,
      accessToken: ''
    }
  }
}

export const setSessionData = response => {
  const sessionData = {
    userId: response.id,
    accessToken: response.authentication_token,
    refreshToken: response.refresh_token,
    accessTokenExpiry: new Date().getTime() + parseInt(response.access_token_validity) * 60 * 1000 - 1 * 60 * 1000, // I min buffer
    refreshTokenExpiry: new Date().getTime() + parseInt(response.refresh_token_validity) * 60 * 1000 - 1 * 60 * 1000 // I min buffer
  }
  localStorage.setItem('tokens', JSON.stringify(sessionData))
}

export const updateSessionData = sessionData => {
  localStorage.setItem('tokens', JSON.stringify(sessionData))
}

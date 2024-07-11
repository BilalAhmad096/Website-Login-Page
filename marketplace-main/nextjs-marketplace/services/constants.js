const API_BASE_URL = process.env.NEXT_PUBLIC_API_KEY

export const IDLE = 'IDLE'
export const FETCHING = 'FETCHING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'

export const endPoints = {
  LOGIN: `${API_BASE_URL}/login`,
  SIGNUP: `${API_BASE_URL}/signup`,
  REFRESH_TOKEN: `${API_BASE_URL}/refresh_token`
}

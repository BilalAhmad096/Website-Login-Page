import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import { ConfigProvider } from 'antd'

import { AuthContext } from '@/services/context/AuthContext'
import { StateProvider, GlobalContext } from '@/services/context/ContextProvider'
import { getAccessToken } from '@/services/sessionService'
import { FETCHING } from '@/services/constants'
import { useAuthService } from '@/services/hooks'
import theme from '@/theme/themeConfig'

import '@/styles/global.scss'
import '@/styles/layout.scss'
import '@/styles/inputs.scss'
import '@/styles/buttons.scss'
import '@/styles/home.scss'
import '@/styles/cards.scss'
import '@/styles/login.scss'
import '@/styles/vendors.scss'

const MyApp = ({ Component, pageProps }) => {
  const { refreshToken } = useAuthService()
  const { globalState } = useContext(GlobalContext)
  const { auth } = globalState
  const [existingTokenData, setExistingTokenData] = useState({})
  const [authToken, setAuthTokens] = useState(existingTokenData.accessToken)

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data))
    setAuthTokens(data)
  }

  useEffect(() => {
    const value = getAccessToken()
    setExistingTokenData(value)
    setAuthTokens(value.accessToken)
  }, [auth.isLoggedIn, auth.isRefreshed])

  useEffect(() => {
    const value = getAccessToken()
    setExistingTokenData(value)
    setAuthTokens(value.accessToken)
    if (value.status === FETCHING) {
      refreshToken(value.tokenData)
    }
  }, [refreshToken])

  return (
        <AuthContext.Provider
            value={{
              authToken: authToken || '',
              userId: existingTokenData.userId,
              setAuthTokens: setTokens
            }}
        >
            <Component {...pageProps} />
        </AuthContext.Provider>
  )
}

const InitApp = ({ Component, pageProps }) => {
  return (
        <StateProvider>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
            </Head>
            <ConfigProvider theme={theme}>
            <MyApp Component={Component} pageProps={pageProps} />
            </ConfigProvider>
        </StateProvider>
  )
}

export default InitApp

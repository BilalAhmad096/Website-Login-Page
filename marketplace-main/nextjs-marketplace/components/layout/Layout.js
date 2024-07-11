import { Layout as AntLayout } from 'antd'

import Header from './Header'
import Footer from './Footer'

const { Content } = AntLayout

const Layout = ({ children }) => {
  return (
        <AntLayout>
            <Header />
            <Content>
                {children}
            </Content>
                <Footer />
        </AntLayout>
  )
}

export default Layout

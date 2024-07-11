import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Drawer } from 'antd'

import HeaderSearchInput from '@/components/inputs/HeaderSearchInput'
import HomeButton from '@/components/buttons/HomeButton'
import MenuIcon from '@/icons/MenuIcon'

const RSHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const router = useRouter()

  const onCloseDrawer = () => {
    setDrawerOpen(false)
  }

  const handleOpenDrawer = () => {
    setDrawerOpen(true)
  }

  const drawerClassNames = {
    body: 'header-drawer-body',
    mask: 'header-drawer-mask',
    header: 'header-drawer-header',
    footer: 'header-drawer-footer',
    content: 'header-drawer-content'
  }

  const gotoLogin = () => {
    router.push('/login')
  }

  return (
        <div className='header'>
            <div className='container'>
                <div className="logo-search-container">
                    <div className='logo'>
                        <Link href="/">
                            <Image src="/assets/images/logo.png" width={142} height={42} alt="logo" />
                        </Link>
                    </div>
                    <div className='search'>
                        <HeaderSearchInput id='header-search-input' placeholder='Search “Futures” or “Indicator”' />
                    </div>
                </div>
                <div className='menu'>
                    <Link className='menu-button' href='/vendor/signup'>Start Selling</Link>
                    <div className='menu-button'>
                        <HomeButton text="Login" onClick={gotoLogin} />
                    </div>
                    <div className='menu-button'>
                        <HomeButton text="Signup" type="primary" />
                    </div>
                </div>
                <div className="hamburger-menu" onClick={handleOpenDrawer}>
                    <MenuIcon />
                </div>
            </div>
            <Drawer classNames={drawerClassNames} title="Menu" placement="right" onClose={onCloseDrawer} open={drawerOpen} width="70vw">
                <div className="menu-items">
                    <div className="menu-item">
                        <Link className='menu-button' href='/vendor/signup'>Start Selling</Link>
                    </div>
                    <div className="menu-item">
                        <HomeButton text="Login" onClick={gotoLogin} />
                    </div>
                    <div className="menu-item">
                        <HomeButton text="Signup" type="primary" />
                    </div>
                    <div className="menu-item">
                        <HeaderSearchInput id='header-search-input' placeholder='Search “Futures” or “Indicator”' />
                    </div>
                </div>
            </Drawer>
        </div>
  )
}

export default RSHeader

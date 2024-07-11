import { useState } from 'react'
import Link from 'next/link'
import { Flex, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import HomeButton from '@/components/buttons/HomeButton'
import Input from '@/components/inputs/Input'

const { Title, Paragraph } = Typography

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => { }

  return (
        <div className="login-form">
            <Title className="title" level={3}>Sign in to RS Marketplace</Title>
            <Paragraph className="description">Welcome back!!</Paragraph>
            <div className="input-container">
                <Paragraph className="input-label">Email</Paragraph>
                <Input value={email} onChange={setEmail} placeholder="Email address" />
            </div>
            <div className="input-container">
                <Flex justify="space-between" align="center">
                    <Paragraph className="input-label">Password</Paragraph>
                    <Link className="forgot-text" href="/forgot-password">Forgot Password?</Link>
                </Flex>
                <Input value={password} onChange={setPassword} placeholder="Password" type="password" />
            </div>
            <HomeButton onClick={handleSubmit} text="Login" type="primary" />
            <Paragraph className="signup-text">New to Rocket Scooter? <Link href="/signup">Create an account</Link></Paragraph>
            <Link className='home-icon' href="/"><ArrowLeftOutlined /> Return to Home</Link>
        </div>
  )
}

export default LoginForm

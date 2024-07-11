import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Typography, List } from 'antd'
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Paragraph, Title } = Typography

const Footer = () => {
  return (
        <div className='footer'>
            <Row className='container' gutter={[32, 32]} justify="space-between">
                <Col sm={12} lg={8}>
                    <Link href="/">
                        <Image src="/assets/images/logo.png" width={142} height={42} alt="logo" />
                    </Link>
                    <Paragraph className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Paragraph>
                </Col>
                <Col sm={12} lg={6}>
                    <Title className='section-title' level={4}>Categories</Title>
                    <List className='section-list' bordered={false}>
                        <List.Item>
                            <Link href="/">Stocks</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Futures</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Analysis</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Communities</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Alerts</Link>
                        </List.Item>
                    </List>
                </Col>
                <Col sm={12} lg={6}>
                    <Title className='section-title' level={4}>Company</Title>
                    <List className='section-list' bordered={false}>
                        <List.Item>
                            <Link href="/">About</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Contact Us</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Terms</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Privacy Policy</Link>
                        </List.Item>
                        <List.Item>
                            <Link href="/">Blog</Link>
                        </List.Item>
                    </List>
                </Col>
                <Col sm={12} lg={4}>
                    <Title className='section-title' level={4}>Follow us</Title>
                    <FacebookOutlined className='social-media-icon' />
                    <TwitterOutlined className='social-media-icon' />
                    <LinkedinOutlined className='social-media-icon' />
                </Col>
                <Col span={24} className='copyrights'>
                    <Typography className='copyright-text'>Rocker Scooter ©2023 Inc.All Rights Reserved.</Typography>
                </Col>
            </Row>
        </div>
  )
}

export default Footer

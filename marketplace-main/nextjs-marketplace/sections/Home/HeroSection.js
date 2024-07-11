import Image from 'next/image'
import Link from 'next/link'
import { Col, Row, Space, Tag, Typography } from 'antd'

import SearchInput from '@/components/inputs/SearchInput'

const { Title } = Typography

const HeroSection = () => {
  return (
        <div className="hero-section">
            <Row className='container' justify='space-between' align='middle'>
                <Col className='hero-section-left' xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                    <Title className="title">Discover the Best Trading Tools & Communities</Title>
                    <Title level={5} className="description">Discover a vast array of trading tools and resources curated to enhance your trading experience</Title>
                    <div className="search-input-container">
                        <SearchInput placeholder="Search Fundamental Analysis" />
                        <Space size={[0, 8]} wrap className="categories-list">
                            <Link href='/'><Tag className="category-item">Stock</Tag></Link>
                            <Link href='/'><Tag className="category-item" >Futures</Tag></Link>
                            <Link href='/'><Tag className="category-item" >Forex</Tag></Link>
                            <Link href='/'><Tag className="category-item">Alerts</Tag></Link>
                        </Space>
                    </div>
                </Col>
                <Col className='hero-section-right' xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                    <Image className="banner-image" src='/assets/images/hero-banner.png' alt="banner" width={775} height={630} />
                </Col>
            </Row>
            <div className="gradient-blur">
                <div className="banner-shadow" />
            </div>
        </div>
  )
}

export default HeroSection

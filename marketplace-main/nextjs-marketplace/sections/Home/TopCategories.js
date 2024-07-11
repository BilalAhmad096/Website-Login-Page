import Link from 'next/link'
import { Col, Flex, Row, Typography } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

import HomeButton from '@/components/buttons/HomeButton'
import CategoryCard from '@/components/cards/CategoryCard'
import ChartIcon from '@/icons/ChartIcon'
import CrowdIcon from '@/icons/CrowdIcon'
import BullHornIcon from '@/icons/BullHornIcon'
import ListIcon from '@/icons/ListIcon'
import LetterIcon from '@/icons/LetterIcon'
import BankIcon from '@/icons/BankIcon'

const { Title } = Typography

const TopCategories = () => {
  return (
        <div className="top-categories">
            <div className="container">
                <Row className="heading-container" justify="space-between" align="middle" gutter={[0, 32]}>
                    <Col xs={24} sm={24} md={12}>
                        <Flex vertical gap={0}>
                            <Title className="title" level={2}>Explore by Category</Title>
                            <Title className="description" level={5}>Find tools and communities tailored to your trading interests</Title>
                        </Flex>
                    </Col>
                    <Col xs={24} sm={12} md={4} lg={2}>
                        <HomeButton text="See All" size="small" />
                    </Col>
                </Row>
                <Row gutter={[10, 10]}>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Link href='/'>
                            <CategoryCard icon={<ChartIcon />} title="Technical Indicators" />
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Link href='/'>
                            <CategoryCard icon={<CrowdIcon />} title="Trading Communities" />
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Link href='/'>
                            <CategoryCard icon={<BullHornIcon />} title="Alerts & Discord Bots" />
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Link href='/'>
                            <CategoryCard icon={<ListIcon />} title="Scanner Settings" />
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Link href='/'>
                            <CategoryCard icon={<LetterIcon />} title="Newsletters & Information" />
                        </Link>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <Link href='/'>
                            <CategoryCard icon={<BankIcon />} title="Funding Program" />
                        </Link>
                    </Col>
                </Row>
                <Row justify="center" className="browse-button">
                    <Col>
                        <HomeButton text="Browse" size="middle" type="primary" icon={<ArrowRightOutlined />} />
                    </Col>
                </Row>
            </div>
        </div>
  )
}

export default TopCategories

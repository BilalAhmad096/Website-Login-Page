import { Card, Col, Flex, Rate, Row, Space, Tag, Typography } from 'antd'
import { truncate } from 'lodash'
import Image from 'next/image'
import Link from 'next/link'

const { Title, Paragraph } = Typography

const VendorCard = ({ link, name, description, rating, price, duration, categories }) => {
  return (
        <Link href={link}>
            <Card className="vendor-card">
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={24} md={10} lg={8}>
                        <Image
                            className="vendor-image"
                            src="/assets/images/project-banner.png"
                            width={280}
                            height={160}
                            alt="vendor-image"
                        />
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={16}>
                        <Flex justify="space-between" align="flex-start">
                            <Space direction="vertical" size={[0, 3]}>
                                <Title className="vendor-name" level={4}>
                                    {name}
                                </Title>
                                <Rate className="vendor-rating" disabled defaultValue={rating} />
                            </Space >
                            <Space.Compact className="pricing-container" direction="vertical">
                                <Paragraph className="pricing">${price}</Paragraph>
                                <Paragraph className="duration">/{duration}</Paragraph>
                            </Space.Compact>
                        </Flex>
                        <Paragraph className="vendor-description">
                            {truncate(description, { length: 250 })}
                        </Paragraph>
                        <Space size={[0, 8]} wrap className="categories-list">
                            {categories.map((category, index) => (
                                <Tag className="category-item" key={index}>{category}</Tag>

                            ))}
                        </Space>
                    </Col>
                </Row>
            </Card>
        </Link>
  )
}

export default VendorCard

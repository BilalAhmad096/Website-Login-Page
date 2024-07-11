import { Avatar, Card, Flex, Rate, Space, Tag, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const { Title } = Typography
const { Meta } = Card

const ProjectCard = () => {
  return (
        <Link href="/">
            <Card hoverable className='project-card'>
                <Flex className="rating-price-header" justify="space-between" align="center">
                    <Rate className="rating" disabled defaultValue={2} />
                    <Tag className="pricing">$100</Tag>
                </Flex>
                <Meta
                    title='Importance of indicators in crypto currency trading'
                    description='Cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a '
                />
                <Space size={[0, 8]} wrap className="categories-list">
                    <Tag className="category-item">Stock</Tag>
                    <Tag className="category-item">Futures</Tag>
                </Space>
                <div className="thumbnail">
                    <Image className="thumbnail-image" src='/assets/images/project-banner.png' width={400} height={190} alt="project-card" />
                    <Flex gap={6} align="center" className="creator-details">
                        <Avatar className="avatar" src='/assets/images/avatar.png' />
                        <Title className="name" level={5}>Tom Hanks</Title>
                    </Flex>
                </div>
            </Card>
        </Link>
  )
}

export default ProjectCard

import { useState } from 'react'
import { Button, Col, Dropdown, Flex, Row, Space, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import MobileFilterDrawer from './MobileFilterDrawer'
import FilterIcon from '@/icons/FilterIcon'

const { Title } = Typography

const items = [
  {
    label: 'Relevance',
    value: 'relevance',
    key: 'relevance'
  },
  {
    label: 'Popular',
    key: 'popular',
    value: 'popular'
  },
  {
    label: 'Price: Low - High',
    key: 'price-ascending',
    value: 'price-ascending'
  },
  {
    label: 'Price: Hight - Low',
    key: 'price-descending',
    value: 'price-descending'
  }
]

const VendorsHeader = () => {
  const [sortBy, setSortBy] = useState('relevance')
  const [isMobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const selectedOption = items.filter((item) => item.value === sortBy)[0]

  const handleMenuClick = (e) => {
    setSortBy(e.key)
  }

  const menuProps = {
    items,
    onClick: handleMenuClick
  }

  return (
        <>
            <Row>
                <Col xs={0} sm={0} md={24} lg={24}>
                    <Flex justify="space-between" align="center" >
                        <Title className="title" level={4}>Get the best trading tool</Title>
                        <Dropdown className="sorting-option" menu={menuProps}>
                            <Button className="sorting-button">
                                <Space>
                                    {selectedOption.label}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </Flex>
                </Col>
                <Col xs={24} sm={24} md={0} lg={0}>
                    <Flex justify="space-between" align="center" >
                        <Title className="mobile-title" level={4}>100 products</Title>
                        <Button type="text" className='filter-mobile-button' onClick={() => setMobileDrawerOpen(true)}>
                            <Flex align='center' gap={8}>
                                Sorting & Filter
                                <FilterIcon />
                            </Flex>
                        </Button>
                    </Flex>
                </Col>
            </Row>
            <MobileFilterDrawer isOpen={isMobileDrawerOpen} onClose={() => setMobileDrawerOpen(false)} sortOptions={items} />
        </>
  )
}

export default VendorsHeader

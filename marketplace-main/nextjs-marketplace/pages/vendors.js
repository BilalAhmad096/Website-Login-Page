import { Col, Row } from 'antd'

import Layout from '@/components/layout/Layout'
import FilterPanel from '@/sections/Vendors/FilterPanel'
import VendorsHeader from '@/sections/Vendors/VendorsHeader'
import VendorsList from '@/sections/Vendors/VendorsList'

const Vendors = () => {
  return (
        <Layout>
            <div className="vendors">
                <div className="container">
                    <VendorsHeader />
                    <Row gutter={32}>
                        <Col xs={0} sm={0} md={6} lg={6}>
                            <FilterPanel />
                        </Col>
                        <Col sm={24} md={18} lg={18}>
                            <VendorsList />
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
  )
}

export default Vendors

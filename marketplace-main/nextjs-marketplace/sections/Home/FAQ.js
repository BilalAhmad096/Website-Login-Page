import { Col, Row, Typography } from 'antd'

import FAQCard from '@/components/cards/FAQCard'

const { Title } = Typography

const FAQ = () => {
  return (
        <div className="faq-section">
            <div className="container">
                <Title className="title" level={2}>
                    Frequently Asked Questions
                </Title>
                <Row gutter={[15, 15]}>
                    <Col sm={12} lg={12}>
                        <Row gutter={[15, 15]}>
                            {[...Array(4)].map((i, index) => (
                                <Col lg={24} key={index}>
                                    <FAQCard
                                        key={index}
                                        title="What kind of trading tools can I find on this platform?"
                                        description="Our platform houses a diverse range of trading tools including, but not limited to, technical and fundamental analysis tools, day trading resources, options and futures trading tools."
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col sm={24} lg={12}>
                        <Row gutter={[15, 15]}>
                            {[...Array(3)].map((i, index) => (
                                <Col lg={24} key={index}>
                                    <FAQCard
                                        key={index}
                                        title="What kind of trading tools can I find on this platform?"
                                        description="Our platform houses a diverse range of trading tools including, but not limited to, technical and fundamental analysis tools, day trading resources, options and futures trading tools."
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
  )
}

export default FAQ

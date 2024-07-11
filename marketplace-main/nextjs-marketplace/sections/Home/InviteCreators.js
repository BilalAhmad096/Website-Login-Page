import Image from 'next/image'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Col, Row, Tooltip, Typography } from 'antd'

import HomeButton from '@/components/buttons/HomeButton'

const { Title } = Typography

const InviteCreators = () => {
  return (
        <div className="invite-creators">
            <div className="container">
                <Row className="onboard-card" justify="space-between" align="middle">
                    <Col className="onboard-card-left" lg={12}>
                        <Title className="title" level={3}>List your  indicators in Rocket scooter and become a creator</Title>
                        <Avatar.Group>
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                            <a href="https://ant.design">
                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                            </a>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            </Tooltip>
                            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                        </Avatar.Group>
                        <div className="button-container">
                            <HomeButton text="Become a creator" type="primary" />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <Image className="ipad-mockup" src="/assets/images/ipad-mockup.png" alt="ipad-mockup" width={676} height={471} />
                        <div className="blue-ellipse-gradient"/>
                    </Col>
                </Row>
            </div>
        </div>
  )
}

export default InviteCreators

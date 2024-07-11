import { useEffect, useRef, useState } from 'react'
import { Button, Col, Flex, Row, Space, Typography } from 'antd'

import ProjectCard from '@/components/cards/ProjectCard'
import ArrowLeft from '@/icons/ArrowLeft'
import ArrowRight from '@/icons/ArrowRight'

const { Title } = Typography

const TrendingProjects = () => {
  const projectListRef = useRef(null)

  const [leftDisabled, setLeftDisabled] = useState(true)
  const [rightDisabled, setRightDisabled] = useState(false)

  const scrollLeft = () => {
    projectListRef.current.scrollBy({ left: -500, behavior: 'smooth' })
  }

  const scrollRight = () => {
    projectListRef.current.scrollBy({ left: 500, behavior: 'smooth' })
  }

  const checkScrollPosition = () => {
    const element = projectListRef.current
    if (element.scrollLeft <= 0) {
      setLeftDisabled(true)
    } else {
      setLeftDisabled(false)
    }

    if (element.scrollLeft >= (element.scrollWidth - element.clientWidth)) {
      setRightDisabled(true)
    } else {
      setRightDisabled(false)
    }
  }

  useEffect(() => {
    checkScrollPosition()
  }, [])

  return (
        <div className="trending-projects">
            <div className="container">
                <Row className="heading-container" justify="space-between" align="middle" gutter={[0, 32]}>
                    <Col xs={24} sm={24} md={12}>
                        <Flex vertical gap={0}>
                            <Title className="title" level={2}>Trending Projects</Title>
                            <Title className="description" level={5}>Explore the latest and most popular tools in our marketplace</Title>
                        </Flex>
                    </Col>
                    <Col xs={24} sm={12} md={4} lg={2}>
                        <Flex gap={10}>
                            <Button className="arrow-button" shape="circle" icon={<ArrowLeft />} onClick={scrollLeft} disabled={leftDisabled} />
                            <Button className="arrow-button" shape="circle" icon={<ArrowRight />} onClick={scrollRight} disabled={rightDisabled} />
                        </Flex>
                    </Col>
                </Row>
                <Space className="project-list" direction="horizontal" split ref={projectListRef} onScroll={checkScrollPosition}>
                    {[...Array(7)].map((i, index) => (
                        <ProjectCard key={index} />
                    ))}
                </Space>
            </div>
            <div className="gradient-blur">
                <div className="cyan-gradient"></div>
                <div className="blue-gradient"></div>
            </div>
        </div>

  )
}

export default TrendingProjects

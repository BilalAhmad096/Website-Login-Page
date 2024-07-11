import { Button, Checkbox, Flex, List, Typography } from 'antd'
import { useState } from 'react'

const { Paragraph } = Typography

const FilterPanel = () => {
  const [filters, setFilters] = useState([])

  const onClickFilter = (e) => {
    setFilters((prevState) => {
      if (e.target.checked) {
        return [...prevState, e.target.value]
      } else {
        return prevState.filter(value => value !== e.target.value)
      }
    })
  }

  return (
        <div className="filter-panel">
            <Flex className="filter-header" justify="space-between" align="center">
                <Paragraph className="panel-title">FILTER BY</Paragraph>
                <Button className="clear-button" type="text">Clear All</Button>
            </Flex>
            <List className="filter-list">
                {[...Array(7)].map((i, index) => (
                    <List.Item className="filter-item" key={index}>
                        <Checkbox className="filter-switch" checked={filters.includes(`item${index}`)} value={`item${index}`} onChange={onClickFilter}>Item-{index}</Checkbox>
                    </List.Item>
                ))}
            </List>
        </div>
  )
}

export default FilterPanel

import { Checkbox, Drawer, List, Radio, Space, Typography } from 'antd'

const { Title } = Typography

const MobileFilterDrawer = ({ onClose, isOpen, sortOptions, onSelectSortOption, selectedSortOption }) => {
  return (
        <Drawer
            rootClassName="mobile-filter-drawer"
            title="Sort & Filter"
            placement="bottom"
            closable={true}
            onClose={onClose}
            open={isOpen}
            height="100vh"
        >
            <div className="filter-section">
                <Title className="section-title" level={5}>Sort by</Title>
                <List className="filter-option">
                    <List.Item>
                        <Radio.Group onChange={onSelectSortOption} value={selectedSortOption}>
                            <Space direction="vertical">
                                {sortOptions.map((option) => (
                                    <Radio className="filter-item" key={option.key} value={option.value}>{option.label}</Radio>
                                ))}
                            </Space>
                        </Radio.Group>
                    </List.Item>
                </List>
            </div>
            <div className="filter-section">
                <Title className="section-title" level={5}>Categories</Title>
                <List className="filter-option">
                    <List.Item>
                        <Checkbox.Group onChange={onSelectSortOption} value={selectedSortOption}>
                            <Space direction="vertical">
                                {[...Array(7)].map((i, index) => (
                                    <Checkbox className="filter-item" key={index}>Item-{index}</Checkbox>
                                ))}
                            </Space>
                        </Checkbox.Group>
                    </List.Item>
                </List>
            </div>
        </Drawer>
  )
}

export default MobileFilterDrawer

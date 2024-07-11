import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'

const FAQCard = ({ key, title, description }) => {
  return (
        <Collapse
            className="faq-card"
            expandIconPosition="end"
            expandIcon={({ isActive }) => isActive ? <div className="icon active"><MinusOutlined /></div> : <div className="icon"><MinusOutlined /><PlusOutlined /></div>}
            items={[
              {
                key,
                label: title,
                children: <p>{description}</p>
              }
            ]}
        />
  )
}

export default FAQCard

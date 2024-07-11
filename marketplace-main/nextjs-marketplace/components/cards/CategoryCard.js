import { Card } from 'antd'

const { Meta } = Card

const CategoryCard = ({ icon, title }) => {
  return (
        <Card className='category-card' hoverable>
            <div className='avatar'>
                {icon}
                <div className='cover' />
            </div>
            <Meta title={title} />
        </Card>
  )
}

export default CategoryCard

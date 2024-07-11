import VendorCard from '@/components/cards/VendorCard'
import { Divider } from 'antd'

const VendorsList = () => {
  return (
        <div className="vendors-list">
            {[...Array(7)].map((i, index) => (
                <>
                    <VendorCard
                        link='/vendor/matt'
                        name="Matt"
                        description="Cryptocurrency, crypto-currency, or crypto is a dig Cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it."
                        rating={3.5}
                        price={200}
                        duration="week"
                        categories={['Stock', 'Forex', 'Trading']}
                    />
                    {index !== 6 && <Divider className="separator" />}
                </>
            ))}
        </div>
  )
}

export default VendorsList

import { Button } from 'antd'

const HomeButton = ({ text, onClick, disabled, type, size, icon }) => (
    <Button
        disabled={disabled}
        className="home-button"
        type={type || 'default'}
        size={size || 'middle'}
        onClick={onClick}
        icon={icon}
    >
        {text}
    </Button>
)

export default HomeButton

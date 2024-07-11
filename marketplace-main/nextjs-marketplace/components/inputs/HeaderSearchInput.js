import { Input } from 'antd'

import SearchIcon from '@/icons/SearchIcon'

const HeaderSearchInput = ({ id, placeholder, value, onChange, onFocus, onBlur, onClick }) => {
  return (
        <Input
            id={id}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete='off'
            rootClassName={'header-search-input'}
            onClick={onClick}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            prefix={<SearchIcon className="search-icon" />}
        />
  )
}

export default HeaderSearchInput

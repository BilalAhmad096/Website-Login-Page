import React from 'react'
import { Input } from 'antd'
import SearchIcon from '@/icons/SearchIcon'

const { Search } = Input

const SearchInput = ({ id, placeholder, value, onSearch, onChange, color, icon, onFocus, onBlur, onClick }) => {
  return (
        <Search
            id={id}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete="off"
            allowClear
            className={'search-input'}
            onClick={onClick}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onSearch={onSearch}
            enterButton={<SearchIcon />}
        />
  )
}

export default SearchInput

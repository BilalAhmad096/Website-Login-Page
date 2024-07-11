import React from 'react'
import { Input as AntInput } from 'antd'

const Input = ({ placeholder, value, onChange, disabled, type = 'text', onPressEnter, addonBefore }) => {
  return (
        <AntInput
            type={type}
            className="input"
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onPressEnter={onPressEnter}
            addonBefore={addonBefore}
        />
  )
}

export default Input

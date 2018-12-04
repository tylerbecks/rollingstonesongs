import React from 'react'
import { Input } from 'semantic-ui-react'

const FilterInput = ({ value, onChange }) => {
  const handleChange = event => {
    const { value } = event.target
    onChange(value)
  }

  return (
    <Input
      icon="search"
      placeholder="Search..."
      value={value}
      onChange={handleChange}
    />
  )
}

export default FilterInput

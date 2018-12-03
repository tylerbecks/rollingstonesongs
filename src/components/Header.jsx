import React from 'react'
import FilterInput from './FilterInput'
import FilterFieldCheckboxes from './FilterFieldCheckboxes'

const Header = ({
  siteTitle,
  onChangeFilter,
  filter,
  filterFields,
  onChangeFilterFields,
}) => (
  <div
    style={{
      alignItems: 'center',
      background: 'rebeccapurple',
      display: 'flex',
      flexFlow: 'column noWrap',
      marginBottom: '1.45rem',
      padding: '1.45rem 1.0875rem',
    }}
  >
    <h1 style={{ margin: 0, color: 'white' }}>{siteTitle}</h1>
    <FilterInput onChange={onChangeFilter} value={filter} />
    <FilterFieldCheckboxes
      onChange={onChangeFilterFields}
      values={filterFields}
    />
  </div>
)

export default Header

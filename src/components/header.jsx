import React from 'react'
import FilterInput from './FilterInput'

const Header = ({ siteTitle, onChangeFilter, filter }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, color: 'white' }}>{siteTitle}</h1>
      <FilterInput onChange={onChangeFilter} value={filter} />
    </div>
  </div>
)

export default Header

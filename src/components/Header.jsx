import React from 'react'
import FilterInput from './FilterInput'
import FilterFieldCheckboxes from './FilterFieldCheckboxes'
import injectSheet from 'react-jss'

const styles = {
  base: {
    alignItems: 'center',
    background: 'rebeccapurple',
    display: 'flex',
    flexFlow: 'column noWrap',
    marginBottom: '1.45rem',
    padding: '1.45rem 1.0875rem',
    textAlign: 'center',
  },
  header: {
    color: 'white',
    margin: '0 0 10 0',
  },
}

const Header = ({
  classes,
  siteTitle,
  onChangeFilter,
  filter,
  filterFields,
  onChangeFilterFields,
}) => (
  <div className={classes.base}>
    <h2 className={classes.header}>{siteTitle}</h2>
    <FilterInput onChange={onChangeFilter} value={filter} />
    <FilterFieldCheckboxes
      onChange={onChangeFilterFields}
      values={filterFields}
    />
  </div>
)

export default injectSheet(styles)(Header)

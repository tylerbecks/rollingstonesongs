import './index.css'
import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import AlbumsContainer from '../components/AlbumsContainer'

const ALL_FILTER_FIELDS = ['album', 'band', 'recordLabel', 'rank', 'year']

export default class IndexPage extends PureComponent {
  state = {
    filter: '',
    filterFields: [],
  }

  componentDidMount() {
    setTimeout(() => {
      const { hash } = window.location
      const id = hash.slice(1)

      if (id) {
        this.scrollToElement(id)
      }
    }, 1500)
  }

  scrollToElement(id) {
    const element = document.getElementById(id)

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }

  handleChangeFilter = filter => {
    this.setState({ filter })
  }

  handleChangeFilterFields = filterFields => {
    this.setState({ filterFields })
  }

  getFilteredAlbums = () => {
    const { edges } = this.props.data.allAlbumsJson
    if (this.state.filter === '') return edges

    const filterFields =
      this.state.filterFields.length === 0
        ? ALL_FILTER_FIELDS
        : this.state.filterFields

    return edges.filter(({ node }) => {
      for (const field of filterFields) {
        if (this.matchesFilter(node[field])) {
          return true
        }
      }
    })
  }

  matchesFilter = value => {
    if (!value) return false

    let valueStr = Number.isInteger(value) ? value.toString() : value
    const lowerCaseStr = valueStr.toLowerCase()
    return lowerCaseStr.match(this.state.filter)
  }

  render() {
    return (
      <Layout>
        <Header
          siteTitle={this.props.data.site.siteMetadata.title}
          onChangeFilter={this.handleChangeFilter}
          filter={this.state.filter}
          filterFields={this.state.filterFields}
          onChangeFilterFields={this.handleChangeFilterFields}
        />
        <AlbumsContainer albums={this.getFilteredAlbums()} />
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    allAlbumsJson {
      edges {
        node {
          id
          band
          album
          imageHref
          rank
          recordLabel
          year
          description
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`

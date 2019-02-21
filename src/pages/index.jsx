import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import { Container } from 'semantic-ui-react'
import Layout from '../components/layout'
import Header from '../components/Header'
import SongsContainer from '../components/SongsContainer'

const ALL_FILTER_FIELDS = ['song', 'band', 'recordLabel', 'rank', 'year']

export default class IndexPage extends PureComponent {
  state = {
    bookmarkedId: undefined,
    filter: '',
    filterFields: [],
  }

  componentDidMount() {
    const bookmarkedId = this.getBookmarkedId()
    this.setState({ bookmarkedId })

    window.onhashchange = this.handleHashChange

    setTimeout(() => {
      if (bookmarkedId) {
        this.scrollToElement(bookmarkedId)
      }
    }, 2000)
  }

  handleHashChange = () => {
    const bookmarkedId = this.getBookmarkedId()
    this.setState({ bookmarkedId })
  }

  getBookmarkedId() {
    // Only reference window in componentDidMount
    // https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
    const { hash } = window.location
    return hash.slice(1)
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

  getFilteredSongs = () => {
    const { edges } = this.props.data.allSongsJson
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
      return false
    })
  }

  matchesFilter = value => {
    if (!value) return false

    let valueStr = Number.isInteger(value) ? value.toString() : value
    const lowerCaseStr = valueStr.toLowerCase()
    return lowerCaseStr.match(this.state.filter.toLowerCase())
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
        <Container>
          <SongsContainer
            songs={this.getFilteredSongs()}
            bookmarkedId={this.state.bookmarkedId}
          />
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    allSongsJson {
      edges {
        node {
          id
          band
          song
          imageHref
          rank
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

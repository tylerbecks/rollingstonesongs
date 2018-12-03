import './index.css'
import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import AlbumsContainer from '../components/AlbumsContainer'

export default class IndexPage extends PureComponent {
  state = {
    filter: '',
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

  render() {
    return (
      <Layout>
        <Header
          siteTitle={this.props.data.site.siteMetadata.title}
          onChangeFilter={this.handleChangeFilter}
          filter={this.state.filter}
        />
        <AlbumsContainer albums={this.props.data.allAlbumsJson.edges} />
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

import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>500 Greatest Albums of All Time</h1>
    {data.site.siteMetadata.albums.forEach(({ band, album, href, rank, recordLabel, year, description }) => (
      <div></div>
    ))}
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        albums
      }
    }
  }
`

export default IndexPage

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    {data.allAlbumsJson.edges.map(
      ({ node: { band, album, href, rank, recordLabel, year, description } }) => (
        <div>
          <h3>{rank}</h3>
          <h4>{band}</h4>
        </div>
      )
    )}
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }

    allAlbumsJson {
      edges {
        node {
          band
          album
          href
          rank
          recordLabel
          year
          description
        }
      }
    }
  }
`

export default IndexPage

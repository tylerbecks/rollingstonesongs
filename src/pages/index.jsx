import React from 'react'
import { graphql } from 'gatsby'
import encodeurl from 'encodeurl'
import { Card, Image } from 'semantic-ui-react'
import Layout from '../components/layout'
import './index.css'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="album-container">
      {data.allAlbumsJson.edges.map(
        ({
          node: { id, band, album, href, rank, recordLabel, year, description },
        }) => {
          // const spotifyHref = encodeurl(
          //   `https://open.spotify.com/search/results/artist:${band} album:${album}`
          // )
          const spotifyHref = `https://open.spotify.com/search/results/artist:${band} album:${album}`;

          return (
            <Card key={id}>
              <Image src={href} href={spotifyHref} target="_blank" />
              <Card.Content>
                <Card.Header content={rank} />
                <Card.Header href={spotifyHref} target="_blank">
                  {band}, <em>{album}</em>
                </Card.Header>
                <Card.Meta>
                  <span className="date">
                    {year}, {recordLabel}
                  </span>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>
          )
        }
      )}
    </div>
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
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

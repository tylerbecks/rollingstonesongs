import React from 'react'
import { graphql } from 'gatsby'
import { Card, Image } from 'semantic-ui-react'
import Layout from '../components/layout'
import './index.css'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="album-container">
      {data.allAlbumsJson.edges.map(
        ({
          node: { id, band, album, href, rank, recordLabel, year, description },
        }) => (
          <Card key={id}>
            <Card.Content header={rank} />
            <Image src={href} />
            <Card.Content>
              <Card.Header>{band}, <em>{album}</em></Card.Header>
              <Card.Meta>
                <span className="date">{year}, {recordLabel}</span>
              </Card.Meta>
              <Card.Description>
                {description}
              </Card.Description>
            </Card.Content>
          </Card>
        )
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

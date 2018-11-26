import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import AlbumCard from '../components/AlbumCard'
import './index.css'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="album-container">
      {data.allAlbumsJson.edges.map(
        ({
          node: { id, band, album, imageHref, rank, recordLabel, year, description },
        }) => (
          <AlbumCard
            key={id}
            imageHref={imageHref}
            href={getSpotifyHref(band, album)}
            header={rank}
            subHeader={<span>{band}, <em>{album}</em></span>}
            meta={`${year}, ${recordLabel}`}
            description={description}
          />
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
          imageHref
          rank
          recordLabel
          year
          description
        }
      }
    }
  }
`

const getSpotifyHref = (band, album) => `https://open.spotify.com/search/results/artist:${band} album:${album}`;

export default IndexPage

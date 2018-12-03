import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import AlbumCard from '../components/AlbumCard'
import './index.css'

export default class IndexPage extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      const { hash } = window.location
      if (hash) {
        const id = hash.slice(1)
        const element = document.getElementById(id)

        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        })
      }
    }, 1500)
  }

  render() {
    return (
      <Layout>
        <div className="album-container">
          {this.props.data.allAlbumsJson.edges.map(
            ({
              node: {
                id,
                band,
                album,
                imageHref,
                rank,
                recordLabel,
                year,
                description,
              },
            }) => (
              <AlbumCard
                key={id}
                id={rank}
                imageHref={imageHref}
                href={getSpotifyHref(band, album)}
                header={rank}
                subHeader={
                  <span>
                    {band}, <em>{album}</em>
                  </span>
                }
                meta={`${year}, ${recordLabel}`}
                description={description}
              />
            )
          )}
        </div>
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
  }
`

const getSpotifyHref = (band, album) =>
  `https://open.spotify.com/search/results/artist:${band} album:${album}`

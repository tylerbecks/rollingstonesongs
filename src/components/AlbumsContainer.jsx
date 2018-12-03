import React from 'react'
import AlbumCard from './AlbumCard'

const AlbumsContainer = ({ albums }) => (
  <div className="album-container">
    {albums.map(
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
)

const getSpotifyHref = (band, album) =>
  `https://open.spotify.com/search/results/artist:${band} album:${album}`

export default AlbumsContainer

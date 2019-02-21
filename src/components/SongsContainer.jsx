import React from 'react'
import { Card } from 'semantic-ui-react'
import copy from 'copy-to-clipboard'
import SongCard from './SongCard'

const SongsContainer = ({ songs, bookmarkedId }) => (
  <Card.Group centered stackable>
    {songs.map(({ node: { song, band, description, id, imageHref, rank } }) => (
      <SongCard
        bookmarked={Number(bookmarkedId) === rank}
        description={description}
        header={rank}
        href={getSpotifyHref(band, song)}
        id={rank}
        imageHref={imageHref}
        key={id}
        onClickActionButton={() => handleClickSpotifyButton(band, song)}
        subHeader={
          <span>
            {band}, <em>{song}</em>
          </span>
        }
      />
    ))}
  </Card.Group>
)

const getSpotifyHref = (band, song) =>
  `https://open.spotify.com/search/results/artist:${band} ${song}`

const getSpotifySearchStr = (band, song) => `artist:"${band}" "${song}"`

const handleClickSpotifyButton = (band, song) => {
  const spotifySearchStr = getSpotifySearchStr(band, song)
  copy(spotifySearchStr)
}

export default SongsContainer

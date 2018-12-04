import React from 'react'
import { Card, Image, Label, Icon } from 'semantic-ui-react'

const AlbumCard = ({
  bookmarked,
  description,
  header,
  href,
  id,
  imageHref,
  meta,
  subHeader,
}) => (
  <Card id={id}>
    <Image src={imageHref} href={href} target="_blank" />
    <Card.Content>
      <Label
        active
        as="a"
        content={<Icon name="bookmark" />}
        color={bookmarked ? 'green' : 'red'}
        disabled={bookmarked}
        href={getBookmarkedHref(id)}
        ribbon
        style={{ marginBottom: 10 }}
      />
      <Card.Header content={header} />
      <Card.Header href={href} target="_blank">
        {subHeader}
      </Card.Header>
      <Card.Meta>{meta}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
)

const getBookmarkedHref = id => {
  if (typeof window === 'undefined') return ''

  return `${window.location.origin}/#${id}`
}

export default AlbumCard

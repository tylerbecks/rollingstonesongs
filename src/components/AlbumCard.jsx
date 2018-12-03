import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const AlbumCard = ({
  id,
  imageHref,
  header,
  subHeader,
  meta,
  description,
  href,
}) => (
  <Card id={id}>
    <Image src={imageHref} href={href} target="_blank" />
    <Card.Content>
      <Card.Header content={header} />
      <Card.Header href={href} target="_blank">
        {subHeader}
      </Card.Header>
      <Card.Meta>{meta}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
)

export default AlbumCard

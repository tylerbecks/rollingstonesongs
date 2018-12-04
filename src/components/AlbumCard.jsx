import React, { PureComponent } from 'react'
import { Card, Image, Label, Icon } from 'semantic-ui-react'

export default class IndexPage extends PureComponent {
  state = {
    bookMarkHref: '',
  }

  componentDidMount() {
    // only access window in componentDidMount to ensure this code is running in the browser.  Gatsby build fails on the server side if window is referenced outside here.
    const bookMarkHref = `${window.location.origin}/#${this.props.id}`
    this.setState({ bookMarkHref })
  }

  render() {
    return (
      <Card id={this.props.id}>
        <Image
          src={this.props.imageHref}
          href={this.props.href}
          target="_blank"
        />
        <Card.Content>
          <Label
            as="a"
            content={<Icon name="bookmark" />}
            color={this.props.bookmarked ? 'green' : 'red'}
            href={this.state.bookMarkHref}
            ribbon
            style={{ marginBottom: 10 }}
          />
          <Card.Header content={this.props.header} />
          <Card.Header href={this.props.href} target="_blank">
            {this.props.subHeader}
          </Card.Header>
          <Card.Meta>{this.props.meta}</Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

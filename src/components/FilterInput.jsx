import React, { PureComponent } from 'react'
import { Input } from 'semantic-ui-react'

export default class FilterInput extends PureComponent {
  state = {
    value: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange = node => {
    const { value } = node.target
    this.setState({ value })
    this.props.onChange(value)
  }

  render() {
    return (
      <Input
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

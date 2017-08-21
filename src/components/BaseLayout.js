import React, { Component } from 'react'


class BaseLayout extends Component {
  render() {
    return (
      <div>
        {this.props.Header}
        This should house Header and Footer components and be able to house any children components.
        {this.props.Footer}
      </div>
    )
  }
}
export default BaseLayout

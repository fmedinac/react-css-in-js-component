import React from 'react'
import PropTypes from 'prop-types'
import { PureComponent } from 'react-css-in-js-component'

export default class MyTitle extends PureComponent {
  styles () {
    return {
      title: {
        fontSize: 24,
        margin: 'auto',
      }
    }
  }

  render () {
    const { className } = this.props;

    return (
      <h1 className={this.css('title', className)}>
          react-css-in-js-component
      </h1>
    )
  }
}

MyTitle.propTypes = {
  className: PropTypes.string,
}

MyTitle.defaultProps = {
  className: null,
}

import React from 'react'
import { PureComponent } from 'react-css-in-js-component'
import MyTitle from './MyTitle';

export default class MyComponent extends PureComponent {
  styles () {
    return {
      container: {
        display: 'flex',
        height: '100vh'
      },
      title: {
        color: 'tomato'
      }
    }
  }

  render () {
    return (
      <div className={this.css('container')}>
        <MyTitle className={this.css('title')}>
          react-css-in-js-component
        </MyTitle>
      </div>
    )
  }
}

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import CSSComponent from 'react-css-in-js-component'
import MyComponent from './MyComponent';

CSSComponent({
  StyleSheet: StyleSheet.create,
  css,
})

export default class App extends React.Component {
  render () {
    return <MyComponent />
  }
}

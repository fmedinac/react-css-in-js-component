# react-css-in-js-component

> A CSS-in-JS React component helper

[![NPM](https://img.shields.io/npm/v/react-css-in-js-component.svg)](https://www.npmjs.com/package/react-css-in-js-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-css-in-js-component
```

## What is this for

This helper can be used with [multiple CSS-in-JS libraries](#supported-libraries), specialy the ones that **don't** use a component-oriented strategy (those libraries enhance the component primitives instead of parsing and applying class names to elements).

## Usage

You must import the default module of `react-css-in-js-component` and call it as a function to pass configure your library into it. Consider doing it on your App container, since it gets place before your app is bootstrapped.

```js
import React from 'react'
import { StyleSheet, css } from 'css-in-js-library' // See supported libraries below
import CSSComponentConfig from 'react-css-in-js-component'

CSSComponentConfig({
  StyleSheet,
  css,
  shouldFlatStyles: true,
})

export default class App extends Component {
  render () {
    return <MyComponent />
  }
}
```

Then, extend your components using `PureComponent` or `Component` from `react-css-in-js-component` instead of `React`, that way you can pass a static function called `styles` and use `this.css()` method to apply it to your elements.

```js
import React from 'react'
import { Component } from 'react-css-in-js-component'

export default class MyComponent extends Component {
  styles (props) {
    return {
      container: {
        display: 'flex',
        height: '100vh',
      },
      title: {
        fontSize: '24px',
        margin: 'auto',
      },
      titleColor: {
        color: 'tomato',
      },
    }
  }

  render () {
    return (
      <div className={this.css('px')}>
        <h1 className={this.css('title', 'titleColor')}>
          Mangia che te fa bene
        </h1>
      </div>
    )
  }
}
```

See [example](https://github.com/fmedinac/react-css-in-js-component/tree/master/example) folder.

## Supported libraries

Each library has its own way to parse `stylesheet` and `css`, the following table help you to configure `react-css-in-js-component` for your preffered library.

- ✅ Supported library
- ❓ Not tested library (yet)
- ❌ Not supported library (yet)

| Package | Support | Configuration Notes |
|-----------------|:-------------:|-------------|
| [aphrodite](https://github.com/Khan/aphrodite) | ✅ | Use `StyleSheet.create` for `StyleSheet` configuration and `css`|
| [csx](https://github.com/jxnblk/cxs) | ✅ | Use `cxs` for `css` and set `shouldFlatStyles: true`  |
| [emotion](https://github.com/emotion-js/emotion) | ✅ | Use `css` from library |
| [glamor](https://github.com/threepointone/glamor) | ✅ | Use `css` from library |
| [fela](https://github.com/rofrischmann/fela/) | ❓ | |
| [j2c](https://github.com/j2css/j2c) | ❓ | |
| [jss](https://github.com/cssinjs/jss) | ❓ | |
| [react-native](https://github.com/facebook/react-native) | ❓ | |
| [rockey](https://github.com/tuchk4/rockey) | ❓ | |
| [aesthetic](https://github.com/milesj/aesthetic) | ❌ | |
| [glam](https://github.com/threepointone/glam) | ❌ | |
| [styled-components](https://github.com/styled-components/styled-components) | ❌ | |
| [styletron](https://github.com/rtsao/styletron) | ❌ | |


## Global styles

Optionally, you can pass `globalStyles` when configuring `react-css-in-js-component`. Notice that global styles are considered fallbacks, so if your component has a style with the same name, it will be ignored. Try creating a naming convention to prevent that.

Example:

```js
CSSComponent({
  StyleSheet,
  css,
  globalStyles: {
    mx: {
      marginLeft: 16,
      marginRight: 16,
    }
  }
})
...
  <div className={this.css('mx')} />
...
```

## To do

- Write tests
- Test more libraries
- Make HOC based libraries work
- Make component-oriented libraries work

## Thank you

This project is based on [@rafaelrinaldi](https://github.com/rafaelrinaldi/) and [@leandroferreira](https://github.com/leandroferreira/) efforts to make **CSS-in-JS** great.

## License

MIT © [fmedinac](https://github.com/fmedinac)

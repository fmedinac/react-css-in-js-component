import React from 'react'

/**
 * Object used for setting libraries' functions and other options
 */
const config = {}

/**
 * Export configuration setter as default
 * @param {Object} config
 * @param {function} config.css - (required) The function used for converting styles to classNames
 * @param {function} [config.StyleSheet] - A function which styles must be applied in order to be parsed
 * @param {Object} [config.globalStyles] - An object with global styles
 * @param {boolean} [config.shouldFlatStyle] - Set true if the library needs a flatten object instead of multiple styles arguments
 */
export default ({ css, StyleSheet = null, globalStyles = {}, shouldFlatStyle = false }) => {
  config.css = css
  config.styleSheet = StyleSheet
  config.globalStyles = StyleSheet ? StyleSheet(globalStyles) : globalStyles
  config.shouldFlatStyle = shouldFlatStyle
}

/**
 * Object placed outside of component's scope used in case of passing down classNames to children.
 */
const cache = {}

const hoc = Component =>
  class EnhancedComponent extends Component {
    constructor(props) {
      super(props)

      this._styleSheet = this._createStyleSheet()
      this._parseStyles = this._parseStyles.bind(this)
    }

    _parseStyles() {
      if (!this.styles) return {}

      return this.styles(this.props)
    }

    _createStyleSheet() {
      const parsedStyles = this._parseStyles()

      return config.styleSheet ? config.styleSheet(parsedStyles) : parsedStyles
    }

    css(...args) {
      /**
       * Search for style definition in component's style object, cached styles and global styles,
       * respectively.
       */
      const style = args.map(item => this._styleSheet[item] || cache[item] || config.globalStyles[item])

      if (config.shouldFlatStyle) {
        const flattenStyle = style.reduce((accumulator, current) => ({
          ...accumulator,
          ...current
        }), {})
        const className = config.css(flattenStyle)
        cache[className] = flattenStyle

        return className
      }

      // Apply library's css parser function
      const className = config.css(...style)

      // Cache className's style in case of it being passed down to children
      cache[className] = style

      return className
    }
  }

// Export enhanced components
export const PureComponent = hoc(React.PureComponent)
export const Component = hoc(React.Component)
